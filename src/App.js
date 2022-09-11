import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewBook from "./components/NewBook";
import SavedBooks from "./components/SavedBooks";
import "./index.css";

const App = () => {
  const url = 'http://localhost:3000/books'
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")
  const [savedBooks, setSavedBooks] = useState([])

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

  const handleBookSave = (savedBook) => {
    setSavedBooks([...savedBooks, savedBook])
  }

  const handleUnsaveBook = (id) => {
    const updatedSavedBooks = savedBooks.filter((book) => book.id !== id)
    setSavedBooks(updatedSavedBooks)
  }

  return (
    <Router>
      <NavBar search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home search={search} books={books} onDeleteBook={handleDeleteBook} onSavedBook={handleBookSave} onUnsaveBook={handleUnsaveBook}/>} />
        <Route path='/books/saved' element={<SavedBooks savedBooks={savedBooks} onUnsaveBook={handleUnsaveBook}/>} />
        <Route path='/books/new' element={<NewBook onAddBook={handleBookAdd} />} />
      </Routes>
    </Router>
  );
}

export default App;