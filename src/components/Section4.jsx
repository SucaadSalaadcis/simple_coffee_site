import React from 'react'
import c from '../assets/img/c6.png'


export default function Section4() {
    return (
        <div className='mb-20  md:flex md:justify-evenly'>
            {/* left img */}
            <div className='relative top-10'>
                <img className='' src={c} alt="" />
            </div>

            {/* section 2 */}
            <div className='gap-5 pt-10 pl-5 text-[#353636] md:justify-between md:flex md:pt-24 md:pl-32'>
                {/* left text  */}
                <div className='md:mt-20'>
                    <h1 className='font-bold text-lg md:text-[2.5rem]  '> Coffee - For Special</h1>
                    <p className='md:mt-7 mt-3 md:text-[20px]'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br /> velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                        <br /> Aliquam vulputate velit imperdiet dolor tempor tristique.
                        <br /> Donec vitae odio quis nisl dapibus malesuada. <br /> Aliquam vulputate   dolor tempor tristique.
                    </p>

                </div>
            </div>

        </div>
    )
}
