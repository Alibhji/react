import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Source: https://medium.com/swlh/react-without-create-react-app-setting-up-a-dev-build-from-scratch-fefd5d9d6baa
// Here, we’re telling react-dom to render our App component inside of a DOM node with the id root'
// This means we’ll also need an index.html file with an element that has the id root
ReactDOM.render(<App />, document.getElementById("root"));
