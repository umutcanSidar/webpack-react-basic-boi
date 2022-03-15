import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

// Shared
import Header from "./shared/Header";
import Footer from "./shared/Footer";
// Pages
import HomePage from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
        <Route exact path="register" element={<Register />} />
        <Route exact path="login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
