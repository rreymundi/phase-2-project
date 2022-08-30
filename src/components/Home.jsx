import React from 'react';
import BookList from './BookList';

const Home = ({books, search}) => {

  return (
    <>
    <h1>Welcome to Booksmart!</h1>
    {search === "" ? "Search for a book to begin your reading journey." : <BookList books={books} search={search} />}
    </>
  )
}

export default Home;