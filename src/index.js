import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ProductsProvider } from "./context/ProductsContext";
import { FilterProvider } from "./context/FilterContext";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="bidhanroy.us.auth0.com"
    clientId="3HVKSE3vdp2BRz8zrzu8BSX3ZVG9g68B"
    redirectUri={window.location.origin}
    cacheLocattion="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
