import React from 'react'

import d3 from '../assets/img/c3.png'
import c from '../assets/img/c4.png'
import c2 from '../assets/img/c3.png'

export default function Section3() {

    return (

        <div className='mt-32 md:flex md:justify-evenly'>
            {/* left img */}
            <h1 className='text-4xl text-[#622F1C] font-bold mt-60 ml-20'>Top Coffee <p className='mt-5 text-xl'>The best coffee beans to buy online,<br/> tried and tested</p> </h1>
            <div className='relative flex bottom-24'>
                <img className='h-40 mt-32 w-72' src={c} alt="" />
                <img className='w-72 mt-36 h-80' src={c2} alt="" />
                <img className='w-80' src={d3} alt="" />
            </div>
        </div>
    )

}