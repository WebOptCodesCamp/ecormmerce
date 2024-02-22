import React from 'react';
import {Chats} from "./Chats"
import user1 from "../assets/jack.png";
import user2 from "../assets/ali.png";
import user3 from "../assets/keith.png";
import user4 from "../assets/peter.png";







function Comments() {
    const users = [user1, user2 , user3,user4];
  return (
    <div className='w-full h-full bg-white'>
      <legend className='text-teal-900 text-center mt-15 font-mono font-extrabold text-2xl '>Customer Comments</legend>
      <div className="flex flex-wrap justify-centre justify-around mt-20">
      
        {Chats.map((rev,i)=>
            
            <div className="box border rounded-md bg-grey-900 w-1/4 h-150px p-4 rounded-xl overflowx-hidden hover:bg-lightgrey cursor-pointer flex-cols shadow-md hover:mr-12">
      <img src={users[i]} alt="" className='w-full' />
      <legend className='font-extrabold text-xl mt-2'>{rev.name}</legend>

      <p className='text-brown-800 ml-12 text-sm font-serif font-light'>reviews:</p>
      <h3  className='font-ariel
       font-semibold'>{rev.chat}</h3>
      </div>
            
            )}
      
        
        
        
      
      
      </div>
    </div>
  )
}

export default Comments
