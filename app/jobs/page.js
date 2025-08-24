"use client";

import { useState } from "react";
import ProductsPage from "@/_components/Pagination";
import { BsBookmarkPlus } from "react-icons/bs";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { RiTimer2Line } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";

export default function Job() {
  // 🔑 Filter states
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    categories: [],
    jobTypes: [],
    experience: [],
    datePosted: "",
    salary: [0, 9999],
    tags: [],
  });

  // handle input change (single value)
  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  // handle checkbox groups
  const handleCheckbox = (field, value) => {
    setFilters((prev) => {
      const isSelected = prev[field].includes(value);
      return {
        ...prev,
        [field]: isSelected
          ? prev[field].filter((v) => v !== value)
          : [...prev[field], value],
      };
    });
  };

  return (
    <div className="mt-[70px]">
      {/* Header */}
      <div className="flex items-center justify-center text-center bg-black text-white h-[30vh] w-full">
        <h1 className="text-5xl font-bold">Jobs</h1>
      </div>

      <div className="flex gap-10 p-2 md:p-10">
        {/* Sidebar */}
        <div className="hidden md:block">
          <div className="w-80 bg-[#E6F2EF] p-6 rounded-2xl space-y-6">
            {/* Search by Title */}
            <div>
              <h2 className="font-bold mb-2">Search by Job Title</h2>
              <input
                type="text"
                placeholder="Job title or company"
                className="w-full p-2 border bg-white border-gray-300 rounded-lg"
                value={filters.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>

            {/* Location */}
            <div>
              <h2 className="font-bold mb-2">Location</h2>
              <select
                className="w-full p-2 border border-gray-300 bg-white rounded-lg"
                value={filters.location}
                onChange={(e) => handleChange("location", e.target.value)}
              >
                <option value="">Choose city</option>
                <option value="bengaluru">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="delhi">Delhi</option>
                <option value="chennai">chennai</option>
              </select>
            </div>

            {/* Categories */}
            <div>
              <h2 className="font-bold mb-2">Category</h2>
              {["IT", "Analytics", "Hotels & Tourism", "Design", "Finance"].map(
                (cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cat)}
                      onChange={() => handleCheckbox("categories", cat)}
                    />
                    {cat}
                  </label>
                )
              )}
            </div>

            {/* Job Type */}
            <div>
              <h2 className="font-bold mb-2">Job Type</h2>
              {["Fulltime", "Parttime", "Remote", "frealance", "Contract"].map(
                (type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.jobTypes.includes(type)}
                      onChange={() => handleCheckbox("jobTypes", type)}
                    />
                    {type}
                  </label>
                )
              )}
            </div>

            {/* Experience Level */}
            <div>
              <h2 className="font-bold mb-2">Experience Level</h2>
              {["Entry", "mid", "Senior", "Expert"].map((exp) => (
                <label key={exp} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.experience.includes(exp)}
                    onChange={() => handleCheckbox("experience", exp)}
                  />
                  {exp}
                </label>
              ))}
            </div>

            {/* Date Posted */}
            <div>
            <h2 className="font-bold mb-2">Date Posted</h2>
            {[
              { label: "All", value: "all" },
              { label: "Last Hour", value: "1h" },
              { label: "Last 24 Hours", value: "1d" },
              { label: "Last 7 Days", value: "7d" },
              { label: "Last 30 Days", value: "30d" },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="datePosted"
                  checked={filters.datePosted === option.value}
                  onChange={() => handleChange("datePosted", option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>


            {/* Salary */}
            <div>
              <h2 className="font-bold mb-2">Salary</h2>
              <input
                type="range"
                min="0"
                max="9999"
                value={filters.salary[1]}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    salary: [0, Number(e.target.value)],
                  }))
                }
                className="w-full"
              />
              <p className="mt-2">Salary: ${filters.salary[0]} - ${filters.salary[1]}</p>
            </div>

            {/* Tags */}
            <div>
              <h2 className="font-bold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {["engineering", "design", "ui", "marketing", "management"].map(
                  (tag) => (
                    <span
                      key={tag}
                      onClick={() => handleCheckbox("tags", tag)}
                      className={`cursor-pointer px-3 py-1 rounded-lg ${
                        filters.tags.includes(tag)
                          ? "bg-[#309689] text-white"
                          : "bg-[#D4EAE6] text-[#309689]"
                      }`}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="w-80 rounded-2xl mt-4">
            <img src="./hiring_img.png" className="w-full h-full object-cover rounded-2xl"/>
          </div>
        </div>

        {/* Job Listings */}
        <div className="flex-1 flex-col gap-6">
          <div className="hidden md:flex justify-between items-center">
            <p className="font-medium text-xl text-gray-400">
              Showing results
            </p>
            <select
              className="p-2 border text-gray-400 rounded-lg w-48"
              onChange={(e) => handleChange("sort", e.target.value)}
            >
              <option value="latest">Sort by latest</option>
              <option value="salary_high">Salary: High to Low</option>
              <option value="salary_low">Salary: Low to High</option>
            </select>
          </div>

          <div className="my-10">
            <div className="text-center lg:text-start max-w-full lg:max-w-2xl text-wrap">
              <h1 className="font-bold text-[28px] lg:text-5xl">Jobs Available</h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Explore the latest opportunities and take the next step in your career journey.
              </p>
            </div>
          </div>

          {/* 🔑 Pass filters to ProductsPage */}
          <ProductsPage filters={filters} />
        </div>
      </div>
    </div>
  );
}
 
 
 
