//Navbar.jsx
"use client";

import { PiSuitcaseSimple } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "../app/context/UserContext";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {

  const { user, setUser, loading } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
  await fetch("/api/logout", {
    method: "POST",
  });
  setUser(null); // clear context
  window.location.href = "/"; // redirect to home
};

 // 🔹 Show skeleton when still loading
  if (loading) {
    return (
      <div className="bg-black backdrop-blur-md fixed top-0 left-0 right-0 z-50 text-white py-2">
        <nav className="flex justify-around items-center p-4">
          <span className="font-semibold text-xl flex items-center gap-2">
            <PiSuitcaseSimple className="size-6" /> Job Portal
          </span>
          <ul className="flex gap-4 animate-pulse">
            <li className="w-16 h-5 bg-gray-700 rounded"></li>
            <li className="w-20 h-5 bg-gray-700 rounded"></li>
            <li className="w-24 h-5 bg-gray-700 rounded"></li>
          </ul>
          <div className="w-24 h-8 bg-gray-700 rounded"></div>
        </nav>
      </div>
    );
  }


  return (
    <div className='bg-black backdrop-blur-md fixed top-0 left-0 right-0 z-50 text-white py-2'>
        <nav className='flex justify-between md:justify-around items-center p-4'>
            <span className='font-semibold text-xl flex items-center gap-2'><PiSuitcaseSimple className='size-6'/> Job Portal</span>
            <ul className='hidden md:flex gap-4 '>
                <li className='font-semibold text-[16px] hidden md:block'><Link href="/">Home</Link></li>
                <li className='font-semibold text-[16px] hidden md:block'><Link href="/jobs">Jobs</Link></li>
                <li className='font-semibold text-[16px] hidden md:block'><Link href="/about">About Us</Link></li>
                <li className='font-semibold text-[16px] hidden md:block'><Link href="/contact">Contact Us</Link></li>
                
                {/* Only show Job Post if user is logged in AND role is recruiter */}
                {user?.role === "recruiter" && (
                  <li className="font-semibold text-[16px] flex gap-4">
                    <Link href="/jobpost">Post Job</Link>
                    <Link href="/recruiter/jobs">Jobs Posted</Link>
                    <Link href="/recruiter/profile">profile</Link>
                    <Link href="/recruiter/applications">Applications</Link>
                  </li>
                )}
                {user?.role === "jobseeker" && (
                  <li className="font-semibold text-[16px] hidden md:block">
                    <Link href="/jobseeker/profile">profile</Link>
                  </li>
                )}
            </ul>
            {user && (
                  <button className="font-semibold text-[16px] cursor-pointer hidden md:block" onClick={handleLogout}>
                    Logout
                  </button>

            )}
            {!user && (
              <div className=' hidden md:flex gap-4 items-center'>
                  <Link href="/login" className='font-medium text-[16px]'>Login</Link>
                  <Link href="/register" className='bg-[#309689] font-semibold text-[16px] text-white p-2 rounded-sm'>Register</Link>
              </div>
            )}

            {/* Burger Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl focus:outline-none"
        >
          <RxHamburgerMenu />
        </button>
        </nav>
        {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-64 bg-gray-800 z-10 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl absolute top-4 right-4"
        >
          <IoClose  className="cursor-pointer"/>
        </button>

        <ul className="flex flex-col gap-6 mt-12">
          <li onClick={() => setIsOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/jobs">Jobs</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/about">About Us</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/contact">Contact Us</Link>
          </li>

          {user?.role === "recruiter" && (
            <>
              <li onClick={() => setIsOpen(false)}>
                <Link href="/jobpost">Post Job</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link href="/recruiter/jobs">Jobs Posted</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link href="/recruiter/profile">Profile</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link href="/recruiter/applications">Applications</Link>
              </li>
            </>
          )}

          {user?.role === "jobseeker" && (
            <li onClick={() => setIsOpen(false)}>
              <Link href="/jobseeker/profile">Profile</Link>
            </li>
          )}
        </ul>

        <div className="mt-5 flex flex-col gap-6">
          {user ? (
            <button
              className="text-[16px] cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="font-medium text-[16px]"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-[16px] text-white rounded-sm"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

