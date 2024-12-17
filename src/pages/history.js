import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
function History() {
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(()=> {
    const history = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrderHistory(history);
  },[]);
  return (
    <div>
      <Navbar/>
      <div className='p-4'>
        {orderHistory.length > 0 ? (
             orderHistory.map((order, index) => (
              <div key={index} className="border-b border-gray-300 pb-4 mb-4">
                <p className="font-bold">{order.date}</p>
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between">
                    <p>{item.name}</p>
                    <p>x{item.amount}</p>
                  </div>
                ))}
              </div>
            ))
        ):(<p className="text-red-500">No order history available.</p>)}
      </div>
    </div>
  )
}

export default History
