"use client";
import { Category } from '@/_components/Category';
import { GoodCompany } from '@/_components/GoodCompany';
import Hero from '@/_components/Hero';
import { Joblist } from '@/_components/Joblist';
import { useEffect, useState } from 'react';


export default function Home() {
const [jobs, setJobs] = useState([]);  

// Load default jobs on page load
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/job-post"); //backend endpoint for ALL jobs
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <Hero setJobs={setJobs} />
      <Joblist jobs={jobs} />
      <Category/>
      <GoodCompany/>
    </div>
  );
}