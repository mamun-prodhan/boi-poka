import React from 'react';
import { LuMapPin } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { MdOutlineRestorePage } from "react-icons/md";
import { Link } from 'react-router';

const ListCard = ({list}) => {
    const {bookId, yearOfPublishing, bookName,publisher, image,totalPages, rating, category, tags, author} = list;
    return (
        <div className='flex items-start gap-6 p-6 rounded-2xl border border-[#131313]/15'>
            <div className='max-w-[230px] w-full p-14 bg-[#131313]/5 rounded-2xl'>
                <img src={image} alt="Book Image" />
            </div>
            <div className='space-y-4'>
                <h2 className='text-3xl font-bold'>{bookName}</h2>
                <p className='font-semibold text-[#131313]/80'>By : {author}</p>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-3'>
                        <span className='font-bold text-[#131313]'>Tag:</span>
                        {
                            tags.map((tag, idx)=> <span key={idx} className='px-2 py-1 bg-[#23BE0A]/5 text-[#23BE0A] rounded-xl'>#{tag}</span>)
                        }
                    </div>
                    <div className='flex items-center gap-3'>
                        <span><LuMapPin /></span>
                        <span>Year of Publishing: {yearOfPublishing}</span>
                    </div>
                </div>

                <div className='flex items-center gap-5 text-[#131313]/60'>
                    <div className='flex items-center gap-3'>
                        <span><RiGroupLine /></span>
                        <span>Publisher: {publisher}</span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <span><MdOutlineRestorePage /></span>
                        <span>Page: {totalPages}</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <button className="btn border-none rounded-full text-[#328EFF] px-4 py-2 bg-[#328EFF]/15 font-medium text-md">Category : {category}</button>

                    <button className="btn border-none rounded-full text-[#328EFF] px-4 py-2 bg-[#328EFF]/15 font-medium text-md">Rating : {rating}</button>

                    <Link to={`/book-details/${bookId}`} className="btn border-none rounded-full text-white px-4 py-2 bg-[#23BE0A] font-medium text-md">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ListCard;