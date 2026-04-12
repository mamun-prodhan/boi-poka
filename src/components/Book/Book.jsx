import React from 'react';

const Book = ({book}) => {
    const {bookId, bookName, image, rating, category, tags, publisher} = book;
    return (
        <div className="card bg-base-100 shadow-sm p-6">
            <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                <img
                src={image}
                alt="Shoes"
                className="rounded-xl max-w-40 max-h-50 object-cover" />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-2'>
                    {
                        tags.map((tag, idx) => <span key={idx} className='inline-block px-2 py-1 rounded-xl bg-green-100 text-green-600'>{tag}</span>
                        )
                    }
                </div>
                <h2 className="card-title">{bookName}</h2>
            </div>
        </div>
    );
};

export default Book;