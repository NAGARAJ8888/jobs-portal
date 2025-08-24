import React from 'react'
import { PiTreeLight } from "react-icons/pi";
import { GiMetalPlate } from "react-icons/gi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgCap } from "react-icons/cg";
import { PiTrolleySuitcaseBold } from "react-icons/pi";
import { PiGraduationCapBold } from "react-icons/pi";
import { CiCoinInsert } from "react-icons/ci";
import { FaBus } from "react-icons/fa6";

export const Category = () => {
  return (
    <div className='my-10 bg-gray-00 bg-gray-300 p-5 md:p-10'>
        <div className="flex flex-col items-center text-center gap-4">
        <h1 className="font-bold text-3xl md:text-5xl">Browse by Category</h1>
        <p className="max-w-3xl">
         Discover jobs tailored to your skills and interests. Explore opportunities across 
  industries and find the right role that matches your career goals.
        </p>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 auto-rows-[1fr]">
            <div className='flex flex-col text-center items-center gap-6 py-12 bg-white rounded-lg w-full'>
                <PiTreeLight className='size-8 text-[#309689]'/>
                <p className='font-bold'>Agriculture</p>
                <p className='bg-gray-200 px-2 py-1 w-fit rounded-lg text-[#309689]'>1254 Jobs</p>
            </div>
            <div className='flex flex-col text-center items-center gap-6 py-12 bg-white rounded-lg'>
                <GiMetalPlate className='size-8 text-[#309689]'/>
                <p className='font-bold'>Metal Production</p>
                <p className='bg-gray-200 px-2 py-1 w-fit rounded-lg text-[#309689]'>1645 Jobs</p>
            </div>
            <div className='flex flex-col text-center items-center gap-6 py-12 bg-white rounded-lg'>
                <LiaShoppingBagSolid className='size-8 text-[#309689]'/>
                <p className='font-bold'>Commerce</p>
                <p className='bg-gray-200 px-2 py-1 w-fit rounded-lg text-[#309689]'>1197 Jobs</p>
            </div>
            <div className='flex flex-col text-center items-center gap-6 py-12 bg-white rounded-lg'>
                <CgCap className='size-8 text-[#309689]'/>
                <p className='font-bold'>Construction</p>
                <p className='bg-gray-200 px-2 py-1 w-fit rounded-lg text-[#309689]'>1129 Jobs</p>
            </div>
            <div className='flex flex-col text-center items-center gap-6 py-12 bg-white rounded-lg'>
                <PiTrolleySuitcaseBold className='size-8 text-[#309689]'/>
                <p className='font-bold'>Hotels & Tourism</p>
                <p className='bg-gray-200 px-2 py-1 w-fit rounded-lg text-[#309689]'>1786 Jobs</p>
            </div>
            <div className='flex flex-col text-center items-center gap-6 py-12 bg-white rounded-lg'>
                <PiGraduationCapBold className='size-8 text-[#309689]'/>
                <p className='font-bold'>Education</p>
                <p className='bg-gray-200 px-2 py-1 w-fit rounded-lg text-[#309689]'>1246 Jobs</p>
            </div>
            <div className='flex flex-col text-center items-center gap-6 py-12 bg-white rounded-lg'>
                <CiCoinInsert className='size-8 text-[#309689]'/>
                <p className='font-bold'>Financial Services</p>
                <p className='bg-gray-200 px-2 py-1 w-fit rounded-lg text-[#309689]'>1024 Jobs</p>
            </div>
            <div className='flex flex-col text-center items-center gap-6 py-12 bg-white rounded-lg'>
                <FaBus className='size-8 text-[#309689]'/>
                <p className='font-bold'>Transport</p>
                <p className='bg-gray-200 px-2 py-1 w-fit rounded-lg text-[#309689]'>1314 Jobs</p>
            </div>
            
        </div>
    </div>
  )
}
 