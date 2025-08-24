import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { FaRegFileLines } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Form } from "./Form";

export default function page() {
  return (
    <div className="mt-[70px]">
      <div className="flex items-center justify-center text-center bg-black text-white h-[30vh] w-full">
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </div>
      <div className="p-2 md:p-10 flex flex-col md:flex-row gap-8 md:gap-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="basis-full md:basis-1/2 flex flex-col gap-4 justify-center items-center text-center md:text-start md:items-start">
            <h1 className="font-bold text-3xl md:text-5xl ">
              You Will Grow, You Will Succeed. We Promise That
            </h1>
            <p>
              We empower job seekers to unlock their potential and connect with the right 
  opportunities. With trusted employers and career resources, we ensure you 
  take confident steps toward building a brighter future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-start">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <FiPhone className="size-8 text-[#309689]" />
                <h3 className="font-semibold text-xl">Call for enquiry</h3>
                <p>+257 388-6895</p>
              </div>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <TfiEmail className="size-8 text-[#309689]" />
                <h3 className="font-semibold text-xl">Send us email</h3>
                <p>kramulous@sbcglobal.net</p>
              </div>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <MdOutlineWatchLater className="size-8 text-[#309689]" />
                <h3 className="font-semibold text-xl">Opening hours</h3>
                <p>Mon - Fri: 10AM - 10PM </p>
              </div>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <IoLocationOutline className="size-8 text-[#309689]" />
                <h3 className="font-semibold text-xl">Office</h3>
                <p>19 North Road Piscataway, NY 08854</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
            <Form/>
        </div>
      </div>
      <div className="w-full h-96 mt-8 overflow-hidden shadow-lg p-2 md:p-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.411378296095!2d74.50608867849095!3d15.875217855287334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf669f5095362f%3A0x7e34b31edcdefb5f!2sBelagavi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1755351356161!5m2!1sen!2sin" width="100%" height="100%" className="rounded-lg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  );
}
