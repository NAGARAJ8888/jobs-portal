"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function RecruiterProfilePage() {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    company_name: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    industry: "",
    bio: ""
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/recruiter/profile");
        if (res.ok) {
          const data = await res.json();
          setForm(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/recruiter/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json();
        setForm(data);
        toast.success("Recruiter profile saved!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <ProfileSkeleton />;

  return (
    <div className="max-w-2xl mx-auto p-6 mt-[87px]">
      <h1 className="text-2xl font-bold mb-4">Recruiter Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
          {/* Preview logo if exists */}
          {form.logo_url && (
            <div className="mt-2 flex items-center justify-center">
              <img src={form.logo_url} alt="Company Logo" className="w-32 h-32 object-cover border-2 rounded-full border-orange-500" />
            </div>
          )}
          <input
          name="logo_url"
          value={form.logo_url || ""}
          onChange={handleChange}
          placeholder="Company Logo URL"
          className="w-full p-2 border rounded"
        />
        <input name="company_name" value={form.company_name} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Company Email" className="w-full p-2 border rounded" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" />
        <input name="website" value={form.website} onChange={handleChange} placeholder="Website" className="w-full p-2 border rounded" />
        <input name="industry" value={form.industry} onChange={handleChange} placeholder="Industry" className="w-full p-2 border rounded" />
        <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="About the company" className="w-full p-2 border rounded"></textarea>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer">
          Save Profile
        </button>
      </form>
    </div>
  );
}


/* Skeleton Loader Component */
function ProfileSkeleton() {
  return (
    <div className="max-w-2xl mx-auto p-6 mt-[87px] animate-pulse">
      <div className="h-7 w-1/3 bg-gray-300 rounded mb-6"></div>

      {/* Logo skeleton */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
      </div>

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