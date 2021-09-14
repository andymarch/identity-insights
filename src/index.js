import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);