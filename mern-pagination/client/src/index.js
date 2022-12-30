import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route exact path="/page/:pageNumber" element={<App/>} />
        <Route exact path="/" element={<App/>} /> */}
        <Route exact path="/" element={<App1/>} /> 
      </Routes>
    </Router>


  </React.StrictMode>
);

