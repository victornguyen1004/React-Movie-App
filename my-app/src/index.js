import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="flex flex-row">
      <App />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

