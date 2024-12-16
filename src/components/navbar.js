import React from "react";
import cart from "../assets/shopping-cart.png";
import { useNavigate, useLocation } from "react-router-dom";
import back from "../assets/back.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Add the useNavigate hook

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/detail":
        return "Detail";
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
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <div>{getBack()}</div>
          <h1 className="text-3xl ml-4">{getTitle()}</h1>
        </div>
        <img src={cart} alt="cart" className="h-10 w-10" />
      </div>
    </div>
  );
};

export default Navbar;
