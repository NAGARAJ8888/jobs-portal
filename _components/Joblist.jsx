"use client";
import { useEffect, useState } from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { RiTimer2Line } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import JobDetailsSkeleton from "./JobDetailsSkeleton";

export const Joblist = ({ jobs }) => {
  const [loading, setLoading] = useState(true);


  if (!jobs || jobs.length === 0) {
    return <p className="text-gray-500 mt-4"></p>;
  }

  setTimeout(()=>{
    setLoading(false)
  },[3000]);

  if(loading){
    return <JobDetailsSkeleton/>
  }


  return (
    <div className="my-10 mx-2 md:mx-10">
        <div className="text-center lg:text-start max-w-full lg:max-w-2xl text-wrap">
        <h1 className="font-bold text-[28px] lg:text-5xl">Recent Jobs Available</h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
          Discover the latest opportunities and take the next step in your career today.
        </p>
      </div>


    {jobs.map((job) => (
      <div key={job.id} className="mt-10">
        <div className="shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="bg-green-200 text-[#309689] py-1 px-2 items-start w-fit rounded-lg">
              10 min ago
            </div>
            <div>
              <BsBookmarkPlus className="size-6 text-gray-500" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div>
              <img src={job.logo_url} alt="" className="rounded-full size-20" />
            </div>
            <div>
              <h1 className="font-semibold text-2xl">
                {job.title}
              </h1>
              <p>{job.subtitle}</p>
            </div>
          </div>

         <div className="flex justify-between flex-col gap-8 md:flex-row mt-6">
             <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <span className="flex items-center">
                    <PiSuitcaseSimpleLight className="size-7 mr-1 text-[#309689] font-bolder" />
                    <p className="font-semibold text-gray-500">{job.industrytype}</p>
                </span>
                <span className="flex items-center">
                    <RiTimer2Line className="size-7 mr-1 text-[#309689] font-bolder" />
                    <p className="font-semibold text-gray-500">{job.jobtype}</p>
                </span>
                <span className="flex items-center">
                    <TfiWallet className="size-7 mr-1 text-[#309689] font-bolder" />
                    <p className="font-semibold text-gray-500">${job.salaryrange}</p>
                </span>
                <span className="flex items-center">
                    <IoLocationOutline className="size-7 mr-1 text-[#309689] font-bolder" />
                    <p className="font-semibold text-gray-500">{job.location}</p>
                </span>
             </div>
             <Link href={`/job/${job.id}`}>
              <button
                href="#"
                className="bg-[#309689] px-4 py-2 rounded-lg text-white w-full lg:w-fit cursor-pointer"
              >
                Job Details
              </button>
              </Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};
