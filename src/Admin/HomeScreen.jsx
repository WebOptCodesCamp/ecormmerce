import React, { useEffect, useState } from 'react'
import { RiAdminFill } from "react-icons/ri";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoBagAdd } from "react-icons/io5";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaFirstOrderAlt } from "react-icons/fa6";
import { MdCommentBank } from "react-icons/md";
import StatsScreen from './StatsScreen';
import AddProduct from './AddProduct';
import OrderScreen from './OrderScreen';
import Comments from './Comments';
import LoginScreen from './LoginScreen';
import { useLocation } from 'react-router-dom';
import {url, key } from './supabase';
import { createClient } from '@supabase/supabase-js';
import ViewProducts from './ViewProducts';

function HomeScreen() {
let user;
const supabase = createClient(url,key);
const loaduser =  async() =>{
  const { data: { user } } = await supabase.auth.getUser();
  
user = user.id;
  
}


  let multi = document.querySelectorAll("#pick");

 useEffect(()=>{
  for(let x of multi){
    x.addEventListener("click",function(){
  
  alert("hello world")
  
    })
    
    }


 })
  






useEffect(()=>{

loaduser();

})
 





  return (
    <div className='w-full h-screen bg-white flex overflow-hidden'>
    <div className="bg-green-700 text-white font-mono hover:bg-green-900 h-screen w-1/6 overflow-hidden py-8" >
    
    <div className="flex text-center text-white font-serif">
    <RiAdminFill  size={30} color='blue'/>
    <legend className='ml-6 mt-2'>Admin profile</legend>
    </div>
    <div className="mt-4 w-full h-full bg-white bg-opacity-80 flex-col mt-20 items-center justify-center pb-60">
    
    <div className="bg-grey-800 bg-opacity-90 p-2 flex mt-30 hover:bg-opacity-100 cursor-pointer mt-25 py-35" >
    <IoStatsChartOutline size={30} color='yellow'/>
    <legend id="pick" className='mt-2 ml-6'>Sales Statics</legend>
    </div>
    <div className="bg-grey-800 bg-opacity-90 p-2 flex mt-30 hover:bg-opacity-100 cursor-pointer mt-25 py-35" >
    <IoBagAdd size={30} color='lightblue'/>
    <legend id='pick' className='mt-2 ml-6'>Add Product</legend>
    </div>
    <div className="bg-grey-800 bg-opacity-90 p-2 flex mt-30 hover:bg-opacity-100 cursor-pointer mt-25 py-35" >
    <FaUsersViewfinder size={30} color='lightcyan'/>
    <legend id='pick'   className='mt-2 ml-6'>View Product</legend>
    </div>
    <div className="bg-grey-800 bg-opacity-90 p-2 flex mt-30 hover:bg-opacity-100 cursor-pointer mt-25 py-35" >
    <FaFirstOrderAlt size={30} color='pink'/>
    <legend id='pick' className='mt-2 ml-6'>Client-Order</legend>
    </div>
    <div className="bg-grey-800 bg-opacity-90 p-2 flex mt-30 hover:bg-opacity-100 cursor-pointer mt-25 py-35" >
    <MdCommentBank size={30} color='grey'/>
    <legend  id='pick'   className='mt-1 ml-6'>Comments</legend>
    </div>
<div className="w-full h-full bg-green-200"></div>
    </div>
    
    </div>
      <div className="w-full h-full white p-12">
      <ViewProducts/>
      </div>
    </div>
  )
}

export default HomeScreen
