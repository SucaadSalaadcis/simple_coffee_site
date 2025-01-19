import React from 'react'
import c5 from '../assets/img/c2.png'

import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaRegHeart } from "react-icons/fa";


export default function Section2() {
    return (

        <div className="flex items-center justify-center gap-10">
            {/* Coffee Cards */}
            <div className="flex gap-6">
                {/* Card 1 */}
                <div className="bg-[#ebe0c8] rounded-3xl shadow-lg w-[250px] h-[300px]  flex flex-col items-center">
                    <img
                        src={c5}
                        alt="Americano"
                        className="object-cover h-40 mb-4 ml-[80px] rounded-full w-60"
                    />
                    <h3 className="text-[#5B3D31] font-bold text-lg">Americano</h3>
                    <p className="text-[#5B3D31] text-sm text-center mt-2">
                        100% Natural Arabica , 30 ml cup
                    </p>
                    {/* Icons */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <button className="text-[#5B3D31] text-lg">
                            <MdOutlineShoppingCart className="text-[#38190e]" />
                        </button>
                        <button className="text-[#5B3D31] text-lg">
                            <FaRegHeart className="text-[#38190e] text-xl" />
                        </button>
                    </div>
                    {/* Price */}
                    <button className="bg-[#622F1C] text-white rounded-full px-6 py-2 mt-4 shadow-md">
                        $2.50
                    </button>
                </div>

                {/* Card 2 */}
                <div className="bg-[#ebe0c8] rounded-3xl shadow-lg w-[250px] h-[300px]  flex flex-col items-center">
                    <img
                        src={c5}
                        alt="Americano"
                        className="object-cover h-40 mb-4 ml-[80px] rounded-full w-60"
                    />
                    <h3 className="text-[#5B3D31] font-bold text-lg">Cappuccino</h3>
                    <p className="text-[#5B3D31] text-sm text-center mt-2">
                        Coffee 50%, milk 50%, 250 ml
                    </p>
                    {/* Icons */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <button className="text-[#5B3D31] text-lg">
                            <MdOutlineShoppingCart className="text-[#38190e]" />
                        </button>
                        <button className="text-[#5B3D31] text-lg">
                            <FaRegHeart className="text-[#38190e] text-xl" />
                        </button>
                    </div>
                    {/* Price */}
                    <button className="bg-[#622F1C] text-white rounded-full px-6 py-2 mt-4 shadow-md">
                        $2.50
                    </button>
                </div>
            </div>

            {/* Text Section */}
            <div className="w-1/3 text-left">
                <h2 className="text-[#5B3D31] font-bold text-2xl mb-4">
                    Lorem Ipsum is simply dummy text of
                </h2>
                <p className="text-[#5B3D31] text-sm mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                </p>
                <button className="bg-[#622F1C] text-white px-6 py-2 rounded-full">
                    Learn More
                </button>
            </div>
        </div>



    )
}
