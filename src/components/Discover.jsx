import { Container } from "@mui/system";
import React from 'react';
import BookList from './BookList';

const Discover = ({ books, search, onDeleteBook, onSavedBook, onUnsaveBook }) => {

  return (
    <Container sx={{justifyContent: "center"}}>
      <h1>Discover</h1>
      <p>Search for your next favorite book!</p>
      <BookList books={books} search={search} onDeleteBook={onDeleteBook} onSavedBook={onSavedBook} onUnsaveBook={onUnsaveBook} />
    </Container>
  )
}

export default Discover;