import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CMS from "netlify-cms";
import configYAML from "./config.yml";
import netlifyIdentity from "netlify-identity-widget";
import jsyaml from "js-yaml";

fetch("../config.yml")
.then((res) => res.text())
.then((yamlText) => {
  const yamlObj = jsyaml.load(yamlText);
  console.log(yamlObj);
  CMS.init({ config: yamlObj });
})
.catch((err) => {
  console.error(err);
})

// fetch('./config.yml')
// .then((res) => res.text())
// .then((yamlText) => {
//   const yamlObj = jsyaml.load(yamlText);
//   console.log(yamlObj);
//   CMS.init({ yamlObj });
// })
// .catch((err) => console.error(err));

netlifyIdentity.init();


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
