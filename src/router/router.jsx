import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dictionary from "../pages/Dictionary/Dictionary";
import SearchBar from "../components/SearchBar/SearchBar";
import TermMeaning from "../pages/Dictionary/TermMeaning";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/termmeaning" element={<TermMeaning />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
