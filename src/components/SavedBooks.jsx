import React from 'react';
import SavedBookList from './SavedBookList';

const SavedBooks = ({ savedBooks, onUnsaveBook }) => {

  return (
    <>
        <div className='content'>
          <h1>My Library</h1>
          <p>{savedBooks.length === 0 ? "Start adding books to your library!" : <SavedBookList books={savedBooks} onUnsaveBook={onUnsaveBook} />}</p>
          </div>
    </>
  )
}

export default SavedBooks