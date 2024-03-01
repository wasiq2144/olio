import React from 'react'



export default function Process({ list }) {



  return (
    <>
      <div className='flex flex-col gap-5 w-2/3 my-20'>
        {list.map((item, index) => (
          <div className='border-b-2 last:border-b-0 border-[#4f4d57] pb-5'>
            <div className=' text-[48px] font-semibold my-2'>{item.heading}</div>
            <div className="flex justify-between">
              <div className='w-[80%]'>
                <h4 className=' text-[16px] font-semibold my-2'>{item.subHeading}</h4>
                <div className=' text-[20px] text-left font-medium text-[#999999]'>{item.content}</div>
              </div>
              <h4 className=' text-[16px] font-semibold my-2'>{item.date}</h4>
            </div>
          </div>
        ))}
      <div className="flex gap-4">
        <button className='rounded-full text-[20px] uppercase ease-in-out duration-300 hover:opacity-[0.8] bg-white text-black py-2 px-6 font-semibold'>
          View Work
        </button>                
        <button className='rounded-full text-[20px] uppercase ease-in-out duration-300 hover:opacity-[0.8] bg-transparent border-2 border-white text-white py-2 px-6 font-semibold'>
        View Resume
        </button>
      </div>
      </div>
    </>
  )
}
