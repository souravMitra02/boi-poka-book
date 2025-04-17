import Book from '../Book/Book';

const Books = ({data}) => {
    
   
    return (
        <div >
            <h1 className='text-center text-3xl font-bold Playfair-display mt-10 lg:mt-20 mb-10 '>Books</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   lg:gap-5 lg:mt-10 px-10 md:px-0 lg:px-0 '>
                {
                    data.map(bookData=><Book bookData={bookData} key={bookData.bookId}></Book>)
           }
            </div>
        </div>
    );
};

export default Books;