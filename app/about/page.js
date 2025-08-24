"use client";
import React from 'react'
import { MdOutlineAccountBox } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { FaRegFileLines } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { RiPoliceBadgeLine } from "react-icons/ri";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { News } from '@/_components/News';


export default function page() {
  return (
    <div className="mt-[70px]">
      <div className="flex items-center justify-center text-center bg-black text-white h-[30vh] w-full">
        <h1 className="text-5xl font-bold">About Us</h1>
      </div>
      <div className='p-2 md:mx-20 md:my-10'>
        <div className='flex flex-col gap-8 justify-center items-center'>
            <div className='flex flex-col lg:flex-row gap-4 justify-center'>
                <div className='w-full lg:w-1/2'>
                    <h3 className='font-semibold text-4xl'>Connecting Talent With Opportunity</h3>
                </div>
                <div className='w-full lg:w-1/2 tracking-wider text-justify'>
                    <p>We believe that the right job can transform a person’s life, and the right candidate 
                can transform a business. Our platform is built to bridge this gap by helping 
                job-seekers discover opportunities that align with their skills and passion, while 
                enabling employers to find the best talent to fuel their growth. </p>
                </div>
            </div>
            <div className='min-w-[90vw] h-auto'>
                <img src='https://media.istockphoto.com/id/1866121862/photo/searching-for-job.jpg?s=612x612&w=0&k=20&c=AKesbz1SLLMNOq_KIdChDQb0Cmra1anuNC-Wz13FxtA=' alt='about-main' className='object-cover min-w-full max-h-[582px] rounded-xl'/>
            </div>
            <div className='my-10'>
                <div className='items-center text-center flex flex-col gap-4'>
                    <h1 className='font-bold text-5xl'>How it works</h1>
                    <p className='text-gray-500 max-w-2xl'>We’ve simplified the recruitment journey to make it faster, smarter, and 
                stress-free for both job seekers and recruiters.</p>
                </div>
                <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 row-auto-[1fr] text-center'>
                    <div className='flex flex-col gap-3 p-4 border border-gray-400 rounded-lg shadow-md items-center justify-center md:min-h-[240px]'>
                        <MdOutlineAccountBox className='text-[#309689] size-10 font-light'/>
                        <h3 className='text-xl font-bold'>Create Account</h3>
                        <p className='text-gray-500'>Sign up in just a few minutes and set up your professional profile to get started.</p>
                    </div>
                    <div className='flex flex-col gap-3 p-4 border border-gray-400 rounded-lg shadow-md items-center justify-center md:min-h-[240px]'>
                        <IoDocumentTextOutline className='text-[#309689] size-10 font-light'/>
                        <h3 className='text-xl font-bold'>Upload Resume</h3>
                        <p className='text-gray-500'>Showcase your skills and experience by uploading your latest resume.</p>
                    </div>
                    <div className='flex flex-col gap-3 p-4 border border-gray-400 rounded-lg shadow-md items-center justify-center md:min-h-[240px]'>
                        <LuBriefcaseBusiness className='text-[#309689] size-10 font-light'/>
                        <h3 className='text-xl font-bold'>Find Jobs</h3>
                        <p className='text-gray-500'>Explore opportunities across industries and apply filters to match your goals.</p>
                    </div>
                    <div className='flex flex-col gap-3 p-4 border border-gray-400 rounded-lg shadow-md items-center justify-center md:min-h-[240px]'>
                        <SiTicktick className='text-[#309689] size-10 font-light'/>
                        <h3 className='text-xl font-bold'>Apply Job</h3>
                        <p className='text-gray-500'>Submit applications instantly and track your progress every step of the way.</p>
                    </div>
                </div>
                <img src='https://image.cnbcfm.com/api/v1/image/106286796-1575927914734gettyimages-1138451162.jpg?v=1575927992' alt='image' className='min-w-[95vw] max-h-[582px] rounded-2xl' />
                <div className='h-auto my-10'>
                    <div className='flex flex-col text-center items-center gap-4 my-10'>
                        <h2 className='font-bold text-3xl md:text-5xl'>Frequently Asked Questions</h2>
                        <p className='text-gray-500'>Answers to some of the most common queries</p>
                    </div>
                    <div>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className="border px-5 py-3 rounded-lg">
                                <AccordionTrigger className="font-semibold text-lg md:text-2xl"><span className='flex gap-4'><span className='text-[#309689]'>01</span> Is it accessible?</span></AccordionTrigger>
                                <AccordionContent>
                                <p className='text-sm md:text-lg ml-10'>Yes. It adheres to the WAI-ARIA design pattern.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border px-5 py-3 rounded-lg">
                                <AccordionTrigger className="font-semibold text-lg md:text-2xl"><span className='flex gap-4'><span className='text-[#309689]'>02</span> How long will the recruitment process take?</span></AccordionTrigger>
                                <AccordionContent>
                                <p className='text-lg ml-10'>Yes. It adheres to the WAI-ARIA design pattern.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border px-5 py-3 rounded-lg">
                                <AccordionTrigger className="font-semibold text-lg md:text-2xl"><span className='flex gap-4'><span className='text-[#309689]'>03</span> Do you recruit for Graduates, Apprentices and Students?</span></AccordionTrigger>
                                <AccordionContent>
                                <p className='text-lg ml-10'>Yes. It adheres to the WAI-ARIA design pattern.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border px-5 py-3 rounded-lg">
                                <AccordionTrigger className="font-semibold text-lg md:text-2xl"><span className='flex gap-4'><span className='text-[#309689]'>04</span> What does the recruitment and selection process involve?</span></AccordionTrigger>
                                <AccordionContent>
                                <p className='text-lg ml-10'>Yes. It adheres to the WAI-ARIA design pattern.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="border px-5 py-3 rounded-lg">
                                <AccordionTrigger className="font-semibold text-lg md:text-2xl"><span className='flex gap-4'><span className='text-[#309689]'>05</span>Can I receive notifications for any future jobs that may interest me?</span></AccordionTrigger>
                                <AccordionContent>
                                <p className='text-lg ml-10'>Yes. It adheres to the WAI-ARIA design pattern.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 md:mt-10 h-auto">
                        {/* LEFT: image grid */}
                        <div className="lg:basis-full md:basis-1/2 ">
                            <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:h-[525px] h-auto overflow-hidden gap-2">
                            
                            {/* First image spans all 3 rows in col-1 */}
                            <div className="row-span-3 col-span-1 hidden md:block rounded-xl">
                                <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-149100,msid-122054620/global-leaders-meet-in-new-delhi.jpg" alt="Main" className="h-full w-full object-cover  rounded-3xl" />
                            </div>

                            {/* Second image spans first 2 rows in col-2 */}
                            <div className="row-span-2 col-span-1 rounded-xl overflow-hidden hidden md:block">
                                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/alliances-web-2:Small?wid=1510&hei=1787&dpr=off" alt="Top-right" className="h-full w-full object-cover rounded-3xl" />
                            </div>

                            {/* Third image sits below img-1 in col-2 row-3 */}
                            <div className="md:row-span-1 md:col-span-1">
                                <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-628570,resizemode-75,msid-99053252/jobs/fresher/startup-versus-corporates-whats-best-for-you.jpg" alt="Bottom-right" className="h-auto md:h-full w-full object-cover rounded-3xl" />
                            </div>
                            </div>
                        </div>

                        {/* RIGHT: text/content */}
                        <div className="basis-full md:basis-1/2 flex flex-col gap-4 justify-center p-3">
                            <h1 className="font-bold text-3xl md:text-5xl">We’re Only Working With The Best</h1>
                            <p>
                            We collaborate with top companies and industry leaders who are committed to 
                  creating meaningful opportunities. From startups to enterprises, we ensure 
                  quality jobs and a trusted recruitment process.
                            </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex gap-4 items-center"><HiOutlineBriefcase className="size-8 text-[#309689]" /><h3 className="font-semibold text-xl">Quality Job</h3></div>
                            <div className="flex gap-4 items-center"><FaRegFileLines className="size-8 text-[#309689]" /><h3 className="font-semibold text-xl">Resume Builder</h3></div>
                            <div className="flex gap-4 items-center"><SlBadge className="size-8 text-[#309689]" /><h3 className="font-semibold text-xl">Top Companies</h3></div>
                            <div className="flex gap-4 items-center"><RiPoliceBadgeLine className="size-8 text-[#309689]" /><h3 className="font-semibold text-xl">Top Talents</h3></div>
                        </div>
                      </div>
                    </div>
                <div className='mt-10 md:mt-20'>
                    <News />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
