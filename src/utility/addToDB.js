import React from 'react';
import {  Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const getStoreBook = () => {
    const storeBook = localStorage.getItem('readList');
    if (storeBook) {
        return JSON.parse(storeBook);
    } else {
        return [];
    }
};

const addToStoreDB = (id) => {
    const storeBookData = getStoreBook();
    if (storeBookData.includes(id)) {
        toast.warn('Already in your read list!!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
    } else {
        storeBookData.push(id);
        localStorage.setItem('readList', JSON.stringify(storeBookData));
    }
};

export { addToStoreDB, getStoreBook };
