import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
// auth
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Auth0Provider
      domain="dev-4n7kiqk1w1koa2g3.us.auth0.com"
      clientId="C6gKbI2NmXmcnPcRDmGH8nsgIkXLwDns"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </>
);
