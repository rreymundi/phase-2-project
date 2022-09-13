import React from 'react';
import SavedBookList from './SavedBookList';
import { Container } from "@mui/system";

const SavedBooks = ({ savedBooks, onUnsaveBook, isSaved, setSaved }) => {

  return (
    <Container>
      <h1>My Library</h1>
      <div>{savedBooks.length === 0 ? <p>Start adding books to your personal library!</p> : <SavedBookList books={savedBooks} onUnsaveBook={onUnsaveBook} isSaved={isSaved} setSaved={setSaved}/>}</div>
    </Container>
  )
}

export default SavedBooks