import React from 'react'
import Navbar from '../Components/Navbar'
import { motion } from "framer-motion";


const About = () => {
  return (
    <div>
      <Navbar/>
      

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-6">
        
      <motion.div
        className="max-w-7xl bg-white p-8 rounded-2xl shadow-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold text-[#802c6e] mb-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className='bold'>
          Get tired of Lorem ipsum data?!
          Didn't you find any free e-commerce API?!


          </h3>
          fakeStoreApi is a free online REST API that you can use whenever you need Pseudo-real data for your e-commerce or shopping website without running any server-side code. It's awesome for teaching purposes, sample codes, tests, etc.
        </motion.p>
        <motion.img
          src="/about-image.jpg"
          alt="About Us"
          className="w-full mt-6 rounded-xl shadow-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </motion.div>
    </div>

      




      
    
    </div>
  )
}

export default About
