"use client";

import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BsBookmarkPlus } from "react-icons/bs";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { RiTimer2Line } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import JobDetailsSkeleton from "./JobDetailsSkeleton";

export default function JoblistWithPagination({ filters }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch jobs whenever filters change
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();

        if (filters.title) params.append("title", filters.title);

        if (filters.location) params.append("location", filters.location);

        if (filters.categories.length) params.append("categories", filters.categories.join(","));

        if (filters.jobTypes.length) params.append("jobTypes", filters.jobTypes.join(","));

        if (filters.experience.length) params.append("experience", filters.experience.join(","));


        if (filters.datePosted) params.append("datePosted", filters.datePosted);

        if (filters.salary.length === 2) {
          params.append("salaryMin", filters.salary[0]);

          params.append("salaryMax", filters.salary[1]);

        }
        if (filters.tags.length) params.append("tags", filters.tags.join(","));

        if (filters.sort) params.append("sort", filters.sort);


        // const res = await fetch(`/api/job-post?${params.toString()}`);
        const res = await fetch(`/api/job-post?${params.toString()}`, { cache: "no-store" });

        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
        setCurrentPage(1); // reset to first page on filter change
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [filters]);

  if (loading) return <><JobDetailsSkeleton/><JobDetailsSkeleton/></>;

  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;


  // const currentJobs = jobs.slice(startIndex, startIndex + itemsPerPage);

const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768;
const currentJobs = isSmallScreen ? jobs : jobs.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div>

      {currentJobs.map((job) => (
        <div key={job.id} className="mt-10">
          <div className="shadow-sm rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="bg-green-200 text-[#309689] py-1 px-2 w-fit rounded-lg">
                10 min ago
              </div>
              <BsBookmarkPlus className="size-6 text-gray-500" />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <img src={job.logo_url || "./brand.avif"} alt="" className="rounded-full size-20" />
              <div>
                <h1 className="font-semibold text-2xl">{job.title}</h1>
                <p>{job.subtitle || "Company Name"}</p>
              </div>
            </div>

            <div className="flex justify-between flex-col gap-8 md:flex-row mt-6">
              <div className="flex flex-col md:flex-row gap-2 2xl:gap-4 md:gap-12">
                <span className="flex md:flex-col 2xl:flex-row items-center">
                  <PiSuitcaseSimpleLight className="size-7 mr-1 text-[#309689]" />
                  <p className="font-semibold text-gray-500">{job.industrytype}</p>
                </span>
                <span className="flex md:flex-col 2xl:flex-row items-center">
                  <RiTimer2Line className="size-7 mr-1 text-[#309689]" />
                  <p className="font-semibold text-gray-500">{job.jobtype}</p>
                </span>
                <span className="flex md:flex-col 2xl:flex-row items-center">
                  <TfiWallet className="size-7 mr-1 text-[#309689]" />
                  <p className="font-semibold text-gray-500">${job.salaryrange}</p>
                </span>
                <span className="flex md:flex-col 2xl:flex-row items-center">
                  <IoLocationOutline className="size-7 mr-1 text-[#309689]" />
                  <p className="font-semibold text-gray-500">{job.location}</p>
                </span>
              </div>
              <Link href={`/job/${job.id}`}>
                <button className="bg-[#309689] px-4 py-2 rounded-lg text-white w-full lg:w-fit cursor-pointer">
                  Job Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8 justify-center hidden md:flex">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(currentPage - 1);
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
