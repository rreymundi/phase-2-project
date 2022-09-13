import React from "react";
import BookCard from "./BookCard";
import { Container } from "@mui/system";

const SavedBookList = ({ books, onUnsaveBook }) => {

    const booksToDisplay = books.map((book) => <BookCard key={book.id} book={book} onUnsaveBook={onUnsaveBook} />)

    return (
        <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
            {booksToDisplay}
        </Container>
    )
}

export default SavedBookList;