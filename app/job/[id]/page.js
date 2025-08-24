//app/job/[id]/page.js

"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BsBookmarkPlus } from "react-icons/bs";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { RiTimer2Line } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useUser } from "../../context/UserContext";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import JobDetailsSkeleton from "@/_components/JobDetailsSkeleton";



export default function JobDetails(){
  const { id } = useParams(); // Get dynamic route param
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applied, setApplied] = useState(false);
  

  const { user } = useUser(); // ✅ now we have user context

  // ✅ Apply handler
  const handleApply = async () => {
    if (!user || !user.id) {
      toast.error("Please log in before applying!");
      return;
    }

    if (!job?.recruiter_id) {
      alert("Recruiter ID not found. Cannot apply.");
      return;
    }

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_id: id,
          recruiter_id: job.recruiter_id,
          jobseeker_id: user.id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error("Recruiter Cannot apply")
        return;
      }

      setApplied(true); // ✅ set applied only if API succeeds
    } catch (err) {
      console.error("Error applying:", err.message);
    }
  };

  // ✅ Check if user already applied (runs on load)
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/job/${id}`);

        if (!res.ok) throw new Error("Failed to fetch job details");

        const data = await res.json();
        setJob(data);

        // 🔹 check application status if user logged in
        if (user?.id) {
          const checkRes = await fetch(
            `/api/applications/check?job_id=${id}&jobseeker_id=${user.id}`
          );
          const checkData = await checkRes.json();
          if (checkData.applied) {
            setApplied(true); //keep "Applied" forever
          }
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchJob();
  }, [id, user]);




  if (loading) return <><JobDetailsSkeleton /> <JobDetailsSkeleton /></>;
  if (!job) return <p className="text-center mt-10">Job not found</p>;

  return (
    <div className="mt-[87px] px-2 md:p-10 flex flex-col">
        <div>
            <div className="mb-10">
                    <div className="shadow-sm rounded-lg border border-gray-200 p-6">
                      <div className="flex justify-between items-center mb-8">
                        <div className="bg-green-200 text-[#309689] py-1 px-2 items-start w-fit rounded-lg">
                          10 min ago
                        </div>
                        <div>
                          <BsBookmarkPlus className="size-6 text-gray-500" />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 md:items-center">
                        <div>
                          <img src={job.logo_url} alt="" className="rounded-full size-20" />
                        </div>
                        <div>
                          <h1 className="font-semibold text-2xl">
                            {job.title}
                          </h1>
                          <p>{job.subtitle}</p>
                        </div>
                      </div>
            
                     <div className="flex justify-between flex-col gap-8 md:flex-row mt-6">
                         <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                            <span className="flex items-center">
                                <PiSuitcaseSimpleLight className="size-7 mr-1 text-[#309689] font-bolder" />
                                <p className="font-semibold text-gray-500">{job.industrytype}</p>
                            </span>
                            <span className="flex items-center">
                                <RiTimer2Line className="size-7 mr-1 text-[#309689] font-bolder" />
                                <p className="font-semibold text-gray-500">{job.jobtype}</p>
                            </span>
                            <span className="flex items-center">
                                <TfiWallet className="size-7 mr-1 text-[#309689] font-bolder" />
                                <p className="font-semibold text-gray-500">${job.salaryrange}</p>
                            </span>
                            <span className="flex items-center">
                                <IoLocationOutline className="size-7 mr-1 text-[#309689] font-bolder" />
                                <p className="font-semibold text-gray-500">{job.location}</p>
                            </span>
                         </div>
                          <button
                            onClick={handleApply}
                            disabled={applied}
                            className={`cursor-pointer mt-6 px-6 py-2 rounded-lg font-semibold text-white ${applied ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}`}

                          >
                            {applied ? "Applied" : "Apply Now"}
                          </button>
                      </div>
                    </div>
            </div>
        </div>
        <div className='flex gap-10 mt-10'>
            <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-semibold text-2xl'>Job Description</h3>
                        <p className=' text-justify'>{job.jobDescription}Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. 
Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.</p>                    
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-semibold text-2xl'>Key Responsibilities</h3>
                        <span className='flex gap-2 items-center'><TiTick className='text-xl text-[#309689]'/><p>{job.keyresponsibilities}</p></span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-semibold text-2xl'>Professional Skills</h3>
                        <span className='flex gap-2 items-center'><TiTick className='text-xl text-[#309689]'/><p>{job.professionalskills}</p></span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-semibold text-2xl'>Tags:</h3>
                        <div className='flex flex-wrap gap-2'>
                        <span className='bg-gray-200 text-[#309689] p-2 rounded-lg self-start'>{job.tags}</span>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <p className='font-bold'>Share Job:</p><FaFacebook /><FaLinkedin /><FaTwitterSquare />
                    </div>
                    <div className='mt-10 flex flex-col gap-6'>
                        <h1 className='text-5xl font-semibold'>Related Jobs</h1>
                        <div className="mb-10">
                    <div className="shadow-sm rounded-lg border border-gray-200 p-6">
                      <div className="flex justify-between items-center mb-8">
                        <div className="bg-green-200 text-[#309689] py-1 px-2 items-start w-fit rounded-lg">
                          10 min ago
                        </div>
                        <div>
                          <BsBookmarkPlus className="size-6 text-gray-500" />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 md:items-center">
                        <div>
                          <img src={job.logo_url} alt="" className="rounded-full size-20" />
                        </div>
                        <div>
                          <h1 className="font-semibold text-2xl">
                            {job.title}
                          </h1>
                          <p>{job.subtitle}</p>
                        </div>
                      </div>
            
                     <div className="flex justify-between flex-col gap-8 md:flex-row mt-6">
                         <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                            <span className="flex md:flex-col 2xl:flex-row items-center">
                                <PiSuitcaseSimpleLight className="size-7 mr-1 text-[#309689] font-bolder" />
                                <p className="font-semibold text-gray-500">{job.industrytype}</p>
                            </span>
                            <span className="flex md:flex-col 2xl:flex-row items-center">
                                <RiTimer2Line className="size-7 mr-1 text-[#309689] font-bolder" />
                                <p className="font-semibold text-gray-500">{job.jobtype}</p>
                            </span>
                            <span className="flex md:flex-col 2xl:flex-row items-center">
                                <TfiWallet className="size-7 mr-1 text-[#309689] font-bolder" />
                                <p className="font-semibold text-gray-500">${job.salaryrange}</p>
                            </span>
                            <span className="flex md:flex-col 2xl:flex-row items-center">
                                <IoLocationOutline className="size-7 mr-1 text-[#309689] font-bolder" />
                                <p className="font-semibold text-gray-500">{job.location}</p>
                            </span>
                         </div>
                          <button
                            href="#"
                            className="bg-[#309689] px-4 py-2 rounded-lg text-white w-full lg:w-fit"
                          >
                            Job Details
                          </button>
                      </div>
                    </div>
            </div>
                    </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-[#E8F3F1] rounded-lg p-6 w-80 space-y-6">
                
                    <div>
                        <h2 className="font-bold text-lg mb-4">Job Overview</h2>
                        <ul className="space-y-4 text-sm text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 text-xl">👤</span>
                            <div>
                            <p className="font-medium">Job Title</p>
                            <p className="text-gray-500">{job.title}</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 text-xl">⏰</span>
                            <div>
                            <p className="font-medium">Job Type</p>
                            <p className="text-gray-500">{job.jobtype}</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 text-xl">🎯</span>
                            <div>
                            <p className="font-medium">Experience</p>
                            <p className="text-gray-500">{job.experiencelevel}</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 text-xl">🎓</span>
                            <div>
                            <p className="font-medium">Degree</p>
                            <p className="text-gray-500">Master / Bachelors</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 text-xl">💲</span>
                            <div>
                            <p className="font-medium">Offered Salary</p>
                            <p className="text-gray-500">${job.salaryrange}</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 text-xl">📍</span>
                            <div>
                            <p className="font-medium">Location</p>
                            <p className="text-gray-500">{job.location}</p>
                            </div>
                        </li>
                        </ul>
                    </div>

                
                    <div>
                        {/* <!-- Replace q= with your address or coordinates --> */}
                        <iframe
                          width="100%"
                          height="400"
                          className="border-0 rounded-xl"
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          src="https://www.google.com/maps?q=12.9716,77.5946&z=14&output=embed">
                        </iframe>

                    </div>

                
                    <div>
                        <h2 className="font-bold text-lg mb-4">Send Us Message</h2>
                        <form className="space-y-3">
                        <input type="text" placeholder="Full name" className="w-full p-2 border rounded-lg text-sm bg-white" />
                        <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-lg text-sm bg-white" />
                        <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded-lg text-sm bg-white" />
                        <textarea placeholder="Your Message" rows="3" className="w-full p-2 border rounded-lg text-sm bg-white"></textarea>
                        <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-lg w-full">Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
