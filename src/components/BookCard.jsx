import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BookCard = ({ book, onDeleteBook, onSavedBook, onUnsaveBook }) => {
    const saved = book.saved

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: "DELETE",
        })
        onDeleteBook(book.id);
    };

    const handleSaveClick = () => {
      onSavedBook(book)
    }

    const handleUnsaveClick = () => {
      onUnsaveBook(book.id)
    }

  return (
    <div className='card'>
      <Card key={book.id} sx={{ maxWidth: 150, margin: 2 }} >
      <CardMedia
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
      <CardActions>
        <Button size="small" onClick={saved ? handleUnsaveClick : handleSaveClick}>{saved ? "Unsave" : "Save"}</Button>
        <Button size="small" onClick={handleDeleteClick}>Delete</Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default BookCard;
