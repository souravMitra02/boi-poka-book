import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/booksData.json')
            .then(res => res.json())
        .then(data=>setAllBooks(data))
    }, [])
   
    return (
        <div>
            <h1 className='text-center text-3xl font-bold Playfair-display mt-10 lg:mt-20'>Books</h1>
            
            <div>
            {
                allBooks.map(book=><Book book={book} key={book.bookId}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;