import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {signIn} from "../actions/auth.action";

const Login = () => {
  const [auth, setAuth] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const { userInfo, loading, error } = login;

  const onHandleSubmitted = (e) => {
    e.preventDefault();
    dispatch(signIn(auth));
  };

  return !userInfo ? (
    <div className="login">
      <div className="container">
        <div className="row justify-center">
          <div className="col-6">
            <figure className="mb-0">
              <img
                src="https://dummyimage.com/600x450/a8dadc/fff"
                width="100%"
              />
            </figure>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="form-width">
              <h3>Login</h3>
              <form className="mt-4">
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="inputEmail3"
                      onChange={(e) =>
                        setAuth({ ...auth, [e.target.name]: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="inputPassword3"
                      onChange={(e) =>
                        setAuth({ ...auth, [e.target.name]: e.target.value })
                      }
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={(e) => onHandleSubmitted(e)}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
