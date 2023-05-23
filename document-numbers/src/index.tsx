import 'foundation-sites/dist/css/foundation.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FormConfigurationContextInterface } from './FormContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// TODO: What happens when the API is down or we are unauthorised? Provide a fallback to render.
async function initializeApplication() {
  // TODO: refactor this to fetch from the right place in production
  const formConfiguration: FormConfigurationContextInterface = 
    await fetch(`${window.location.toString()}formConfig.json`)
      .then(res => res.json());

  root.render(
    <React.StrictMode>
      <App formConfiguration={formConfiguration} />
    </React.StrictMode>
  );
}

initializeApplication();


// render app

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
