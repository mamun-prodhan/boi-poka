import React from 'react';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Books = () => {
    const booksData = useLoaderData();
    return (
        <div className='mt-25 mb-9'>
            <h2 className='text-center text-4xl font-bold'>Books: {booksData.length}</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    booksData?.map((book, idx)=> <Book book={book} key={idx}/>)
                }
            </div>
        </div>
    );
};

export default Books;