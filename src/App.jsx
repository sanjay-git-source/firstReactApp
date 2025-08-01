import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import InvoiceList from "./pages/InvoiceList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/invoices" element={<InvoiceList />} />
      </Routes>
    </Router>
  );
};

export default App;
