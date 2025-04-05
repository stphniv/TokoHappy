import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbaradmin from '../Components/Navbaradmin'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const API_URL = "https://fakestoreapi.com/carts"

const Cart = () => {

  const[carts, setCarts] = useState([])
  const [render, setRender] = useState(false);

  const navigate = useNavigate();

  const handleClickCheckout = (carts) => {
    localStorage.setItem('selectedCart', JSON.stringify(carts));
    
    navigate('/checkout');
  };

 

  useEffect(()=>{
    axios
        .get(API_URL)
        .then((response)=>{
            setCarts(response.data);
            console.log(response)
        })
        .catch((error)=>{
            console.error("Error fetching usesrs:", error);
        })
  },[render])


  return (
    



      <div className=''>

        <Navbaradmin/>
        <br />

         <motion.h1
           className="text-4xl font-bold text-[#802c6e] mb-4"
           initial={{ opacity: 0, x: -100 }}
           animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          Cart List
          </motion.h1>

        <ul className='list-disc pl-5'>
        {
           carts.length > 0 ? (
                    carts.map((carts,index) => (

                    

                      <div className='bg-amber-50 grid grid-cols-[3fr_3fr_1fr] gap-6   m-5 shadow-md rounded-lg border border-[#802c6e]'>

                        <div key={index} className="bg-white flex flex-col shadow-md rounded-lg p-3 gap-4 mt-3 mb-3 ml-3">
                          <h3 className="text-1xl font-bold pb-3">Order ID: {carts.id}</h3>
                          <p className="text-sm text-gray-500">User ID: {carts.userId}</p>
                          <p className="text-sm text-gray-500">Date: {new Date(carts.date).toDateString()}</p>
                        
                        </div>
                        
                        <div className="bg-white flex flex-col shadow-md rounded-lg p-3 gap-4 mt-3 mb-3 mr-3">
                          <h3 className="text-1xl font-bold ">Products:</h3>
                          <ul className="list-disc pl-5 ">
                            {carts.products.map((product, idx) => (
                              <li key={idx} className="text-md">
                                Product ID: {product.productId} - Quantity: {product.quantity}
                              </li>
                            ))}
                          </ul>
                    </div>

                    <div>
                    <button 
                         
                          className='flex bg-[#f7aa35] rounded-2xl p-3 mt-6 mr-3 hover:bg-amber-600 text-5px'
                          onClick={() => handleClickCheckout(carts)}
                          >Check out</button>



                    </div>


















                      </div>




                      





                    ))
                ) : (
                    <p>Loading Users...</p>
                )
        }
        </ul>
      </div>
  )
}

export default Cart
