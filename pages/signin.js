import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { LoginUserAtom } from "../lib/recoil-atoms";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";

export default function SignIn() {
  const [user, setUser] = useRecoilState(LoginUserAtom);
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    checked: false,
  });

  useEffect(() => {
    const existdUser = localStorage.getItem(user);
    if (existdUser) {
      router.push("/");
    }
  }, []);

  const [errMsg, setErrMsg] = useState(null);

  const handleChange = (name) => (e) => {
    if (errMsg) {
      setErrMsg(null);
    }
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const headers = {
        "Content-Type": "application/json",
      };

      const res = await axios.post(
        "https://tilesobz.herokuapp.com/api/auth/login",
        {
          email: form.email,
          password: form.password,
        },
        headers
      );
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        setUser(res.data);
        router.push("/");
      }
    }
  };

  const isValid = () => {
    if (form.email !== "") {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
        setErrMsg("You have entered an invalid email address!");
        return false;
      }
    } else {
      setErrMsg("Email is mandatory");
      return false;
    }

    if (form.password === "" && form.password.length < 4) {
      setErrMsg("Password must be grater than 4 digit");
      return false;
    }

    return true;
  };

  return (
    <Layout pageTitle="Robin Tiles">
      <Header />
      <MobileMenu />
      <div className="container d-flex  vh-100 justify-content-center align-items-center">
        <div className="card w-100 p-5 rounded" style={{ maxWidth: 500 }}>
          <h3>Sign In</h3>
          {errMsg && (
            <div className="alert alert-danger" role="alert">
              {errMsg}
            </div>
          )}
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              value={form.email}
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange("email")}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange("password")}
            />
          </div>
          {/* <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
          <button
            type="submit"
            className="btn btn-primary "
            onClick={handleSubmit}
          >
            Submit
          </button>
          {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
        </div>
      </div>
    </Layout>
  );
}
