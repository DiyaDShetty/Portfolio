import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MoreProjects from "./components/MoreProjects";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<MoreProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
