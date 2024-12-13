import React, { useState } from 'react'
import cart from '../assets/shopping-cart.png'
import { useNavigate } from 'react-router-dom';
const Home = () => 
    {
        const [food, setfood] = useState([
        {id:1 ,name: 'หมูสามชั้นสไลด์', img:'https://www.mcfs.co.th/wp-content/uploads/2022/07/shabu-product.jpg' },
        {id:1 ,name: 'เบคอนรมควัน', img:'https://www.mcfs.co.th/wp-content/uploads/2022/07/bacon-product.jpg' },
        {id:1 ,name: 'พอร์คชอปติดสามชั้น',img:'https://www.mcfs.co.th/wp-content/uploads/2022/07/porkchop-product.jpg' },
        {id:1 ,name: 'สามชั้นติดซี่โครง',img:'https://www.mcfs.co.th/wp-content/uploads/2022/06/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B9%83%E0%B8%99-product1.jpg' },
        {id:1 ,name: 'สันคอหมู',img:'https://www.mcfs.co.th/wp-content/uploads/2022/07/%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B8%84%E0%B8%AD-product.jpg' },
        {id:1 ,name: 'ผัก',img:'https://www.kaiidea.com/wp-content/uploads/2023/07/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%8A%E0%B8%B8%E0%B8%94-1024x1024.jpg' }

    ]);
    const navigate = useNavigate();
    const handleFoodClick =(id)=>{
        navigate(``);
    }

  return (
    <div>
      <div className='p-4 shadow-md flex justify-between items-center'>
        <h1 className='text-3xl ' >
            Home
        </h1>
        <img src={cart} alt='cart' className='h-10 w-10 '/>
      </div>
      <div className='my-8 flex flex-wrap justify-center items-center'>
            {food.map((food)=>(
            <div key={food.id} 
            onClick={()=> handleFoodClick(food.id)}
            className='mb-2 p-4 shadow-md w-5/6 rounded-md '>
              <h1>{food.name}</h1>     
            </div> 
            ))}
        
      </div>
    </div>
  )
}

export default Home
