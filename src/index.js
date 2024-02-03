import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-vxe36hvqgek4znvk.us.auth0.com"
    clientId="cEZAYqKrftISeOkGrxkjPtnO3T2RMMVR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

