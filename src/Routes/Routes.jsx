import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
import PageToRead from '../pages/PageToRead/PageToRead';
  
 export const router = createBrowserRouter([
    {
      path: "/",
         Component: Root,
         errorElement: <ErrorPage></ErrorPage>,
         children: [
             {
             index: true,
               loader: ()=>fetch('../../public/data/booksData.json'),
                 path: "/",
                 Component: Home
           },
           {
             path: '/read',
             loader:()=> fetch('../../public/data/booksData.json'),
             Component: PageToRead
           },
           {
             path: 'readList',
             loader: ()=>fetch('../../public/data/booksData.json'),
             Component: ReadList
           },
           {
             path: '/bookDetails/:id',
             loader: ()=>fetch('../../public/data/booksData.json'),
             Component: BookDetails
           }
      ]
    },
  ]);