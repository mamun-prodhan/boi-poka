import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
            loader: ()=> fetch('../../public/booksData.json')
        },
        {
          path: '/listed-books',
          Component: ListedBooks,
          loader: ()=> fetch('../../public/booksData.json')
        },
        {
          path: '/book-details/:id',
          Component: BookDetails,
          loader: ()=> fetch('../../public/booksData.json')
        }
    ]
  },
]);