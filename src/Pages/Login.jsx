import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const API_URL = "'https://fakestoreapi.com/users"



const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 

  const handleLogin = async () => {
    if (username === 'admin' && password === 'admin') {
      navigate('/productadmin'); // Arahkan ke HomeAdmin 
    }else {
      try {
        const response = await fetch('https://fakestoreapi.com/users');
        const users = await response.json();
  
        // Cek username
        const foundUser = users.find(user => user.username === username && user.password === password);
  
        if (foundUser) {
          console.log('Login berhasil sebagai user:', foundUser);
          navigate('/about'); // Redirect ke home jika cocok
        } else {
          alert('Username atau password salah.');
        }
      } catch (error) {
        console.error('Login gagal:', error);
        alert('Terjadi kesalahan saat login.');
      }
    }
  };
  

 


  const handlesignup= () => {
    
    navigate('/signup');
  };

  
  return(
    <div className='flex flex-col p-10  '>

    <div className='flex bg-[#802c6e] rounded-2xl p-3'>

          
   
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>

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
      <div className='max-w5xl mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='flex items-center justify-center'>

            <div className='flex items-center'>

              <div className='flex-shrink-0 flex items-center'>

              <div className='p-10 justify-center text-center'>
                <h2 className="text-2xl font-bold text-center text-purple-800 mb-4 justify-center border-b-2 pb-4">Login</h2>




                <div className='p-5'>
                  <label className="text-gray-700">Username</label>
                  <input type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  
                  
                  className="w-full p-2 border rounded-lg mt-1" />

                </div>



                <div className='p-5'>
                  <label className="text-gray-700">Password</label>
                  <input type="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  
                  className="w-full p-2 border rounded-lg mt-1" />

                </div>

                <div className='p-5'>
                <button 
                  onClick={handleLogin} 
                  
                  type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Submit
                </button>

                <br />
                <br />

                

                  <div className='italic'>
                    <p>Don't have account please</p>
                    <button
                        
                        className="underline text-blue-500 hover:text-blue-700"
                        onClick={handlesignup}>
                        Sign Up
                      </button>
            
                    

                    
                  </div>
                  
                </div>

                


              </div>

               
              </div>
            

            </div>
        </div>
      </div>
    </div>
   

  </div>

    

  )
   
  
}

export default Login
