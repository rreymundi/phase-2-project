import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewRecipe from "./components/NewRecipe";
import SavedRecipes from "./components/SavedRecipes";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes/saved' element={<SavedRecipes />} />
        <Route path='/recipes/new' element={<NewRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;