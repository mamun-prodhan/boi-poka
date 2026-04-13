import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({book}) => {
    const {bookId, bookName, image, rating, category, tags, author} = book;
    return (
        <Link to={`/book-details/${bookId}`}>
            <div className="card bg-base-100 shadow-sm p-6 cursor-pointer">
                <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                    <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl max-w-40 max-h-50 object-cover" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-2'>
                        {
                            tags?.map((tag, idx) => <span key={idx} className='inline-block px-2 py-1 rounded-xl bg-green-100 text-green-600'>{tag}</span>
                            )
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className='flex items-center justify-between pt-5 mt-5 border-t border-dashed border-[#131313]/15'>
                        <p>{category}</p>
                        <div className='flex items-center gap-2'>
                            <p className='inline-block'>{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                    
                </div>

            </div>
        </Link>
    );
};

export default Book;