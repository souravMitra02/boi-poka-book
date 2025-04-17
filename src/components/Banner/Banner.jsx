import React from 'react';
import book from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 lg:min-h-screen rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse lg:px-20 ">
    <img
      src={book}
      className="lg:max-w-sm rounded-lg  bg-base-200" />
    <div className='space-y-5'>
      <h1 className="lg:text-5xl text-4xl font-bold leading-[1.2] Playfair-display">Books to freshen up your bookshelf</h1>
      <button className="btn btn-primary">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;