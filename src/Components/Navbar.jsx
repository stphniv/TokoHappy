import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    
    <div className='bg-gray-200 shadow-sm'>
   
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            <div className='flex justify-between p-4'>

                <div className='flex items-center'>

                    <div className='flex-shrink-0 flex items-center'>

                        <span className='flex text-blue-600 font-bold text-xl justify-center items-center'>
                        <img src="logo.JPG" alt=""  className="w-12 h-12 rounded-lg"/>
                        <h4 className='text-purple-800 align-middle justify-center items-center p-3'>TokoHappy</h4>
                        </span>

                    </div>
                    </div>

                    <div className='hidden md:ml-6 md:flex md:space-x-8'>



                        <Link to="/about" className='border-blue-500 text-gray-900 inline flex place-items-center justify-center px-1 pt-3 border-b-2 text-sm font-medium hover:bg-[#f7aa35] hover:rounded-2xl'>😊About Us</Link>

                        <Link to="/product" className='border-blue-500 text-gray-900 inline flex place-items-center justify-center px-1 pt-3 border-b-2 text-sm font-medium hover:bg-[#f7aa35] hover:rounded-2xl'>👕Product</Link>
                        <Link to="/cartmember" className='border-blue-500 text-gray-900 inline flex place-items-center justify-center px-1 pt-3 border-b-2 text-sm font-medium hover:bg-[#f7aa35] hover:rounded-2xl'>🛒Cart</Link>

                      

                         <Link to="/" className='border-blue-500 text-gray-900 inline flex place-items-center justify-center px-1 pt-3 border-b-2 text-sm font-medium hover:bg-[#f7aa35] hover:rounded-2xl'>🚪 Log Out</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
