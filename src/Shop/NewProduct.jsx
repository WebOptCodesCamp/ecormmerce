import React, { useEffect, useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import {key,url} from "../Admin/supabase";
import { MdStarRate } from "react-icons/md";
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import Premium from './Premium';
import Product from './Product';
function NewProduct() {
    const supabase = createClient(url,key);
    const[Products,setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    const [mydata,setMydata] = useState([]);
    const navigation = useNavigate();
    let retrieve = async() =>{


        const { data, error } = await supabase
        .from('stocks')
        .select();
        if (error) {
            console.log("error is:",error)
        }else{

            let filtered = data.filter((dat,index,arr)=>index < 6);
            console.log('====================================');
            console.log(filtered);
            
            setProducts(filtered);
        }


    }
    useEffect(()=>{

retrieve();

    })
useEffect(()=>{

let colors = document.querySelectorAll("star");
console.log("length",colors.length)


})

const AddCart = (id) =>{

    
setCart(current=>[...current,id]);



}
let data = [];
let pass = [];
useEffect(()=>{
for(let i=0 ; i< cart.length; i++){
    if(!pass.includes(cart[i])){
let size = cart.filter((val)=>val ===cart[i]);
data.push({id:cart[i],quantity:size.length})


}

pass.push(cart[i]);

}
let total = 0;
for(let i =0; i < data.length; i++){

total += data[i].quantity;


}

let items = document.getElementById("items").innerHTML= total;
let count = document.getElementById("count").innerHTML= total;

console.log(data);
setMydata(data);

})



  return (
    <div className='h-screen w-full bg-slate-100  overflow-hidden '>
    
    <header className='bg-teal-900 text-white h-14 flex  justify-evenly text-center '>
    <div  onClick={()=>navigation("/mainpage")}  >
    <h4 className='mt-4 cursor-pointer'>Home</h4>
    </div>
    <div>
    <h4 className='mt-4 cursor-pointer text-teal-800 font-bold'>New Product</h4>
    </div>
    <div onClick={()=>navigation("/Premium")}>
    <h4 className='mt-4 cursor-pointer'>Premium Product</h4>
    </div> <div>
    <h4 className='mt-4 cursor-pointer'>Recommended</h4>
    </div>
    <div>
    <h4 className='mt-4 cursor-pointer'>Contact us</h4>
    </div>
    <div className='flex justify-between'>
    <h4 className='mt-4 cursor-wait'>cart</h4>
    <BsCart4  size={30} color='yellow' className='mt-4 ml-4 cursor-pointer'/>
    <p className='ml-2 text-red-700 mt-4' id='items'>0</p>
    </div>
    </header>



<div className='flex mt-30 w-full h-full'>

<div className=' w-3/4 h-full bg-white pt-10 overflow-y-auto no-scrollbar'>
<div className='flex justify-between'>
<legend className='text-black  mt-12 ml-12 font-mono font-medium  mb-5 '>Products</legend>
<legend className='text-black  mt-12 ml-12 font-mono font-medium  mb-5  first-letter:text-blue-500 mr-4'>Suggested</legend>


</div>
<div className='flex flex-wrap w-full pl-20 '>

{


    Products.map((prod,id)=>
    
    <div  className='mb-3 mr-4 bg-slate-300 border rounded-md w-1/4 cursor-pointer'>
    
    <img src={prod.murl.toString()} className='w-full h-4/4 rounded-tr-md rounded-tl-md' />
    <legend className='mt-2 ml-4 text-black font-serif'>{prod.name}</legend>
    <h4 className='text-green-600 ml-3 font-bold '>price:<span className='text-yellow-500 font-medium ml-2'>{prod.price}<span className='ml-1 text-black'>$</span></span></h4>
<button onClick={()=>AddCart(id)} className='rounded-md bg-blue-900 text-white font-mono ml-2 font-thin p-1 mt-1  text-sm'>Add to Cart</button>

    <div className='flex mt-2 w-full justify-center mb-5 pb-1'>
    <MdStarRate id='star' size={20}  color='white' className='active:bg-yellow-300'/>
    <MdStarRate id='star'  size={20}  color='white'  className='active:bg-yellow-300' />
    <MdStarRate  id='star'  size={20}  color='white' className='active:bg-yellow-300'  />
    <MdStarRate id='star'  size={20}  color='white'  className='active:bg-yellow-300' />
    <MdStarRate id='star'size={20}  color='white ' className='active:bg-yellow-300'/>


    
    </div>
    
    
    
    </div>
    
    
    
    )

 

}



</div>

</div>
<div className='w-1/4 h-full bg-white shadow-4xl border-l-2 mt-35'>

<div className='bg-white shadow-2xl h-4 w-full shadow-slate-700 border-b-2 py-4'>
<h4  className='text-center font-bold font-mono text-pretty mt-4'><span className='text-purple-700 '>My</span> <span >Shopping</span> <span className='text-yellow-700
'>Cart</span></h4>

</div>
<div className='flex justify-center'>
<div className='flex-col justify-center'>
<BsCart4  size={60} color='yellow' className='mt-8 ml-4 cursor-pointer'/>
<h4 id='count' className='text-center ml-5 text-blue-800'>0</h4>

</div>

</div>
<div className='w-full flex-col justify-center'>


{
    mydata.map((val)=>

    <div className='flex w-full bg-gray-100 bg-opacity-20 h-22 py-2'>
    <div className='w-1/4'>
    <img src={Products[val.id].murl.toString()} className='w-full p-1'/>
    
    </div>
    <div className=' ml-8  flex-col'>
    <h4>{Products[val.id].name}</h4>
    <p className='font-serif font-thin'><span className='text-green-200'>quantity:</span> {val.quantity}</p>
    <h5 className='text-orange-600 font-mono font-semibold'>Total-price: <span>{Products[val.id].price*val.quantity}</span></h5>
    <span className='text-sm font-thin'>currency in us dollar$</span>
    
    
    </div>
    
    </div>
    
    )
}
</div>

</div>

</div>










    
    </div>
  )
}

export default NewProduct