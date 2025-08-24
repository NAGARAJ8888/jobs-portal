"use client";
import { PiSuitcaseSimple } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import LogoSlider from "./LogoSlider";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import HeroSkeleton from "./HeroSkeleton";

export default function Hero({ setJobs }) {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Example API call (change URL to your backend route)
      const res = await fetch(
        `/api/job-post?title=${title}&location=${location}&category=${category}`
      );
      const data = await res.json();
      setJobs(data); // store fetched jobs
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  if(loading) return <HeroSkeleton />;

  return (
    <>
    
    <div
      className="relative flex flex-col items-center justify-center min-h-[120vh] lg:min-h-[100vh] text-center p-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="font-bold text-3xl lg:text-7xl">Find Your Dream Job Today!</h1>
        <p className="mt-2">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col lg:flex-row gap-4 p-2 lg:p-0 items-center mt-6 justify-between rounded-xl overflow-hidden bg-white z-10 w-full sm:w-fit"
      >
        <div className="flex flex-col lg:flex-row gap-4 px-4 py-4 md:py-0 w-full sm:w-fit">
          <input
            type="text"
            placeholder="Job Title or Company"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="lg:rounded-lg px-1 md:px-3 text-lg py-2 border-b-2 border-gray-400 lg:border-b-0 focus:outline-none focus:ring-0 text-black w-full sm:w-fit"
          />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="lg:rounded-lg px-3 py-2 border-b-2 border-gray-400 lg:border-b-0 text-gray-800 border-0 focus:outline-none focus:ring-0 w-full xl:w-fit"
          >
            <option value="">Select Location</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="lg:rounded-lg sm:rounded-0 px-3 py-2 border-b-2 border-gray-400 lg:border-b-0 text-gray-800 border-0 focus:outline-none focus:ring-0 w-full xl:w-fit"
          >
            <option value="">Select Category</option>
            <option value="it">IT</option>
            <option value="software">Software Development</option>
            <option value="networking">Networking</option>
            <option value="ai-ml">AIML</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="data-science">Data Science</option>
          </select>
        </div>

        {/* Button */}
        <div className="bg-[#309689] h-full w-full lg:w-fit flex items-center justify-center rounded-lg lg:rounded-none">
          <button
            type="submit"
            className="text-white px-10 py-3 lg:py-4 flex gap-2 items-center cursor-pointer"
          >
            <CiSearch className="text-2xl font-bold" /> Search Jobs
          </button>
        </div>
      </form>


      {/* Stats */}
      <div className="z-10 flex py-4 md:p-10 gap-2 md:gap-8">
        <div className="text-white flex gap-2 md:gap-3 items-center">
          <div className="bg-[#309689] rounded-full p-2 md:p-3">
            <PiSuitcaseSimple className="size-4 md:size-6" />
          </div>
          <div className="flex flex-col text-start">
            <h3 className="font-bold text-sm md:text-lg">25,850</h3>
            <p className="text-gray-400 text-xs md:text-sm">Jobs</p>
          </div>
        </div>
        <div className="text-white flex gap-2 md:gap-3 items-center">
          <div className="bg-[#309689] rounded-full p-3">
            <IoIosPeople className="size-4 md:size-6" />
          </div>
          <div className="flex flex-col text-start">
            <h3 className="font-bold text-sm md:text-lg">10,244</h3>
            <p className="text-gray-400 text-xs md:text-sm">Candidates</p>
          </div>
        </div>
        <div className="text-white flex gap-2 md:gap-3 items-center">
          <div className="bg-[#309689] rounded-full p-3">
            <HiOutlineBuildingOffice2 className="size-4 md:size-6" />
          </div>
          <div className="flex flex-col text-start">
            <h3 className="font-bold text-sm md:text-lg">18,400</h3>
            <p className="text-gray-400 text-xs md:text-sm">Companies</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full mt-20 lg:mt-0">
        <LogoSlider />
      </div>
    </div>
      
    </>
  );
}
