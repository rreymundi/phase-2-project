import React from "react";
import SavedBookCard from './SavedBookCard';

const SavedBookList = ({ books, search, onUnsaveBook }) => {

    // const booksToDisplay = books.filter((book) => book.name.toLowerCase().includes(search.toLowerCase()))
    const booksToDisplay = books.map((book) => <SavedBookCard key={book.id} book={book} onUnsaveBook={onUnsaveBook} />)

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>{booksToDisplay}</div>
    )
}

export default SavedBookList;