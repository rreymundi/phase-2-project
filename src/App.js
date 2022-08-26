import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewBook from "./components/NewBook";
import SavedBooks from "./components/SavedBooks";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/saved' element={<SavedBooks />} />
        <Route path='/books/new' element={<NewBook />} />
      </Routes>
    </Router>
  );
}

export default App;