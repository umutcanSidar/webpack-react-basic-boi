import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

import PrivateRoute from "./routes/PrivateRoute";
// Shared
import Header from "./shared/Header";
import Footer from "./shared/Footer";
// Pages
import HomePage from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Mailing from "./pages/Mailing";
// Store
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route index path="/" element={<HomePage />} />
            <Route exact path="/mailing" element={<Mailing />} />
          </Route>
          <Route exact path="register" element={<Register />} />
          <Route exact path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
