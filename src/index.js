import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CMS from "netlify-cms";
// import configYAML from "./config.yml";
import netlifyIdentity from "netlify-identity-widget";
// import jsyaml from "js-yaml";


console.log("config", config);

netlifyIdentity.init();
CMS.init({ 
  config: {
  backend: {
    name: "git-gateway",
    branch: "main",
    base_url: "/api",
    site_domain: "https://harmonious-toffee-b74135.netlify.app/",
    identity_url: "https://harmonious-toffee-b74135.netlify.app/.netlify/identity"
  },

media_folder: "static/images/uploads",
public_folder: "/images/uploads"
  }});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
