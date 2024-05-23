import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/login';
import Dictionary from '../pages/Dictionary/Dictionary';
import SearchBar from "../components/SearchBar/SearchBar";
import TermMeaning from "../pages/Dictionary/TermMeaning";
import Profile from "../pages/Profile/Profile";
import MyWords from "../pages/Profile/MyWords";
import WordsList from "../pages/Profile/WordsList";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/termmeaning" element={<TermMeaning />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mywords" element={<MyWords />} />
        <Route path="/wordslist" element={<WordsList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
