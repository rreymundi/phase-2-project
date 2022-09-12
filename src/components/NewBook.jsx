import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const NewBook = ({onAddBook}) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
    genre: "",
    blurb: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: formData.title,
      author: formData.author,
      image: formData.image,
      genre: formData.genre,
      blurb: formData.blurb,
      saved: false
      }
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newBook)
    })
    .then((r) => r.json())
    .then(onAddBook)
  }

  return (
    <div className='content'>
        <h1>Add a book</h1>
          <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField required id="title" name="title" variant="standard" placeholder="Title" value={formData.title} onChange={handleChange} />
            <TextField required id="author" name="author" variant="standard" placeholder="Author" value={formData.author} onChange={handleChange} />
            <TextField required id="image" name="image" variant="standard" placeholder="Image URL" value={formData.image} onChange={handleChange} type="url" />
            <TextField required id="genre" name="genre" variant="standard" placeholder="Genre" value={formData.genre} onChange={handleChange} />
            <TextField required id="blurb" name="blurb" variant="standard" placeholder="Blurb" value={formData.blurb} onChange={handleChange} />
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Box>
    </div>
  )
}

export default NewBook;