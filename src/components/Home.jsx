import React from 'react';
import BookList from './BookList';

const Home = ({ books, search, onDeleteBook, onSavedBook, onUnsaveBook }) => {

  return (
    <>
    <div className='content'>
      <h1>Welcome to Bookmarked!</h1>
      <p>An online repository of all your favorite books</p>
    </div>
    <BookList books={books} search={search} onDeleteBook={onDeleteBook} onSavedBook={onSavedBook} onUnsaveBook={onUnsaveBook} />
    </>
  )
}

export default Home;