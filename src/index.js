import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './components/SignIn';
import ContextProvider from "./components/UserList"
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<App />} />
        {/* <Route path="/mc" element={<MainContent />} /> */}
      </Routes>
  </BrowserRouter>
  </ContextProvider>
);
