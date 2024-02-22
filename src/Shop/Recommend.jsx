import React, { useEffect, useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import {key,url} from "../Admin/supabase";
import { MdStarRate } from "react-icons/md";
import { createClient } from '@supabase/supabase-js';
import { useLocation, useNavigate } from 'react-router-dom';

function Recommend() {
    const supabase = createClient(url,key);
    const[Products,setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    const [mydata,setMydata] = useState([]);
    const [related, setRelated] = useState([]);
    const [values,setValues] = useState([]);
    const navigation = useNavigate();
    let {state} = useLocation();
    let slt = state.have;
    let retrieve = async() =>{


        const { data, error } = await supabase
        .from('stocks')
        .select();
        if (error) {
            
        }else{

            let filtered = data.filter((dat,index,arr)=>index === slt);
            
            
            setProducts(filtered);

            let rel = data.filter((ele,index)=>ele.choice===data[slt].choice && index !== slt );
            let before = [];
            for(let i=0; i< rel.length; i++){
                let index = data.findIndex((dat)=> dat.name === rel[i].name);
                if (!before.includes(index)) {
                    before.push(index)
                }
        
           console.log(data[index].name);}
                
                
        

  setValues(before)
 


            console.log("values", values);

          
            

        }


    }
    useEffect(()=>{

retrieve();

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


setMydata(data);

})



  return (
    <div className='h-screen w-full bg-slate-100  overflow-hidden '>
    
    <header className='bg-teal-900 text-white h-14 flex  justify-evenly text-center '>
    <div  onClick={()=>navigation("/mainpage")}>
    <h4 className='mt-4 cursor-pointer'>Home</h4>
    </div>
    <div  onClick={()=>navigation("/newProducts")} >
    <h4 className='mt-4 cursor-pointer'>New Product</h4>
    </div>
    <div >
    <h4 className='mt-4 cursor-pointer  '>Premium Product</h4>
    </div> <div>
    <h4 className='mt-4 cursor-pointer   text-teal-800 font-bold '>Recommended</h4>
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
<div className='flex  w-full pl-20 '>

{


    Products.map((prod,id)=>
    <div className='flex'>
    <div  className='w-1/e  mt-4'>
    
    <img src={prod.murl.toString()} className='w-full  rounded-tr-md rounded-tl-md bg-gray-700 shadow-lg rounded-md
    ' />
    
    
    
    
    
    </div>
    <div className='mt-4 ml-5 pl-6 '>
    <legend className='text-center text-pink-600 font-mono font-bold pb-5'>{prod.name}</legend>
    <h4 className='ml-8 text-blue-900'>Price:{prod.price}</h4>
    <legend className='text-black text-center font-bold'>Product information</legend>
    <h3 className='text-sm font-thin text-yellow-900'>{prod.info}</h3>
    <legend className='text-black text-center font-bold mt-8'>Product description</legend>

    <p className='italic font-extralight'>{prod.description}</p>
    <div className='flex justify-center'>
    <button onClick={()=>AddCart(id)}  className='bg-orange-600 text-center  ring-orange-600 text-white font-mono mt-12 p-2  rounded-xl'>Add To Cart</button>
    
    </div>
    
    </div>
    
    </div>
    
    
    )

 

}



</div>
<legend className='text-blue-800 text-center font-mono font-extrabold'>Related Products</legend>




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

export default Recommend

