import React from "react";
import  ReactDOM from "react-dom";
import App from "./components/App"
import { BrowserRouter as Router } from "react-router-dom";

const reactDocumentRoot = document.querySelector("#root")

ReactDOM.render(<App />, reactDocumentRoot)