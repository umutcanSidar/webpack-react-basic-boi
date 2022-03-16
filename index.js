import React from "react";
import ReactDom from "react-dom";

import App from './src/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./public/css/main.css";
import "./public/css/colors.css";

ReactDom.render(<App />,document.getElementById("root"));
