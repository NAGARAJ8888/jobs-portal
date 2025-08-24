"use client";

import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";

export default function RecruiterApplicationsPage() {
  const { user, loading } = useUser();
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && user) {
      const fetchApplications = async () => {
        try {
          setFetching(true);
          const res = await fetch(
            `/api/recruiter/applications?user_id=${user.id}`
          );
          if (res.ok) {
            const data = await res.json();
            setApplications(data.applications || []);
          } else {
            const errData = await res.json();
            setError(errData.error || "Failed to load applications");
          }
        } catch (err) {
          console.error("Error fetching applications:", err);
          setError("Error fetching applications");
        }finally {
          setFetching(false);
        }
      };

      fetchApplications();
    }
  }, [user, loading]);

  if (loading) return <SkeletonLoader count={3} />;
  if (!user) return <p className="p-6">Please log in as a recruiter.</p>;

  return (
    <div className="p-6 mt-[100px] min-h-[100vh]">
      <h1 className="text-2xl font-bold mb-6">All Applications</h1>

      {error && <p className="text-red-500">{error}</p>}

      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {applications.map((app) => (
            <div
              key={app.application_id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h2 className="text-lg font-semibold">
                Job: {app.job_title}
              </h2>
              <p>
                <span className="font-medium">Applicant:</span>{" "}
                {app.jobseeker_name}
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                {app.jobseeker_email}
              </p>
              <p>
                <span className="font-medium">Resume:</span>{" "}
                <a
                  href={app.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Resume
                </a>
              </p>
              <p className="text-gray-500 text-sm">
                Applied on: {new Date(app.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


/* ✅ Skeleton Component */
function SkeletonLoader({ count = 1 }) {
  return (
    <div className="space-y-4 animate-pulse p-6 mt-[100px]">
      <h1 className="text-2xl font-bold mb-6">All Applications</h1>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="p-4 border rounded-lg shadow-md bg-white space-y-3"
        >
          <div className="h-5 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/6 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
}