import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

