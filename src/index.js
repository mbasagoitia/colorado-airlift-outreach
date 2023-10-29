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

const yamlContent = `
backend:
name: git-gateway
repo: mbasagoitia/colorado-airlift/outreach
branch: main
base_url: /api
site_domain: https://harmonious-toffee-b74135.netlify.app/
identity_url: https://harmonious-toffee-b74135.netlify.app/.netlify/identity
media_folder: public/images/uploads
public_folder: /images/uploads
collections:
- name: 'home'
label: 'Home'
folder: 'content/pages/home'
create: true
fields:
  - { name: 'title', label: 'Title', widget: 'string' }
  - { name: 'body', label: 'Body', widget: 'markdown' }
roles: ["admin"]
- name: 'mission'
label: 'Mission'
folder: 'content/pages/mission'
create: true
fields:
  { name: 'title', label: 'Title', widget: 'string' }
  { name: 'body', label: 'Body', widget: 'markdown' }
roles: ["admin"]
- name: 'what-we-do'
label: 'What We Do'
folder: 'content/pages/what-we-do'
create: true
fields:
  { name: 'title', label: 'Title', widget: 'string' }
  { name: 'body', label: 'Body', widget: 'markdown' }
roles: ["admin"]
- name: 'clinic-schedule'
label: 'Clinic Schedule'
folder: 'content/pages/clinic-schedule'
create: true
fields:
  { name: 'title', label: 'Title', widget: 'string' }
  { name: 'body', label: 'Body', widget: 'markdown' }
roles: ["admin"]
- name: 'clinic-trip-checklist'
label: 'Clinic Trip Checklist'
folder: 'content/pages/resources/clinic-trip-checklist'
create: true
fields:
  { name: 'title', label: 'Title', widget: 'string' }
  { name: 'body', label: 'Body', widget: 'markdown' }
roles: ["admin"]
- name: 'emergency-contacts'
label: 'Emergency Contacts'
folder: 'content/pages/resources/emergency-contacts'
create: true
fields:
  { name: 'title', label: 'Title', widget: 'string' }
  { name: 'body', label: 'Body', widget: 'markdown' }
roles: ["admin"]
- name: 'links'
label: 'Links'
folder: 'content/pages/resources/links'
create: true
fields:
  { name: 'title', label: 'Title', widget: 'string' }
  { name: 'body', label: 'Body', widget: 'markdown' }
roles: ["admin"]
- name: 'pilot-information'
label: 'Pilot Information'
folder: 'content/pages/pilot-information'
create: true
fields:
  { name: 'title', label: 'Title', widget: 'string' }
  { name: 'body', label: 'Body', widget: 'markdown' }
roles: ["admin"]
- name: 'contact'
label: 'Contact'
folder: 'content/pages/contact'
create: true
fields:
  { name: 'title', label: 'Title', widget: 'string' }
  { name: 'body', label: 'Body', widget: 'markdown' }
roles: ["admin"]
- name: 'videos-photos-collection1'
label: 'Videos and Photos Collection 1'
folder: 'content/pages/resources/videos-and-photos/collection1'
create: true
fields:
  { name: 'title', label: 'Title', widget: 'string' }
  { name: 'body', label: 'Body', widget: 'markdown' }
  { name: 'images', label: 'Images', widget: 'list', fields: [
    { name: 'image', label: 'Image', widget: 'image' }
  ]
}
roles: ["admin"]
site_config:
name: 'site-config'
file: 'data/site-config.json'
label: 'Site Configuration'
create: true
delete: true
editor:
  preview: true
fields:
  - { name: 'title', label: 'Site Title', widget: 'string' }
  - { name: 'metaDescription', label: 'Meta Description', widget: 'text' }
`
const parsedYamlContent = jsyaml.load(yamlContent);

CMS.init({ config: parsedYamlContent });

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
