import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";
const Book = ({ bookData }) => {
  const {bookId, image, tags, bookName, author, category, rating } = bookData;
  return (
    <Link to={`/bookDetails/${bookId}`}>
     <div className="card bg-base-100 h-[482px]  shadow-sm p-5  border border-[#13131326] mb-10 relative">
      <figure className="bg-[#F3F3F3] p-10 rounded-[16px]">
        <img className="w-2/4 lg:w-[134px] lg:h-[166px]" src={image} />
      </figure>
      <div className="card-body relative">
        <div className="flex gap-3">
          <h3 className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 font-bold rounded-full">
            {tags[0]}
          </h3>
          <h3 className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 font-bold rounded-full">
            {tags[1]}
          </h3>
        </div>
        <div className="px-2 space-y-3">
        <h2 className=" Playfair-display text-xl font-bold">{bookName}</h2>
        <h4 className="font-semibold mb-10">By : {author}</h4>
       </div>
        <div className=" absolute bottom-0 left-0 w-full">
          <div className="flex mt-3 mb-4 border-t-2 border-dashed border-[#13131326]"></div>
          <div>
            <div className="flex items-center">
              <p className="font-semibold text-gray-500">{category}</p>
              <p className="text-end text-gray-500">{rating}</p>
              <FaRegStarHalfStroke color="yellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
