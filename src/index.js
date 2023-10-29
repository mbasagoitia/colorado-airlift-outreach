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

const yamlContent = {
  backend: {
    name: 'test-repo',
  },
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      create: true,
      fields: [
        { label: 'Title', name: 'title', widget: 'string' }
      ],
    },
  ],
};

netlifyIdentity.init();
CMS.init({ config: yamlContent });


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
