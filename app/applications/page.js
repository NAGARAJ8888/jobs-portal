"use client";

import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

export default function ApplicationsPage() {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApplications() {
      try {
        // Example recruiter_id = 1 (replace dynamically from auth)
        const res = await fetch(`/api/applications?recruiter_id=1`);
        const data = await res.json();
        if (data.success) {
          setApplicants(data.applicants);
        }
      } catch (err) {
        console.error("Error fetching applications:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchApplications();
  }, []);

  if (loading) return <div className="text-center p-5"><Skeleton/></div>;

  return (
    <div className="p-6 mt-[87px] mb-20">
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      {applicants.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <table className="w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Experience</th>
              <th className="p-2 border">Skills</th>
              <th className="p-2 border">Resume</th>
              <th className="p-2 border">Applied On</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((app) => (
              <tr key={app.application_id} className="text-center">
                <td className="p-2 border">{app.full_name}</td>
                <td className="p-2 border">{app.email}</td>
                <td className="p-2 border">{app.phone || "N/A"}</td>
                <td className="p-2 border">{app.location || "N/A"}</td>
                <td className="p-2 border">{app.experience_level}</td>
                <td className="p-2 border">{app.skills}</td>
                <td className="p-2 border">
                  {app.resume_url ? (
                    <a
                      href={app.resume_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Resume
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="p-2 border">
                  {new Date(app.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
