import React from 'react'
import { orders } from './orders'
function OrderScreen() {
    let total = 0;
    for(let i =0; i < orders.length; i++){
     total += orders[i].quantity;

    }
  return (
    <div className='w-full h-full bg-white overflowy-scroll'>
      <legend className='text-center font-mono text-brown-900'>Customers Orders</legend>
      <div className="flex justify-center">
      <div className='mt-16'>
      <table className='border-collapse border-4 ring-xl border-grey-900 '>
      
      <tr>
      <th className='py-2 px-6 border border-black ring-xl'>Customer Name</th>
      <th className='py-2 px-6 border border-black ring-xl' >Customer Number</th>
      <th className='py-2 px-6 border border-black ring-xl' >Customer Location</th>
      <th className='py-2 px-6 border border-black ring-xl' >Item Selected</th>
      <th className='py-2 px-6 border border-black ring-xl' >quantity</th>
      
      </tr>
      {
        orders.map((order,index)=>
        
        <tr>
      <td className='py-2 px-6 border border-black ring-xl'>{order.name}</td>
      <td className='py-2 px-6 border border-black ring-xl'>{order.phone}</td>
      <td className='py-2 px-6 border border-black ring-xl'>{order.location}</td>
      <td className='py-2 px-6 border border-black ring-xl'>{order.item}</td>
      <td className='py-2 px-6 border border-black ring-xl'>{order.quantity}</td>
      
      
      </tr>
        
        )
      }
      
      
      
      
      
      </table>
      
      
      <div className="max-w-60 max-h-150 py-2 px-4 bg-pink-900 text-center text-white font-mono mt-6 rounded-xl cursor-pointer">
      total orders {total} 
      
      </div>
      
      </div>
      
      </div>
    </div>
  )
}

export default OrderScreen
