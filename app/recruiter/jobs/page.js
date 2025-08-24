"use client";
import React, { useEffect, useState } from "react";

const RecruiterJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/recruiter/jobs", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          setJobs(data.jobs);
        } else {
          console.error("Failed to fetch jobs");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <JobsSkeleton count={3} />;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-[100px]">
      <h1 className="text-2xl font-bold mb-6">My Jobs</h1>
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.subtitle}</p>
              <div className="flex justify-between mt-2 text-gray-700">
                <span>{job.location}</span>
                <span>${job.salaryrange}</span>
              </div>
              <button
      className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      onClick={async () => {
        if (!confirm("Are you sure you want to delete this job?")) return;

        try {
          const res = await fetch(`/api/recruiter/jobs/${job.id}`, {
            method: "DELETE",
            credentials: "include",
          });
          const data = await res.json();

          if (res.ok) {
            // Remove job from state
            setJobs((prev) => prev.filter((j) => j.id !== job.id));
          } else {
            alert(data.error || "Failed to delete job");
          }
        } catch (err) {
          console.error(err);
          alert("Error deleting job");
        }
      }}
    >
      Delete
    </button>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};
export default RecruiterJobsPage;


/* ✅ Skeleton Loader for Jobs */
function JobsSkeleton({ count = 3 }) {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-[100px] animate-pulse">
      <div className="h-7 w-32 bg-gray-300 rounded mb-6"></div>

      <div className="grid gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="border p-4 rounded shadow bg-white space-y-3"
          >
            <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            <div className="flex justify-between mt-2">
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="h-8 w-24 bg-gray-400 rounded mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}