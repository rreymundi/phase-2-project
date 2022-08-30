import React from "react";
import BookCard from './BookCard';


const BookList = ({books, search}) => {

    const booksToDisplay = books.filter((book) => book.name.toLowerCase().includes(search.toLocaleLowerCase()))

    const renderedBooks = booksToDisplay.map((book) => <BookCard key={book.id} book={book} />)

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>{renderedBooks}</div>
    )

}

export default BookList;