import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  // console.log(item)
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <div
      to={`/menu/${item._id}`}
      className="card shadow-xl relative mr-5 md:my-5"
    >
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar z-10 bg-rose-500 rounded-full ${
          isHeartFilled ? "text-red" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-5 h-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt="food"
            className=" hover:scale-105 transition-all duration-300 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        {/* <p>{item.recipe}</p> */}
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">Rs. </span> {item.price}
          </h5>
          <button className="btn bg-red text-white">Add to Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
