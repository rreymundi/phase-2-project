import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BookCard = ({ book, onDeleteBook, onSavedBook, onUnsaveBook }) => {
    let saved = book.saved

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: "DELETE",
        })
        onDeleteBook(book.id);
    };

    const handleSaveClick = () => {
      book.saved = true
      onSavedBook(book)
      console.log(book)
    }

    const handleUnsaveClick = () => {
      book.saved = false
      onUnsaveBook(book.id)
      console.log(book)
    }

  return (
    <div className='card'>
      <Card key={book.id} sx={{ width: 150, height: 400, margin: 2 }} >
      <CardMedia
        className='img'
        component="img"
        height="225"
        image={book.image} 
        alt={book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          by {book.author}
        </Typography>
      </CardContent>
      <CardActions className='buttons'>
        <Button size="small" onClick={saved ? handleUnsaveClick : handleSaveClick}>{saved ? "Unsave" : "Save"}</Button>
        <Button size="small" onClick={handleDeleteClick}>Delete</Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default BookCard;
