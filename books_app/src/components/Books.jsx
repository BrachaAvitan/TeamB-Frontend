import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';

const Books = () => {
  const [bookId, setBookId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [publishYear, setPublishYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = { bookId, title, author, price, publishYear };

    try {
      const response = await fetch('http://localhost:5000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        alert('Book added successfully');
      } else {
        alert('Failed to add book');
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add a Book
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Book Id"
                fullWidth
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
                required
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Author"
                fullWidth
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Publish Year"
                fullWidth
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                required
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Books;
