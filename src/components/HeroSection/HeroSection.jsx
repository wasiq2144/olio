import React from 'react'
import BigHeading from '../BigHeading'

const HeroSection = () => {
    return (
        <div className='h-[80vh] flex flex-col items-center justify-center'>
            <BigHeading text={`SENIOR
EXPERIENCE
DESIGNER©`} />
            <div className='flex justify-between w-1/2 items-center'>
                <h4 className='text-base font-medium'>CURRENTLY CRAFTING <br /> EXPERIENCES AT CROSBY</h4>
                <h4 className='text-base font-medium'>(2021 – PRESENT)</h4>
            </div>
        </div>
    )
}

export default HeroSection