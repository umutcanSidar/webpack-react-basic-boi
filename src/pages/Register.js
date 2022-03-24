import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import { register } from "../actions/auth.action";

const Register = () => {
  const [auth, setAuth] = useState({ email: "", password: "", username: "" });

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const { userInfo, loading, error } = login;

  const onHandleSubmitted = (e) => {
    e.preventDefault();
    dispatch(register(auth));
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
              <h3>Register</h3>
              <form className="mt-4">
                <div className="row mb-3">
                  <label htmlFor="username" className="col-sm-2 col-form-label">
                    Username
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      onChange={(e) =>
                        setAuth({ ...auth, [e.target.name]: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="email" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      onChange={(e) =>
                        setAuth({ ...auth, [e.target.name]: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="password" className="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
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
                  Register
                </button>
                <Link to="/login" className="btn btn-link">
                  Login
                </Link>
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

export default Register;
