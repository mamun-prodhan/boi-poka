import React, { useMemo, useState } from 'react';
import ListTabs from '../../components/ListTabs/ListTabs';
import { getFromLocalStorage } from '../../utility/localStorage';
import { useLoaderData } from 'react-router';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [sortBy, setSortBy] = useState('');

    const readList = useMemo(()=>{
        const readIds = getFromLocalStorage('readList');
        const convertedReadIds = readIds?.map(id => parseInt(id));
        return allBooks.filter(book => convertedReadIds.includes(book.bookId))
    },[allBooks])

    const wishList = useMemo(()=>{
        const wishIds = getFromLocalStorage('wishList');
        const convertedWishIds = wishIds?.map(id => parseInt(id));
        return allBooks.filter(book => convertedWishIds.includes(book.bookId));
    },[allBooks]);

    const sortBooks = (books, sortBy)=>{
        const sorted = [...books];

        if(sortBy === 'rating'){
            sorted.sort((a, b)=> b.rating - a.rating);
        }
        else if(sortBy === 'pages'){
            sorted.sort((a, b)=> b.totalPages - a.totalPages);
        }
        else if(sortBy === 'year'){
            sorted.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }

        return sorted;
    }

    const sortedReadList = useMemo(()=>{
        return sortBooks(readList, sortBy)
    },[readList, sortBy])

    const sortedWishList = useMemo(()=>{
        return sortBooks(wishList, sortBy)
    },[wishList, sortBy])



    

    return (
        <div className='max-w-11/12 w-full mx-auto'>
            <h2 className='mb-2 text-3xl font-bold text-center py-8 rounded-2xl bg-[#131313]/5'>Books</h2>

            <div className='text-center mb-14'>
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white">Sort By</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button onClick={() => setSortBy('rating')}>Rating</button></li>
                        <li><button onClick={() => setSortBy('pages')}>Number of pages</button></li>
                        <li><button onClick={() => setSortBy('year')}>Publisher year</button></li>
                    </ul>
                </details>
            </div>

            {
                sortedReadList.length
            }

            <ListTabs readList={sortedReadList} wishList={sortedWishList}></ListTabs>
        </div>
    );
};

export default ListedBooks;