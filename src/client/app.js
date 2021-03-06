/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import "@babel/polyfill";
import * as React from "react";
import ReactDOM from "react-dom";

import "./app.scss";

import MainPage from "./components/main-page";

ReactDOM.render(<MainPage />, document.querySelector("#app"));
