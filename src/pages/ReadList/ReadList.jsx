import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/addToDB';
import SingleBookData from '../SingleBookData/SingleBookData';
const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('');
    const data = useLoaderData()
    useEffect(() => {
        const storeBookData = getStoreBook();
        const convertedStoreBooks = storeBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoreBooks.includes(book.bookId))
        setReadList(myReadList);

    }, [])
    

    const handleSort = (type) => {
        setSort(type)
        if (type === 'rating') {
            const sortByRating = [...readList].sort((a,b)=> b.rating - a.rating);
            setReadList(sortByRating);
        }
        if (type === 'pages') {
            const sortByPage = [...readList].sort((a, b) => b.totalPages - a.totalPages);
            setReadList(sortByPage)
        }
        if (type === 'year') {
            const sortByYear = [...readList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setReadList(sortByYear)
        }
}



    return (
        <div>
            <details className="dropdown justify-center flex items-center">
                <summary className="btn m-1 bg-[#23BE0A] text-white font-semibold">Sort By {sort?sort:''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('rating')}>Rating</a></li>
    <li><a onClick={()=>handleSort('pages')}>Number of pages</a></li>
    <li><a onClick={()=>handleSort('year')}>Publisher Year</a></li>
  </ul>
</details>
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