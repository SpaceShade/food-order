import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const foodItem = location.state;

  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleConfirm = () => {

    const existingItems = JSON.parse(localStorage.getItem("foodItems")) || [];

    const existingItemIndex = existingItems.findIndex(
      (item) => item.name === foodItem.name
    );

    if (existingItemIndex >= 0) {
      existingItems[existingItemIndex].amount += count;
    } else {
      existingItems.push({ name: foodItem.name, amount: count, img: foodItem.img });
    }

    localStorage.setItem("foodItems", JSON.stringify(existingItems));
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      {foodItem ? (
        <>
          <img src={foodItem.img} alt={foodItem.name} className="w-full h-64" />
          <div className="flex items-center justify-between">
            <h1 className="text-xl m-2">{foodItem.name}</h1>
            <div className="flex">
              <button onClick={handleDecrement} className="text-2xl mx-4">
                -
              </button>
              <h1 className="text-2xl">{count}</h1>
              <button onClick={handleIncrement} className="text-2xl mx-4">
                +
              </button>
            </div>
          </div>
          <div className="justify-center items-center flex mt-4">
            <button
              onClick={handleConfirm}
              className="text-xl border-black border-2 px-2 m-2 rounded-md"
            >
              Add to cart
            </button>
          </div>
        </>
      ) : (
        <h1>No item</h1>
      )}
    </div>
  );
};

export default Detail;
