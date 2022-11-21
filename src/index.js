import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from './components/Header/MainContent';
import SignIn from './components/SignIn';
import Register from './components/Register';
import ContextProvider from "./components/UserList"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<MainContent />} />

        <Route path="/" element={<App />} />
      </Routes>
  </BrowserRouter>
  </ContextProvider>
);
