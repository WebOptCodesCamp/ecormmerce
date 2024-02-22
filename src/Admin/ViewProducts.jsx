import React, { useEffect, useState } from 'react'
import { url,key } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { CiSearch } from "react-icons/ci";
import { CiViewTable } from "react-icons/ci";

function ViewProducts() {

    const [products,setProducts] = useState([]);
    const [items,setItems] = useState([]);
    const [search , setSearch] = useState("");

    const supabase = createClient(url,key);



    let retrieve = async() =>{


        const { data, error } = await supabase
        .from('stocks')
        .select();
        if (error) {
            console.log("error is:",error)
        }else{

            setProducts(data);
        }


    }

useEffect(()=>{


retrieve();




},[supabase])

useEffect(()=>{


setItems(products.filter((prod)=> prod.name.toLowerCase().includes(search.toLocaleLowerCase())));





},[search])

const ShowTable = () =>{

    let prod = document.getElementById("prod");
    let table = document.getElementById("table");
    prod.style.display = "none";
    prod.style.transition = "4s";
    table.style.display = "block";
}

  return (
    <div className='w-full h-full bg-white px-8 overflow-y-auto'>
    <div className='flex justify-end'>
    
    <h3 className='text-red-100 font-bold text-xl'>View Data</h3>
    <CiViewTable  size={50} color='green' className='mb-4 cursor-pointer'   onClick={ShowTable}/>

    </div>
    <div className='w-full py-12 px-40 flex justify-center'>
    <div className='w-full border rounded-md  flex justify-between'>
    <input type='text' value={search}  onChange={(e)=>setSearch(e.target.value)}  placeholder='such any product or item' className='px-16 py-4 w-96 bg-white placeholder:place-content-stretch rounded-md outline-none'/>

    <CiSearch size={40}  color='green' className='mr-10 mt-2'/>
    </div>
    </div>

    <div className='mt-30 '>
    <legend className='text-teal-800 first-letter:text-red-400 font-semibold ml-5 mb-4 '>product list</legend>
    <div id="prod" className='flex flex-wrap w-full justify-even'>
    {

items.map((prod,index)=>


<div className='w-1/4 bg-slate-300 border rounded-md mb-10 mr-12 cursor-pointer'>
<img src={prod.murl.toString()} className='w-full h-48  rounded-t-md'/>
<legend className='text-teal-800 font-extrabold ml-5'>{prod.name}</legend>

<h4 className='text-red before:text-green-300 ml-2 pb-2'>price: <span className='text-teal-800'>{prod.price + " "+"$"}</span></h4>



</div>


)


    }
    
    
    </div>
    <div id='table' className='hidden'>
    <div className='flex justify-center'>
    <div>
    <table className='border-collapse border ring-0 ring-teal-800 rounded-lg shadow-lg'>
    <tr>
    <th className='  ring-blue-600 py-1 px-14 bg-blue-950 rounded-tl-md text-white font-mono font-light'>Item-category</th>
    <th  className='  ring-blue-600 py-1 px-14 bg-blue-950 text-white font-mono font-light'  >item-name</th>
    <th className='  ring-blue-600 py-1 px-14 bg-blue-950 text-white font-mono font-light'  >Item-quantity</th>
    <th   className=' ring-blue-600 py-1 px-14 bg-blue-950 rounded-tr-md text-white font-mono font-light '  >Item-price</th>
    
    </tr>
    {

items.map((item,id)=>
<tr className='old:bg-white even:bg-cyan-100 even:bg-opacity-20 last:rounded-b-md'>
<td className=' font-extralight pl-4 font-sans'>{item.choice}</td>
<td  className=' font-extralight pl-4 font-sans' >{item.name}</td>
<td className=' font-extralight pl-4 font-sans'>{item.quantity}</td>
<td className=' font-extralight pl-4 font-sans' >{item.price}</td>


</tr>




)

    }
    
    
    </table>
    </div>
    </div>
    <div className='w-full'>
    
    
    
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default ViewProducts
