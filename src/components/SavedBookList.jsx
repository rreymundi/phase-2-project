import React from "react";
import BookCard from "./BookCard";

const SavedBookList = ({ books, onUnsaveBook }) => {

    const booksToDisplay = books.map((book) => <BookCard key={book.id} book={book} onUnsaveBook={onUnsaveBook} />)

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>{booksToDisplay}</div>
    )
}

export default SavedBookList;