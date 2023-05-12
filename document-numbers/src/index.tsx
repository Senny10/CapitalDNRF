import 'foundation-sites/dist/css/foundation.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { Project } from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// TODO: What happens when the API is down or we are unauthorised? Provide a fallback to render.
async function initializeApplication() {
  // TODO: refactor this to fetch from the right place in production
  const projects: Project[] = await fetch(`${process.env.REACT_APP_API_URL}/projects.json`).then(res => res.json());

  // needs a way to create global state, or ideally use a library like tanstack-query
  window.localStorage.setItem('APPNAME.projects', JSON.stringify(projects));

  root.render(
    <React.StrictMode>
      <App projects={projects} />
    </React.StrictMode>
  );
}

initializeApplication();


// render app

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
