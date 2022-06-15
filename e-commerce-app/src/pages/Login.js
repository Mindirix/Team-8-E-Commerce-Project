import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../assets/shopping-bags-svgrepo-com.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section className="section-center">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <NavLink to="/" className="btn btn-info">
              Go to Home
            </NavLink>
          </p>
        </section>
      ) : (
        <section className="login-card">
          <article className="login container">
            <div className="tab-content">
              <div className="tab-pane fade show active">
                <div className="login-logo">
                  <img src={logo} alt="store-logo" width={100} />
                </div>
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="loginEmail"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                    <label className="form-label" htmlFor="loginEmail">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
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
                        <label
                          className="form-check-label"
                          htmlFor="loginCheck"
                        >
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
                    <button
                      type="submit"
                      className="btn btn-dark btn-block mb-4"
                      onClick={handleSubmit}
                    >
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
      )}
    </>
  );
};

export default Login;
