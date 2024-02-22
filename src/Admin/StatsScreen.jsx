import React from 'react'

function StatsScreen() {
  return (
    <div className='w-full h-full '>
      <legend className='text-left ml-12 text-teal-800 font-mono'>Welcome joseph oparero</legend>
      <h4 className='text-center text-green-500 flex-none mt-16 font-mono'>Sales Digits</h4>

      <div className="flex w-full justify-center justify-around mt-14">
      <div className="border rounded-lg bg-white ring-2xl cursor-pointer">
      <legend className='text-teal-500 text-centre p-4'>Todays Sales</legend>
      <h4 className='text-teal-300 text-center py-4 px-12'>45,679</h4>
      </div>
      <div className="border rounded-lg bg-white ring-2xl cursor-pointer">
      <legend className='text-teal-500 text-centre p-4'>This Month Sales</legend>
      <h4 className='text-teal-300 text-center py-4 px-12'>454,5679</h4>
      </div>
      <div className="border rounded-lg bg-white ring-2xl cursor-pointer">
      <legend className='text-teal-500 text-centre p-4'>This year's Sales</legend>
      <h4 className='text-teal-300 text-center py-4 px-12'>23,7845679</h4>
      </div>

      </div>
      <h4 className='text-center text-blue-500 flex-none mt-16 font-mono'>Orders Income</h4>

      <div className="flex w-full justify-center justify-around mt-14">
      <div className="border rounded-lg bg-white ring-2xl cursor-pointer">
      <legend className='text-teal-500 text-centre p-4'>Todays Orders</legend>
      <h4 className='text-teal-300 text-center py-4 px-12'>45,679</h4>
      </div>
      <div className="border rounded-lg bg-white ring-2xl cursor-pointer">
      <legend className='text-teal-500 text-centre p-4'>This Month Orders</legend>
      <h4 className='text-teal-300 text-center py-4 px-12'>454,5679</h4>
      </div>
      <div className="border rounded-lg bg-white ring-2xl cursor-pointer">
      <legend className='text-teal-500 text-centre p-4'>This year's Orders</legend>
      <h4 className='text-teal-300 text-center py-4 px-12'>23,7845679</h4>
      </div>

      </div>

    </div>
  )
}

export default StatsScreen
