import React from 'react';
import SavedBookList from './SavedBookList';
import { Container } from "@mui/system";

const SavedBooks = ({ books, onUnsaveBook, search, onDeleteBook }) => {

  return (
    <Container>
      <h1>My Library</h1>
      <SavedBookList books={books} onUnsaveBook={onUnsaveBook} search={search} onDeleteBook={onDeleteBook} />
    </Container>
  )
}

export default SavedBooks