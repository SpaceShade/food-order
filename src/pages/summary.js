import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
// import remove from '../assets/remove.png'
const Summary = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("foodItems")) || [];
    setFoodItems(savedItems);
  }, []);

  // const handleRemoveClick()=>{
    
  // }
  return (
    <div>
      <Navbar />
      <div className="p-4">
        {foodItems.length > 0 ? (
          foodItems.map((item, index) => (
            <div key={index} className="mt-2 flex justify-between">
              <p className="text-xl">{item.name}</p>
              <div className="flex items-center ">
                <p className="text-xl">x{item.amount}</p>
                {/* <img src={remove} alt="remove" className="w-4 h-4 ml-2"/> */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 mt-4">No order details available.</p>
        )}
        <button className="mt-4">Confirm</button>
      </div>
    </div>
  );
};

export default Summary;
