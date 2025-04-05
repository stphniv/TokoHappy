import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const API_URL = "https://fakestoreapi.com/carts"



const Checkout = () => {
const navigate = useNavigate();






    const handleCheckoutSubmit = () => {
    
        navigate('/about');
      };


      const [checkoutData, setCheckoutData] = useState(null);

        useEffect(() => {
          const savedCart = localStorage.getItem('selectedCart');
          if (savedCart) {
            setCheckoutData(JSON.parse(savedCart));
          }
        }, []);




    const FormInput = ({ label, type = "text" }) => (
        <div className="space-y-2">
          <label className="text-gray-700 font-bold text-left block ml-5">{label}</label>
          <input type={type} className="w-full p-2 border rounded-lg mt-1 bg-white" />
        </div>
    );
    
  return (
    <div>
        <Navbar/>



        <br />

        <motion.h1
                className="text-4xl font-bold text-[#802c6e] mb-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Checkout
            </motion.h1>

            <br />



        {checkoutData ? (
          <div className="bg-white p-5 rounded-xl shadow-md mb-5 border mr-50 ml-50 space-y-2">

            <h2 className="text-2xl font-bold italic text-[#802c6e] text-unde">Checkout for Order ID: {checkoutData.id}</h2>

            <p className='font-bold text-5px '>User ID: {checkoutData.userId}</p>
            <p className='text-1px'> Date: {new Date(checkoutData.date).toLocaleDateString()}</p>
            <ul className="list-disc pl-5 list-none text-1xl font-bold border rounded-2xl p-2 m-10">
              {checkoutData.products.map((product, index) => (
                <li key={index}>
                  Product ID: {product.productId}, Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500 italic">Memuat data checkout...</p>
        )}









        
            
            <br />

            <h4 className=' flex ml-50 font-semibold italic'>*Please fill this correctly </h4>

  

            <div className="flex flex-col border rounded-2xl p-10 ml-50 mr-50 space-y-10 bg-amber-50">
               <h2 className='font-bold text-2xl border-b-2 pb-3'>Form Checkout</h2>
                <FormInput label="Username" />
                <FormInput label="Nama lengkap" />
                <FormInput label="Nomor telepon" />
                <FormInput label="Email" type="email" />
                <FormInput label="Alamat Rumah" />
                <FormInput label="Nomor rekening" />

                
                  <button 
                         
                          className='flex bg-[#f7aa35] rounded-2xl p-3 mt-6 justify-center font-bold mr-30 ml-30' 
                          onClick={handleCheckoutSubmit}
                          >Submit</button>



                  
                
        </div>

        
        



      
    </div>
  )
}

export default Checkout
