import React, { useEffect, useState } from "react";
import cart from "../assets/shopping-cart.png";
import { useNavigate, useLocation } from "react-router-dom";
import back from "../assets/back.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(()=>{
    const savedItems = JSON.parse(localStorage.getItem("foodItems")) || [];
    const total = savedItems.reduce((sum, item)=> sum +item.amount, 0);
    setCartTotal(total);
  },[location.pathname]);

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/detail":
        return "Detail";
      case "/summary":
        return "Summary";
      default:
        return "Page";
    }
  };

  const getBack = () => {
    switch (location.pathname) {
      case "/":
        return null;
      case "/detail":
        return (
          <img
            src={back}
            alt="back"
            className="w-3 h-3 cursor-pointer"
            onClick={handleBackClick} 
          />
        );
        case "/summary":
        return (
          <img
            src={back}
            alt="back"
            className="w-3 h-3 cursor-pointer"
            onClick={handleBackClick} 
          />
        );
      default:
        return "back-img";
    }
  };

  const handleBackClick = () => {
    switch (location.pathname) {
      case "/":
        return null;
      case "/detail":
        navigate("/");  
        break;
      case "/summary":
        navigate("/");  
        break;
      default:
        return null;
    }
  };
  const handleCartClick =()=>{
    navigate(`/summary`);
}
  return (
    <div>
      <div className="p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <div>{getBack()}</div>
          <h1 className="text-3xl ml-4">{getTitle()}</h1>
        </div>
        <div className="flex">
       <img src={cart} alt="cart" className="h-10 w-10" onClick={handleCartClick} />
       {cartTotal > 0 &&(  <div className="absolute right-4 mt-6 rounded-full bg-red-600 text-white flex items-center justify-center  w-5 h-5 text-xs">
       {cartTotal}
       </div>
     
     
      )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
