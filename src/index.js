import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './pages/About';
import Paths from './paths';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tabs from './TABS';

ReactDOM.render(
  <React.StrictMode>
 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
