import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dictionary from "../pages/Dictionary/Dictionary";
import Header from '../utils/Header/Header';
import Sidebar from "../utils/Sidebar/Sidebar";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sidebar />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;