import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SavedBookCard = ({ book, onUnsaveBook }) => {

    const handleUnsaveClick = () => {
        onUnsaveBook(book.id);
    }

  return (
    <Card key={book.id} className="card" sx={{ maxWidth: 150, margin: 2, position: 'relative'}} >
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
        <Button size="small" onClick={handleUnsaveClick}>Unsave</Button>
      </CardActions>
    </Card>
  );
}

export default SavedBookCard;
