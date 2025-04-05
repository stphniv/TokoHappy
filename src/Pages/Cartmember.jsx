import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { motion } from "framer-motion";

const Cartmember = () => {

  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (!storedUser) {
          alert("Kamu belum login.");
          return;
        }

        const response = await fetch('https://fakestoreapi.com/carts');
        const carts = await response.json();

        // Filter berdasarkan userId dari user yang login
        const userCart = carts.filter(cart => cart.userId === storedUser.id);

        setCartData(userCart);
        setLoading(false);
      } catch (error) {
        console.error("Gagal ambil data cart:", error);
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);


  return (
   


    <div className="p-5">
       <Navbar />
       <br />
       <motion.h1
           className="text-4xl font-bold text-[#802c6e] mb-4"
           initial={{ opacity: 0, x: -100 }}
           animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          Cart List
          </motion.h1>
          <br />

      {loading ? (
        <p>Loading...</p>
      ) : cartData.length === 0 ? (
        <p>Tidak ada riwayat belanja.</p>
      ) : (
        cartData.map((cart, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg shadow-sm bg-white">
            <p><strong>Tanggal:</strong> {new Date(cart.date).toLocaleDateString()}</p>
            <p><strong>ID Cart:</strong> {cart.id}</p>
            <div className="mt-2">
              <strong>Produk:</strong>
              <ul className="ml-5 list-none text-center justify-center items-center">
                {cart.products.map((product, idx) => (
                  <li key={idx}>Produk ID: {product.productId} | Jumlah: {product.quantity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Cartmember
