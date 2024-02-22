import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterScreen from './RegisterScreen';
import Product from '../Shop/Product';
import HomeScreen from "./HomeScreen";
import { createClient } from '@supabase/supabase-js'
import { url,key } from './supabase';
function LoginScreen() {
  let navigate  = useNavigate();
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const supabase = createClient(url,key);


const login = async()=>{
  
 
if(email && password){


  try {
   
    
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
})

if(error){
  alert(error)
}else{
  
  navigate("/mainpage")
}
  } catch (error) {
    alert(error)
  }
}else{
  return
}

}

  return (
    <div className='w-full h-screen bg-blue-500 flex justify-center items-center'>
      <div className='w-1/3 h-4/6 bg-white border rounded-md ring-2'>
      <h4 className="text-center mt-12 text-blue-300 text-opacity-100 font-mono text-4xl antialiased hover:text-blue-700 hover:text-opacity-80">please login</h4>
      <div className="flex flex-col p-12 ">
      <input type="email" name=""  value={email} onChange={(e)=>setEmail(e.target.value)} id="" placeholder='input your email address' className=' w-full px-4 font-mono invalid:text-red-700 py-2 text-teal-800 border round-md outline-none placeholder-green-400' />
      <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='input your password' className='w-full font-mono py-2 px-4 text-teal-900 placeholder-green-500  mt-6 border outline-none'/>
      <button  onClick={login} className='bg-green-800 text-center text-base text-white mt-12 cursor-pointer hover:bg-green-1000 py-2'>Sign In</button>
      </div>
      <legend className='text-grey-200 text-left ml-12 '>Don't have an account ?  <span onClick={()=>{navigate("/register")}} className='text-blue-900 cursor-pointer font-semibold'>sign up</span></legend>

      </div>
      
    </div>
  )
}

export default LoginScreen
