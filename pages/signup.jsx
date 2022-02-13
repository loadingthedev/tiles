import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    checked: false,
    name: "",
    confirm_password: "",
  });
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
