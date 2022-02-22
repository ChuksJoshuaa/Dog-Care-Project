import React from "react";
import ReactDOM from "react-dom";
import { DoggoProvider } from "./contexts/dogs_context";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import "jquery/dist/jquery";
import "jquery/dist/jquery.min";
import "jquery/dist/jquery.min.map";
import "jquery/src/jquery";
import "@srexi/purecounterjs";

ReactDOM.render(
  <React.StrictMode>
    <DoggoProvider>
      <App />
    </DoggoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
