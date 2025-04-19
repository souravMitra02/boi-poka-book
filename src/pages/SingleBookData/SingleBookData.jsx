import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { FaStarHalfAlt } from "react-icons/fa";

const SingleBookData = ({ singleBookData }) => {
  const {
    image,
    bookName,
    author,
    tags,
    publisher,
    yearOfPublishing,
    category,
    rating,
    totalPages,
  } = singleBookData;

  return (
    <div className="flex flex-col lg:flex-row border border-[#13131326] rounded-2xl mt-4 p-5 gap-5 max-w-6xl mx-auto lg:mb-20">
      <div className="flex justify-center items-center">
        <img
          className="w-full max-w-[200px] h-auto lg:h-[220px] rounded-xl p-4 bg-[#1313130D]"
          src={image}
          alt=""
        />
      </div>

      <div className="space-y-3 flex-1">
        <h2 className="text-xl lg:text-2xl font-semibold">{bookName}</h2>
        <h4 className="text-base font-medium">By : {author}</h4>

        <div className="flex flex-wrap gap-3 items-center">
          <h3 className="font-bold">Tag</h3>
          {tags.map((tag, index) => (
            <p
              key={index}
              className="bg-[#23BE0A0D] px-4 py-1 text-[#23BE0A] font-semibold rounded-full"
            >
              #{tag}
            </p>
          ))}
          <div className="flex items-center gap-2">
            <IoLocationOutline size={20} />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-2">
            <IoIosMan size={20} />
            <h3>Publisher: {publisher}</h3>
          </div>
          <div className="flex items-center gap-2">
            <RiPagesLine size={20} />
            <h3>Pages: {totalPages}</h3>
          </div>
        </div>

        <hr className="border border-[#13131326]" />

        <div className="flex flex-wrap gap-3 items-center">
          <h3 className="text-[#328EFF] bg-[#328EFF26] px-4 py-2 rounded-full font-semibold">
            Category: {category}
          </h3>
          <h3 className="text-[#FFAC33] bg-[#FFAC3326] px-4 py-2 rounded-full font-semibold flex items-center gap-1">
            Rating: {rating} <FaStarHalfAlt />
          </h3>
          <button className="text-white bg-[#23BE0A] px-4 py-2 font-semibold rounded-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBookData;
