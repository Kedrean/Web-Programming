import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ArticleList from "./pages/ArticleList";

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/articles" element={<ArticleList />} />
            </Routes>
        </Router>
    );
}

export default App;
