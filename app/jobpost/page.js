//app/jobpost/page.js
"use client";

import { useEffect, useState } from "react";
import { useUser } from '../context/UserContext';
import Link from "next/link";
import { toast } from "react-toastify";


export default function page() {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    jobtype: "",
    location: "",
    salaryRange: "",
    experienceLevel: "",
    industryType: "",
    jobDescription: "",
    keyResponsibilities: "",
    professionalSkills: "",
    tags: "",
    recruiter_id: "",
  });

  // Update recruiter_id when user is available
  useEffect(() => {
  const fetchRecruiterId = async () => {
    if (user?.id) {
      const res = await fetch(`/api/get-recruiter-id?user_id=${user.id}`);
      const data = await res.json();
      if (data.recruiter_id) {
        setFormData(prev => ({ ...prev, recruiter_id: data.recruiter_id }));
      }
    }
  };
  fetchRecruiterId();
}, [user]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/job-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Job posted successfully!");
      setFormData(prev => ({
        title: "",
        subtitle: "",
        jobtype: "",
        location: "",
        salaryRange: "",
        experienceLevel: "",
        industryType: "",
        jobDescription: "",
        keyResponsibilities: "",
        professionalSkills: "",
        tags: "",
        recruiter_id: prev.recruiter_id,
     }));
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    console.error("Error submitting job:", error);
  }
};


 if (!formData.recruiter_id) {
    return (
      <div className="p-8 mt-[95px] flex flex-col items-center justify-center rounded-xl text-center shadow-lg bg-gradient-to-r from-white via-gray-50 to-white h-[80vh] max-w-md mx-auto">
  <div className="text-lg mb-6 p-4 bg-yellow-100 rounded-md border-l-4 border-yellow-400 text-yellow-800 font-medium shadow-sm w-full text-left">
    You need to create a recruiter profile before posting a job.
  </div>
                    <Link href="/recruiter/profile">

  <button
    className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md w-full font-semibold cursor-pointer"
  >
    Create Profile
  </button></Link>
</div>

    );
  }


  return (
    <div className="p-6 max-w-3xl mx-2 md:mx-auto mt-[95px] mb-10 bg-[#309689] rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {formData.logo_url && (
            <div className="mt-2 flex items-center justify-center">
              <img src={formData.logo_url} alt="Company Logo" className="w-32 h-32 object-cover border-2 rounded-full border-orange-500" />
            </div>
          )}
          <input
          name="logo_url"
          value={formData.logo_url || ""}
          onChange={handleChange}
          placeholder="Company Logo URL"
          className="w-full p-2 border rounded bg-white"
        />
        
        {/* Job Title */}
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
          required
        />

        {/* Subtitle */}
        <input
          type="text"
          name="subtitle"
          placeholder="Subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
        />

        {/* Job Type */}
        <select
          name="jobtype"
          value={formData.jobtype}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
          required
        >
          <option value="">Select Job Type</option>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Internship</option>
          <option>Contract</option>
          <option>Remote</option>
        </select>

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
          required
        />

        {/* Salary Range */}
        <input
          type="text"
          name="salaryRange"
          placeholder="Salary Range (e.g. ₹30,000 - ₹50,000)"
          value={formData.salaryRange}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
        />

        {/* Experience Level */}
        <select
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
          required
        >
          <option value="">Select Experience Level</option>
          <option>Fresher</option>
          <option>1-2 Years</option>
          <option>3-5 Years</option>
          <option>5+ Years</option>
        </select>

        {/* Industry Type */}
        <input
          type="text"
          name="industryType"
          placeholder="Industry Type (e.g. Hotels & Tourism)"
          value={formData.industryType}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
        />

        {/* Job Description */}
        <textarea
          name="jobDescription"
          placeholder="Job Description"
          value={formData.jobDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
          rows="4"
          required
        ></textarea>

        {/* Key Responsibilities */}
        <textarea
          name="keyResponsibilities"
          placeholder="Key Responsibilities"
          value={formData.keyResponsibilities}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
          rows="3"
        ></textarea>

        {/* Professional Skills */}
        <textarea
          name="professionalSkills"
          placeholder="Professional Skills (comma separated)"
          value={formData.professionalSkills}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
          rows="2"
        ></textarea>

        {/* Tags */}
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white"
        />

        {/* Submit Button */}
        <button
          disabled={!formData.recruiter_id}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}