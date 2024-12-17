import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
const Home = () => 
    {
        const [food, setFood] = useState([
        {id:1 ,name: 'หมูสามชั้นสไลด์', img:'https://www.mcfs.co.th/wp-content/uploads/2022/07/shabu-product.jpg' },
        {id:2 ,name: 'เบคอนรมควัน', img:'https://www.mcfs.co.th/wp-content/uploads/2022/07/bacon-product.jpg' },
        {id:3 ,name: 'พอร์คชอปติดสามชั้น',img:'https://www.mcfs.co.th/wp-content/uploads/2022/07/porkchop-product.jpg' },
        {id:4 ,name: 'สามชั้นติดซี่โครง',img:'https://www.mcfs.co.th/wp-content/uploads/2022/06/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B9%83%E0%B8%99-product1.jpg' },
        {id:5 ,name: 'สันคอหมู',img:'https://www.mcfs.co.th/wp-content/uploads/2022/07/%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B8%84%E0%B8%AD-product.jpg' },
        {id:6 ,name: 'ผัก',img:'https://www.kaiidea.com/wp-content/uploads/2023/07/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%8A%E0%B8%B8%E0%B8%94-1024x1024.jpg' }

    ]);
    const navigate = useNavigate();
    const handleFoodClick =(foodItem)=>{
        navigate(`/detail`,{ state: foodItem });
      }
      useEffect (()=>{
        const savedItems = JSON.parse(localStorage.getItem('foodItems')) || [];
        const updatedFood = food.map ((item) => {
          const cartItem = savedItems.find((cart)=> cart.name === item.name);
          if (cartItem){
            return {...item, amount: cartItem.amount };
          }
          return item;
        })
          setFood(updatedFood);
      },[])
    
  return (
    <div>
        <Navbar/>
      <div className='my-8 flex flex-wrap justify-center items-center'>
            {food.map((foodItem)=>(
            <div key={foodItem.id} 
            onClick={()=> handleFoodClick(foodItem)}
            className='mb-2 p-4 shadow-md w-5/6 rounded-md '>
              <img src={foodItem.img} alt='food-img' className='mb-2'/>
              <div className='flex justify-between'>
              <h1>{foodItem.name}</h1>     
              <h2>{foodItem.amount > 0 ? `x${foodItem.amount}` : 'x0'}</h2>

              </div>
            </div> 
            
            ))}
        
      </div>
    </div>
  )
}

export default Home
