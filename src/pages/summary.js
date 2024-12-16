import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Summary = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("foodItems")) || [];
    setFoodItems(savedItems);
  }, []);
  
  const handleIncrement = (index) => {
    const updatedItems = [...foodItems];
    updatedItems[index].amount += 1;
    setFoodItems(updatedItems);
    localStorage.setItem("foodItems",JSON.stringify(updatedItems));
  }
  const handleDecrement = (index) => {
    const updatedItems = [...foodItems];
    if (updatedItems[index].amount > 1){
      updatedItems[index].amount -= 1; 
    } else{
      updatedItems.splice(index, 1);
    }
    setFoodItems(updatedItems);
    localStorage.setItem("foodItems",JSON.stringify(updatedItems));
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        {foodItems.length > 0 ? (
          foodItems.map((item, index) => (
            <>
            <div key={index} className="mt-2 flex justify-between">
              <p className="text-xl">{item.name}</p>
              <div className="flex items-center ">
               <button onClick={()=>handleDecrement(index)} className="text-2xl mx-4">
                -
              </button> 
              <p className="text-xl">{item.amount}</p>
              <button onClick={()=>handleIncrement(index)} className="text-2xl mx-4">
                +
              </button>
              </div>
            </div>
            </>
          ))
        ) : (
          <p className="text-red-500 mt-4">No order details available.</p>
        )}
      </div>
      <div className="justify-center flex">
              <button className=" absolute bottom-4 text-xl border-black border-2 px-2 m-2 rounded-md">Confirm</button>
            </div>
    </div>
  );
};

export default Summary;
