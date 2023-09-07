import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducer/rootReducer";
import { LikeProvider } from "./context/LikeContext";
const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LikeProvider>
      <App />
    </LikeProvider>
  </Provider>
);
