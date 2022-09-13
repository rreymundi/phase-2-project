import { Container } from "@mui/system";
import React from 'react';
import BookList from './BookList';

const Home = ({ books, search, onDeleteBook, onSavedBook, onUnsaveBook }) => {

  return (
    <Container sx={{justifyContent: "center"}}>
      <h1>Welcome to Bookmarked!</h1>
      <p>An online repository of all your favorite books</p>
      <BookList books={books} search={search} onDeleteBook={onDeleteBook} onSavedBook={onSavedBook} onUnsaveBook={onUnsaveBook} />
    </Container>
  )
}

export default Home;