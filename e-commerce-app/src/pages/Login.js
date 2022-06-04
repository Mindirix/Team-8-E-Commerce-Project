import React from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="login-card">
      <article className="login container">
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <form>
              <div className="text-center mb-3">
                <p>Sign in with:</p>
                <button
                  type="button"
                  className="btn btn-link-dark btn-floating mx-1"
                >
                  <FaFacebook />
                </button>

                <button
                  type="button"
                  className="btn btn-link-dark btn-floating mx-1"
                >
                  <FaGoogle />
                </button>

                <button
                  type="button"
                  className="btn btn-link-dark btn-floating mx-1"
                >
                  <FaTwitter />
                </button>

                <button
                  type="button"
                  className="btn btn-link-dark btn-floating mx-1"
                >
                  <FaInstagram />
                </button>
              </div>

              <p className="text-center">or:</p>

              <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">
                  Email or username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  <button type="button" className="btn btn-link">
                    Forgot password?
                  </button>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-block mb-4">
                  Sign in
                </button>
              </div>

              <div className="text-center">
                <p>
                  Not a member?
                  <NavLink className={"btn btn-link"} to={"/register"}>
                    Register
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
