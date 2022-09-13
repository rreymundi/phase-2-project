import { Container } from "@mui/system";
import React from 'react';

const Home = ({ books, search, onDeleteBook, onSavedBook, onUnsaveBook }) => {

  return (
    <Container sx={{justifyContent: "center"}}>
      <h1>Welcome to Bookmarked</h1>
      <p>An online library with all your favorite books!</p>
    </Container>
  )
}

export default Home;