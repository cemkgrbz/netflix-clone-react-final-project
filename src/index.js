import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from './components/Header/MainContent';
import SignIn from './components/SignIn';
import Register from './components/Register';
import ContextProvider from "./components/UserList"
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mc" element={<MainContent />} />
      </Routes>
  </BrowserRouter>
  </ContextProvider>
);
