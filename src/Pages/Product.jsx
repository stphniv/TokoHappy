import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const API_URL = "https://fakestoreapi.com/products"






const Product = () => {

 

  const[products, setProducts] = useState([])
  const [render, setRender] = useState(false);
  const [counts, setCounts] = useState({});
  const [cart, setCart] = useState([]);


  useEffect(()=>{
    axios
        .get(API_URL)
        .then((response)=>{
            setProducts(response.data);
            console.log(response)
        })
        .catch((error)=>{
            console.error("Error fetching usesrs:", error);
        })
  },[render])




  const incrementCount = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };
  
 

  const decrementCount = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };





  const addToCart = (product) => {
    const quantity = counts[id] || 0;
    if (quantity === 0) return; 
  
    const existingProduct = cart.find((item) => item.id === product.id);
    
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  
    // reset jumlah setelah ditambahkan
    setCounts(prev => ({ ...prev, [product.id]: 0 }));
  };
  


  








  
  return (
    
    <div>
      <Navbar/>
        

      <div className='p-3'>
        <br />
        
        

        <motion.h1
                   className="text-4xl font-bold text-[#802c6e] mb-4"
                   initial={{ opacity: 0, x: -100 }}
                   animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                  Product List
                  </motion.h1>
        <ul className='list-disc pl-5'>
        {
            products.length > 0 ? (
                    products.map((product,index) => (
                      <div className="grid grid-cols-3 gap-6 p-5">
                      {products.map((product, index) => (
                        <div key={index} className="flex flex-col border p-4 shadow-md rounded-lg  gap-4 bg-amber-50">

                        
                          

                          <img src={product.image} alt={product.title} className="w-60 h-40 mx-auto object-cover mb-3 border-2 rounded-2xl shadow-lg" />

                          <h3 className="text-1xl font-bold border-b-2 pb-3">{product.title}</h3>

                          

                          <p className="text-sm text-gray-500">{product.category}</p>
                          <p className="text-md font-semibold text-blue-600">${product.price}</p>
                          <p className="text-sm text-gray-700">{product.description.substring(0, 100)}...</p>
                          <p className="text-sm font-medium">Rating: ⭐{product.rating?.rate} ({product.rating?.count} reviews)</p>

                          <br />

                          

                      


                          
                            <div className=" flex flex-col mt-auto not-[]:justify-center items-center space-y-2">
                              
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => decrementCount(product.id)}
                                  className="bg-[#f7aa35] text-white px-3 py-1 rounded-lg hover:bg-[#f79935]"
                                >
                                  -
                                </button>
                                <span className="text-3xl font-semibold">{counts[product.id] || 0}</span>
                                <button
                                  onClick={() => incrementCount(product.id)}

                                  className="bg-[#802c6e] text-white px-3 py-1 rounded-lg hover:bg-[#802c4f]"
                                >
                                  +
                                </button>
                              </div>

                              <button 
                                onClick={() => addToCart(product)}
                                className='mt-auto bg-[#f7aa35] rounded-2xl p-1 pr-15 pl-15  mb-1 ml-10 mr-10 hover:bg-amber-600 '>+ Add</button>
                            </div>
                          
                          
                          

                          
                        
                        </div>
                       
                      ))}
                    </div>
                









                      
                      
                    ))
                ) : (
                    <p>Loading Product...</p>
                )
        }
        </ul>
    </div>
      
    </div>
  )
}

export default Product
