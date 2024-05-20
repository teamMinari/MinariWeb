import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Dictionary from "../pages/Dictionary/Dictionary";
import SearchBar from "../components/SearchBar/SearchBar";
import Home from "../pages/Home/Home";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/searchbar" element={<SearchBar />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
