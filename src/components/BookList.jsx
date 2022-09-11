import React from "react";
import BookCard from './BookCard';

const BookList = ({ books, search, onDeleteBook, onSavedBook, onUnsaveBook }) => {
    
    const unfilteredBooks = books.slice(0, 20).map((book) => <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} onSavedBook={onSavedBook} onUnsaveBook={onUnsaveBook} />)
    
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()))
    const myFilteredBooks = filteredBooks.map((book) => <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} onSavedBook={onSavedBook} onUnsaveBook={onUnsaveBook} />)

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>{search === "" ? unfilteredBooks : myFilteredBooks}</div>
    )
}

export default BookList;