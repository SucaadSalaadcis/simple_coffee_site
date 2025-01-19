import React from 'react'

import c4 from '../assets/img/c4.png'

import { TbCoffee } from "react-icons/tb";
import { GiCoffeeBeans } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import { MdOutlineCoffeeMaker } from "react-icons/md";


export default function Navbar() {



    return (
        <div className=''>

            {/* navbar div */}
            <div className='gap-5  px-32 text-[#353636] md:justify-evenly md:flex md:pt-24 '>
                {/* left text  */}
                <div className=' md:mt-6'>
                    <h1 className='font-bold  text-lg text-[#622F1C] md:text-[3.5rem]  '> Coffee <p className='mt-10'>The Best For You</p> </h1>
                    <button className="shadow-xl shadow-[#00000070] p-2 ml-3 text-[#E3DAC9] bg-[#622F1C] rounded-3xl md:px-10 mt-10">View Menu</button>
                    <div className='flex gap-3 mt-3 ml-4 text-xl'>
                        <p className='p-2 bg-[#E3DAC9] rounded-full'><TbCoffee /></p>
                        <p className='p-2 rounded-full bg-[#E3DAC9]'> <GiCoffeeBeans /></p>
                        <p className='p-2 bg-[#E3DAC9] rounded-full'><CiCoffeeCup /></p>
                        <p className='p-2 rounded-full bg-[#E3DAC9]'> <MdOutlineCoffeeMaker /></p>
                    </div>
                </div>
                {/* right img */}
                <div className=''>
                    <img className='relative bottom-32' src={c4} alt="" />
                </div>

            </div>

        </div>
    )
}