"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function JobseekerProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    experience_level: "",
    skills: "",
    resume_url: "",
    bio: ""
  });

  // Fetch profile on load
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/jobseeker/profile");
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
          setForm({
            ...data,
            skills: data.skills || ""
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/jobseeker/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          skills: form.skills || ""
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
        toast.success("Profile updated successfully!");
      }
    } catch (err) {
      console.error(err);
    }
  };

   if (loading) return <ProfileSkeleton />;

  return (
    <div className="max-w-2xl mx-auto p-6 mt-[87px]">
      <h1 className="text-2xl font-bold mb-4">Jobseeker Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="full_name" value={form.full_name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" />
        
        <select name="experience_level" value={form.experience_level} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5+ years">5+ years</option>
        </select>

        <input name="skills" value={form.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="w-full p-2 border rounded" />
        <input name="resume_url" value={form.resume_url} onChange={handleChange} placeholder="Resume URL" className="w-full p-2 border rounded" />
        <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Short Bio" className="w-full p-2 border rounded"></textarea>
        
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
          Save Profile
        </button>
      </form>
    </div>
  );
}


/* ✅ Skeleton Loader Component */
function ProfileSkeleton() {
  return (
    <div className="max-w-2xl mx-auto p-6 mt-[87px] animate-pulse">
      <div className="h-7 w-1/3 bg-gray-300 rounded mb-6"></div>

      <div className="space-y-4">
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
      </div>

      <div className="h-10 w-32 bg-gray-400 rounded mt-6"></div>
    </div>
  );
}