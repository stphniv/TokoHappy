import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const API_URL = 'https://fakestoreapi.com/users'








const Signup = () => {

  //const input 

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    lat: '',
    long: ''
  });


const navigate = useNavigate();

const handlesloginbutton= () => {
    
  navigate('/');
};



  
const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div>
    <label className="text-gray-700 font-bold text-left block ml-5">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 border rounded-lg mt-1 bg-white"
    />
  </div>
);
      

      





  const handleSignUp = async () => {
    const newUser = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname
      },
      address: {
        city: formData.city,
        street: formData.street,
        number: parseInt(formData.number),
        zipcode: formData.zipcode,
        geolocation: {
          lat: formData.lat,
          long: formData.long
        }
      },
      phone: formData.phone
    };

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });

      if (!res.ok) throw new Error('Failed to register user');

      const data = await res.json();
      console.log('User registered:', data);

      // Simpan ke localStorage (opsional)
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));

      navigate('/');
    } catch (error) {
      console.error('Signup error:', error.message);
      alert('Gagal mendaftar. Coba lagi.');
    }
  };
  
  

  return (

    <div className='flex flex-col p-10  '>

    <div className='flex bg-[#802c6e] rounded-2xl p-3'>

          
   
        <div className='max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8'>

            <div className= 'p-5 justify-center text-center '>

                <div className=' flex items-center text-center'>

                    <div className='flex items text-center'>
                        <img src="logo.JPG" alt=""  className="w-16 h-16 rounded-lg"/>
                    </div>
                    <h1 className='text-5xl font-bold text-center text-white
                      justify-center pl-5'>Welcome to TokoHappy</h1>

                </div>
            </div>   
        </div>
    </div>

     <br />
        




    <div className='bg-white shadow-sm border-2 border-[#802c6e] rounded-2xl'>
      <div className=''>

        <div className='flex items-center justify-center'>

              <div className='pt-10 justify-center text-center'>
                
                <h2 className="text-2xl font-bold text-center text-purple-800 mb-4 justify-center border-b-2 pb-4">Sign Up</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                  <InputField label="Username" name="username" />
                  <InputField label="Email" name="email" type="email" />
                  <InputField label="Password" name="password" type="password" />
                  <InputField label="First Name" name="firstname" />
                  <InputField label="Last Name" name="lastname" />
                  <InputField label="Phone" name="phone" />
                  <InputField label="City" name="city" />
                  <InputField label="Street" name="street" />
                  <InputField label="Number" name="number" type="number" />
                  <InputField label="Zip Code" name="zipcode" />
                  <InputField label="Latitude" name="lat" />
                  <InputField label="Longitude" name="long" />
                </div>





                <div className='p-5'>
                <button 
                onClick={handleSignUp}
                  
                  
                  type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Sign Up
                </button>

                <br />
                <br />

                

                  <div className='italic'>
                    <p>Allready have account please</p>
                    <button
                        
                        className="underline text-blue-500 hover:text-blue-700"
                        onClick={handlesloginbutton}


                        >
                        Log in
                      </button>
            
                    

                    
                  </div>
                  
                </div>

                


              

               
              </div>
            

           
        </div>
      </div>
    </div>
   

  </div>






  )




  
}

export default Signup
