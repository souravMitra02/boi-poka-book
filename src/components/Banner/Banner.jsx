import React from 'react';
import book from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
      <div className='px-5 md:px-5 lg:px-0'>
         <div className="hero bg-base-200 lg:min-h-screen rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse lg:px-20 ">
    <img
      src={book}
      className="lg:max-w-sm rounded-lg  bg-base-200 w-3/4"/>
    <div className='space-y-5 p-5 md:p-0 lg:p-0'>
      <h1 className="lg:text-5xl text-2xl font-bold leading-[1.2] Playfair-display">Books to freshen up your bookshelf</h1>
      <button className="btn btn-primary">View The List</button>
    </div>
  </div>
</div>
      </div>
    );
};

export default Banner;