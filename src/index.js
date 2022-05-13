import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// This is in brackets because you want the component function exported instead of the context object/default export
import { FavoritesContextProvider } from "./store/favorites-context";

import "./index.css";
import App from "./App";

// Sinc BrowserRouter is itself a component, therefore we can use it as an HTML element opening and closing tags
// and wrap it around App component. Similar idea with FavoritesContextProvider, since so many components want access to it
// by wrapping it around every component in this application are able to interact with the context
ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
