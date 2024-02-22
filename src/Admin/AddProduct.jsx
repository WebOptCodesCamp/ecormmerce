import React, { useState ,useEffect} from 'react';
import {key,url} from "./supabase";
import { createClient } from '@supabase/supabase-js';


function AddProduct() {
  let supabase = createClient(url,key);

  const[name,setName] = useState("");
  const[choice,setChoice] = useState("");
  const[price,setPrice] = useState(0);
  const[info,setInfo] = useState("");
  const[quantity,setQuantity] = useState(0);
  const[description,setDescription] = useState("");
  const[murl ,setMurl] = useState("");
  const[files,setFiles] = useState(null);
  const[progress , setProgress] = useState(0);


  

const handleSave = async() =>{
  if(name && choice && price && info && quantity && description  ){
    alert(murl);
    try {

    
const { error } = await supabase
.from('stocks')
.insert({name, price,choice, description,quantity,murl});
if(error){
  console.log(error);
}else{

  alert("data inserted successfully")
}
  
      
    } catch (error) {
      console.log(error);
    }
    
    
  }else{
    alert("missing fields")
    return;
  }
}
const handleSelect = async() =>{

let grabBtn = document.getElementById("file");

grabBtn.click();



}

useEffect( ()=>{

if(files){
const upload = async()=>{
  const { val, error } = await supabase.storage.from('stocks').upload(`public/${files.name}`, files, {
    cacheControl: '3600',
    upsert: false
  })
  if(error){
  console.log(error)
  
  }else{
    alert("file uploaded successfully");
  
  
  
    const { data } = await supabase
    .storage
    .from('stocks')
    .getPublicUrl(`public/${files.name}`);
    if(data){
    console.log(data);
    setMurl(data.publicUrl);
    }else{
      alert(error)
    }
  
  }}

  upload();

  setFiles(null);
  
 


}

  
 

},[files])


  return (
    <>
    <div id='prog' style={{width:"0%",height:"2px",background:"green",marginBottom:"12px",padding:"4"}}></div>

    <div className='w-full h-full bg-white '>
    <div className="flex justify-end">
    <button onClick={handleSelect} className='bg-blue-900 text-centre text-white font-mono px-12 py-2 border rounded-md hover:bg-blue-600 self-end ring-blue'> {progress<1||progress===100? "upload":"uploading"} <span className='text-teal-900 font-mono'>{progress<1||progress===100? "" :progress+"%"}</span>
   </button>
    
    </div>

    
      <legend className='text-center mt-15 font-semibold text-grey-800 mb-20'>Add new product</legend>
      
      <div className="flex-wrap flex justify-evenly  w-full overflow-hidden">
      <div className="flex-col mr-10 ">
      <div><label className='px-10'>choose category</label></div>
      <div>
      <select name="" id=""  value={choice} onChange={(e)=>setChoice(e.target.value)} className='w-md bg-white bordre ring-xl ring-teal-700 mt-10 px-12 outline-none rounded-md font-mono'>
      <option>Laptops</option>
      <option>Bags</option>
      <option>clothes</option>
      <option>Phones</option>
      </select></div>
      </div>

      <div className="flex-col ">
      <div><label className='px-10'>Product Name</label></div>
      <div>
  <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}  placeholder='product name' className='outline-none w-md bg-white mt-10 rounded-md font-mono  px-12 border '/>
      </div> 
      </div>
      <div className="flex-col ">
      <div><label className='px-10'>Product price</label></div>
      <div>
  <input type="number" value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder='product name' className='outline-none w-md bg-white mt-10 rounded-md font-mono  px-12 border '/>
      </div> 
      </div>
      <div className="flex-col mt-12">
      <div><label className='px-16'>Product info</label></div>
      <div>
  <input type="text" value={info} onChange={(e)=>setInfo(e.target.value)} placeholder='product information' className=' pb-35   outline-none mr w-2md bg-white mt-10 rounded-md font-mono  px-12 border '/>
      </div> 
      </div>
      <div className="flex-col mt-12">
      <div><label className='px-10'>Product Quantity</label></div>
      <div>
  <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder='Enter quantity' className='outline-none  w-md bg-white mt-10 rounded-md font-mono  px-12 border '/>
      </div> 
      </div>
      <div className="flex-col mt-12">
      <div><label className='px-10'>Product Description</label></div>
      <div>
  <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='product details max 500 words' min="5"  max="500"className='outline-none w-md bg-white mt-10 rounded-md ring-green-700 ring-2xl font-mono invalid:text-red-900 placeholder-pink-700 px-12 border '></textarea>
      </div> 
      </div>

      </div>
      
      
      
      
      <button onClick={handleSave} className='bg-green-800 text-center text-white font-mono py-2 px-8 rounded-md'>save product</button>
      <input type="file" name="" id="file" className='hidden'  onChange={(e)=>setFiles(e.target.files[0])} />
      
    </div>
    </>
  )
}

export default AddProduct
