/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/

// Importing necessary dependencies and components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Index.css';
// Rendering the App component to the root element
ReactDOM.render(
  // Enabling strict mode for additional development checks
  <React.StrictMode>
    {/* Rendering the main App component */}
    <App />
  </React.StrictMode>,
  // Specifying the root element where the app should be rendered
  document.getElementById('root')
);


