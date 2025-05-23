import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer } from "react-toastify";

const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const { id } = useParams();
  console.log(id);
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((singleData) => singleData.bookId === bookId);
  const {
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    publisher,
    yearOfPublishing,
    review,
    totalPages,
    } = singleBook;
    
    const handleRead = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You are going to mark this item as read!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, mark as read!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Marked as Read!",
                text: "The item is now in your read section.",
                icon: "success"
              });
            }
          });
          


        addToStoreDB(id)
}



  return (
    <div className="hero  min-h-screen lg:mb-20">
      <div className="flex flex-col lg:flex-row gap-10 ">
        <img
          src={image}
          className=" rounded-lg max-w-[350px] w-full lg:max-w-sm p-10 bg-[#1313130D] mx-auto"
        />
        <div className="space-y-3 px-5">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <h3 className="font-semibold">By : {author}</h3>
          <div className="border-t-2 border-gray-300"></div>
          <h3 className="font-semibold">{category}</h3>
          <div className="border-t-2 border-gray-300"></div>
          <p>
            <span className="font-bold">Review : </span>
            {review}
          </p>
          <div className="flex gap-5 items-center mb-5">
            <h3 className="font-semibold">Tag</h3>
            <p className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 font-bold rounded-full">
              #{tags[0]}
            </p>
            <p className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 font-bold rounded-full">
              #{tags[1]}
            </p>
          </div>
          <div className=" border-t-2 border-gray-300"></div>
          <div className="">
            <h3 className="">
              Number of Pages:{" "}
              <span className="font-semibold">{totalPages}</span>
            </h3>
            <h3>
              Publisher: <span className="font-semibold">{publisher}</span>
            </h3>
            <h3>
              Year of Publishing:{" "}
              <span className="font-semibold">{yearOfPublishing}</span>
            </h3>
            <h3>
              Rating: <span className="font-semibold">{rating}</span>
            </h3>
            <div className="space-x-5 mt-4 flex">
                          <div>
                              <button onClick={() => handleRead(id)} className="btn">Read</button>
                              <ToastContainer></ToastContainer>
             </div>
              <button className="btn bg-[#50B1C9] text-white">WishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
