import React from "react";
import ReactDOM from "react-dom";
import pie, { doublePi, triplePi } from "./math";
// pi is imported as default and I can change its name (now "pie").
// doublePi & triplePi must be named the same as the export name.

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    {/* The next are functions so they require () to work */}
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
