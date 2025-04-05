import React from 'react'
import Navbar from '../Components/Navbar'
import { motion } from "framer-motion";




const Home = () => {
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
          Home
          </motion.h1>
      
    </div>
  )
}

export default Home
