import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/addToDB';
import Book from '../Book/Book';
import SingleBookData from '../SingleBookData/SingleBookData';
const ReadList = () => {
const [readList, setReadList]= useState([])
    const data = useLoaderData()
    useEffect(() => {
        const storeBookData = getStoreBook();
        const convertedStoreBooks = storeBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoreBooks.includes(book.bookId))
        setReadList(myReadList);

   },[])
    return (
        <div>
             <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
    
        <TabPanel>
                    {
                        readList.map(singleBookData=><SingleBookData singleBookData={singleBookData} key={singleBookData.bookId}></SingleBookData>)
         }
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
       </div>
    );
};

export default ReadList;