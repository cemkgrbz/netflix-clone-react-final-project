import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Navbar"
import MainContent from './components/MainContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />

        <Route path="/" element={<App />} />
        MainContent

      </Routes>
  </BrowserRouter>
);
