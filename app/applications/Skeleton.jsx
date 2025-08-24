import React from "react";

const ApplicationsSkeleton = () => {
  return (
    <div className="p-6 animate-pulse">
      {/* Page title skeleton */}
      <div className="h-8 w-48 bg-gray-300 rounded mb-6"></div>

      {/* Repeat skeleton for each applicant card */}
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="p-4 mb-4 border rounded-lg shadow-sm bg-white"
        >
          {/* Header row (name + email) */}
          <div className="flex items-center justify-between mb-3">
            <div className="h-5 w-32 bg-gray-300 rounded"></div>
            <div className="h-5 w-40 bg-gray-300 rounded"></div>
          </div>

          {/* Phone + Location */}
          <div className="flex gap-4 mb-3">
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
          </div>

          {/* Experience + Skills */}
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
          </div>

          {/* Resume link + Bio */}
          <div className="h-4 w-40 bg-gray-300 rounded mb-2"></div>
          <div className="h-16 w-full bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationsSkeleton;
