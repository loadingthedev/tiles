import axios from "axios";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    checkbox: false,
    name: "",
    mobile: "",
    confirm_password: "",
  });
  const router = useRouter();
  const [errMsg, setErrMsg] = useState(null);
  const [sucMsg, setsucMsg] = useState(null);

  const handleChange = (name) => (e) => {
    if (errMsg) {
      setErrMsg(null);
    }
    if (name === "checkbox") {
      setForm({ ...form, [name]: e.target.checked });
    } else {
      setForm({ ...form, [name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const headers = {
        "Content-Type": "application/json",
      };

      //   {
      //     "name":"Aftab",
      //     "mobile":"9990353412","email":"admin@tiles.com","password":"123456"
      // }

      try {
        const res = await axios.post(
          "https://tilesobz.herokuapp.com/api/user/register",
          {
            name: form.name,
            email: form.email,
            password: form.password,
            mobile: form.mobile,
          },
          headers
        );
        if (res.status === 201) {
          // localStorage.setItem("user", JSON.stringify(res?.data?.user));
          // setUser(res.data);
          setsucMsg("User Created Now please Signin");
          setTimeout(() => {
            router.push("/signin");
          }, 1000);
        }
      } catch (error) {
        // console.log(error);
        setsucMsg(null);
        setErrMsg("user Already created");
      }
    }
  };

  const isValid = () => {
    if (form.name === "") {
      setErrMsg("Name is Mandatory");
      return false;
    }

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
    } else {
      if (form.password !== form.confirm_password) {
        setErrMsg("Password and Confirm password should be same ");
        return false;
      }
    }

    if (!form.checkbox) {
      setErrMsg("Please Accept term and Conditon");
      return false;
    }

    return true;
  };

  return (
    <Layout pageTitle="Robin Tiles">
      <Header extraClassName="color" page="review" />
      <MobileMenu />
      <section style={{ paddingTop: 74 }}>
        <div class="signup-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <h2>Sign Up</h2>
            {errMsg && (
              <div className="alert alert-danger" role="alert">
                {errMsg}
              </div>
            )}
            {sucMsg && (
              <div className="alert alert-success" role="alert">
                {sucMsg}
              </div>
            )}
            <hr />
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <span class="fa fa-user"></span>/
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Full Name"
                  required="required"
                  onChange={handleChange("name")}
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                </div>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  onChange={handleChange("email")}
                  placeholder="Email Address"
                  required="required"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    {/* <i class="fa fa-paper-plane"></i> */}
                    <i class="fa-solid fa-mobile"></i>
                  </span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  name="mobile"
                  onChange={handleChange("mobile")}
                  placeholder="moblile number"
                  required="required"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange("password")}
                  required="required"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                    <i class="fa fa-check"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required="required"
                  onChange={handleChange("confirm_password")}
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  required="required"
                  onChange={handleChange("checkbox")}
                />{" "}
                I accept the <a href="#">Terms of Use</a> &amp;{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div class="text-center">
            Already have an account?{" "}
            <Link href="/signin">
              <a style={{ color: "#000" }}>Login here</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
