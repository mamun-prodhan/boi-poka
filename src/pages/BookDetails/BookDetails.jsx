import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setToLocalStorage } from '../../utility/localStorage';

const BookDetails = () => {
    const booksData = useLoaderData();
    const {id} = useParams();
    const selectedBookData = booksData.find(book => book.bookId === Number(id));

    const {bookId,yearOfPublishing, bookName,publisher, image,totalPages, rating, category, tags,review, author} = selectedBookData;

    const handleList = (dataKey, id)=>{
        setToLocalStorage(dataKey, id);
    }



    return (

        <div className='max-w-11/12 mx-auto flex gap-10'>
            <div className='flex-1 flex items-center justify-center bg-[#131313]/5 p-10 rounded-2xl'>
                <img className='max-w-[425px] w-full' src={image} alt="" />
            </div>
            <div className='flex-1 space-y-6'>
                <h2 className='text-5xl font-bold'>{bookName}</h2>
                <p className='text-xl font-bold'>By: {author}</p>
                <p className='text-xl font-bold py-4 border-t border-b border-[#131313]/15'>{category}</p>
                <p className='text-sm text-[#131313]/70'><span className='font-bold text-[#131313]'>Review:</span> {review}</p>
                <div className='flex items-center gap-5'>
                    <span className='font-bold text-[#131313]'>Tag:</span>
                    {
                        tags.map((tag, idx)=> <span key={idx} className='px-2 py-1 bg-[#23BE0A]/5 text-[#23BE0A] rounded-xl'>#{tag}</span>)
                    }
                </div>
                <div className='space-y-3'>
                    <p className='flex items-center'><span className='w-50 text-[#131313]/70'>Number of Pages: </span><span className=' text-[#131313] font-semibold'>{totalPages}</span></p>

                    <p className='flex items-center'><span className='w-50 text-[#131313]/70'>Publisher: </span><span className='text-[#131313] font-semibold'>{publisher}</span></p>

                    <p className='flex items-center'><span className='w-50 text-[#131313]/70'>Year of Publishing:: </span><span className='text-[#131313] font-semibold'>{yearOfPublishing}</span></p>

                    <p className='flex items-center'><span className='w-50 text-[#131313]/70'>Rating: </span><span className='text-[#131313] font-semibold'>{rating}</span></p>
                </div>
                <div>
                    <button onClick={()=>handleList('readList',bookId)} className='btn mr-5'>Read</button>
                    <button onClick={()=>{handleList('wishList', bookId)}} className='btn bg-[#50B1C9] text-white'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;