import React from "react";
import BookCard from "./BookCard";
import { Container } from "@mui/system";

const SavedBookList = ({ books, onUnsaveBook, search, onDeleteBook}) => {

    const savedBooks = books.filter((book) => book.saved === true)

    const unfilteredSavedBooks = savedBooks.map((book) => <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} onUnsaveBook={onUnsaveBook} />)
    const filteredSavedBooks = savedBooks.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()))
    const myFilteredSavedBooks = filteredSavedBooks.map((book) => <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} onUnsaveBook={onUnsaveBook} />)

    const displayedSavedBooks = search === "" ? unfilteredSavedBooks : myFilteredSavedBooks;

    return (
        <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
            {savedBooks.length === 0 ? <p>Start adding books to your personal library!</p> : displayedSavedBooks}
        </Container>
    )
}

export default SavedBookList;