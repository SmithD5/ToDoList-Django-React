import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// importing css stylesheet to use the bootstrap class
import 'bootstrap/dist/css/bootstrap.min.css'; //add this line only in this file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

