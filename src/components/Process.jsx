import React from 'react'



export default function Process({list}) {
 
    

  return (
    <>
       <div className='grid grid-cols-3 gap-5 my-[100px]'>
            

            {list.map((item,index)=>(
                <div>
                <div className=' font-semibold my-3'>({item.id})</div>
                <div className=' text-[48px] font-bold my-3'>{item.heading}</div>
                <div className=' text-[20px] text-left text-gray-500'>{item.content}</div>
                </div>
            ))}
            
        </div>
    </>
  )
}
