import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Discover from "./components/Discover";
import NewBook from "./components/NewBook";
import SavedBooks from "./components/SavedBooks";
import "./index.css";

const App = () => {
  const url = 'http://localhost:3000/books'
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")
  const [savedStatus, setSavedStatus] = useState(false)

  useEffect(() => {
    fetch(url)
    .then((r) => r.json())
    .then((data) => setBooks(data))
  }, []);

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id)
    setBooks(updatedBooks)
  }

  const handleBookAdd = (newBook) => {
    setBooks([...books, newBook])
  }

  const handleBookSave = () => {
    setSavedStatus((savedStatus) => !savedStatus)

  }

  const handleUnsaveBook = () => {
    setSavedStatus((savedStatus) => !savedStatus)
  }

  return (
    <Router>
      <NavBar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/discover' element={<Discover search={search} books={books} onDeleteBook={handleDeleteBook} onSavedBook={handleBookSave} onUnsaveBook={handleUnsaveBook} />} />
        <Route path='/books/saved' element={<SavedBooks books={books} onUnsaveBook={handleUnsaveBook} onDeleteBook={handleDeleteBook} search={search} />} />
        <Route path='/books/new' element={<NewBook onAddBook={handleBookAdd} />} />
      </Routes>
    </Router>
  );
}

export default App;