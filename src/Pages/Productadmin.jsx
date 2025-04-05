import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbaradmin from '../Components/Navbaradmin'
import { motion } from "framer-motion";
const API_URL = "https://fakestoreapi.com/products"




const Productadmin = () => {
  

  const[products, setProducts] = useState([])
  const [render, setRender] = useState(false);
  

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


  
  const handleEdit = (product) => {
    const updateTitle = prompt("Enter New Title:",product.title)
    const updatePrice = prompt("Enter new Price", product.Price)
    const updateDescription = prompt("Enter new Description", product.description)
    const updateCategory = prompt("Enter new Category", product.category)
    const updateImage = prompt("Enter New Image Url",product.image)
    const updateRate = prompt("Enter New Rate",product.rating?.rate)
    const updateCount = prompt("Enter New Rate",product.rating?.count)
      if (updateTitle && updateCategory && updatePrice && updateDescription && updateImage && updateRate && updateCount){
        const updatedProduct = {
            title: updateTitle,
            price: updatePrice,
            description: updateDescription,
            category: updateCategory,
            image: updateImage,
            rate: updateRate,
            count: updateCount
        }


        axios
        .put(`${API_URL}/${product}`,updatedProduct)
        .then(()=>{
            setProducts(products.map((p)=> (p.id === product.id ? {...p, ...updatedProduct}:p)))
        })
        .catch((error)=>{
            console.error(error)
        })

    }
  }


  const handleDelete = (product) =>{
    axios
    .delete(`${API_URL}/${product.id}`)
    .then(()=>{
        setProducts(products.filter((p)=> p.id !== product.id));
    })
    .catch((error)=>{
        console.error("Error Delete Product",error)
    })
    
  }


  const handleAdd = () => {
    const addTitle = prompt("Enter New Title:","")
    const addPrice = prompt("Enter new Price", '')
    const addDescription = prompt("Enter new Description","")
    const addCategory = prompt("Enter new Category", "")
    const addImage = prompt("Enter New Image Url","")
    const addRate = prompt("Enter New Rate","")
    const addCount = prompt("Enter New Rate","")
      if (addTitle && addCategory && addPrice && addDescription && addImage && addRate && addCount){
        const addedProduct = {
            title: addTitle,
            price: addPrice,
            description: addDescription,
            category: addCategory,
            image: addImage,
            rating: {
              rate: parseFloat(addRate),
              count: parseInt(addCount, 10)
            }
        }


        axios
        .post(API_URL, addedProduct)
        .then((response)=>{
          setProducts([...products, response.data]);
        })
        .catch((error)=>{
            console.error(error)
        })

    }
  }


  

  








  
  return (
    <div>
      <Navbaradmin />
        

      <div className='p-3'>
        <br />

        
        
       <div className='flex'>

        <h1 className='text-3xl font-bold  text-[#802c6e] p-3 ml-10'>Products List</h1>

            <div className=' p-3 rounded-2xl gap-5 ml-auto ' > 

                    <button 
                        className='mt-auto bg-white rounded-xl p-2  mb-1  text-1px border-2 border-[#802c6e] hover:bg-gray-100 '
                        onClick={()=>handleAdd()}>
                    ➕ Add
                    </button>

                    

             </div>

            








       </div>
        
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


                          <div className='flex space-x-2 justify-center'>

                          <button
                                className='bg-white p-3 rounded-2xl border-2 hover:bg-gray-100 '
                                onClick={()=>handleEdit(product)}
                                >
                                    ✏️
                          </button>

                          <button
                                className='bg-white p-3 rounded-2xl border-2 hover:bg-gray-100'
                                onClick={()=>handleDelete(product)}
                                >
                                    🗑️
                          </button>



                            
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

export default Productadmin
