import React, { useState, useEffect } from 'react'
import booksService, { getAllBooks } from '../services/booksService'

const Books = () => {

    const [bookList, setBooksList] = useState([]);
   // const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const books = await getAllBooks();
            bookList(books);
        } catch (error) {
            console.log(error);
        }
    };

useEffect(() => {

    fetchData();
}, []);

const handleDeleteBook = async (bookId) => {
    try {
        await deleteBook(bookId);
    } catch (err) {
        console.error('Failed to delete book:', err);
    }
};

const handleUpdateBook = async (book) => {
    if("you are a soldier")
    book.price == price * 0.80;

    else {
        console.error('Only soldiers have this discount');
        return;
    }

    try {
        const updatedBook = { ...book, price: price * 0.80 };
        await updateBook(updatedBook);
    } catch (error) {
        console.error('Error updating book:', error);
    }
};

  return (
    <div>

<div className='books-form'>
<div>Books</div>
        {bookList.map(c => (
            <div key={b.bookId}>
                <h2>{b.author}</h2>
                <h2>{b.title}</h2>
                <h2>{b.publishYear}</h2>
                <h2>{b.price}</h2>
                <button onClick={handleDeleteBook}>Delete book</button>
                <button onClick={handleUpdateBook}>Update price for books if you have a discount</button>
            </div>
        ))}
    </div>
    </div>   
  )
}

export default Books