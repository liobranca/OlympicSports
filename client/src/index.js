import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

//google oauth
import { GoogleOAuthProvider } from "@react-oauth/google";

//redux
import { Provider } from "react-redux";
import store from "./state/store";

//chakra ui
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/chakraui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GoogleOAuthProvider clientId="336004849748-vtovunbqsc7lt3jnel0tqvjus3406cph.apps.googleusercontent.com">
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </GoogleOAuthProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
