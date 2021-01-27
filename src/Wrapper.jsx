import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Store from "./store/Store.js";

export const Wrapper = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));

export default Wrapper;
