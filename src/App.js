import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewBook from "./components/NewBook";
import SavedBooks from "./components/SavedBooks";

const App = () => {
  const url = 'http://localhost:3000/books'
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(url)
    .then((r) => r.json())
    .then((data) => setBooks(data))
  }, []);

  return (
    <Router>
      <NavBar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home search={search} books={books}/>} />
        <Route path='/books/saved' element={<SavedBooks />} />
        <Route path='/books/new' element={<NewBook />} />
      </Routes>
    </Router>
  );
}

export default App;