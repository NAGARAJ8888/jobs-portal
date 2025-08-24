import React from "react";
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const companies = [
  { name: "Apple", icon: <FaApple className="text-4xl text-gray-500" /> },
  { name: "Google", icon: <FaGoogle className="text-4xl text-blue-500" /> },
  { name: "Microsoft", icon: <FaMicrosoft className="text-4xl text-green-600" /> },
  { name: "Amazon", icon: <FaAmazon className="text-4xl text-white" /> },
  { name: "Facebook", icon: <FaFacebook className="text-4xl text-blue-700" /> },
  { name: "Twitter", icon: <FaTwitter className="text-4xl text-sky-500" /> },
  { name: "LinkedIn", icon: <FaLinkedin className="text-4xl text-blue-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-4xl text-gray-500" /> },
  { name: "Apple", icon: <FaApple className="text-4xl text-gray-500" /> },
  { name: "Google", icon: <FaGoogle className="text-4xl text-blue-500" /> },
  { name: "Microsoft", icon: <FaMicrosoft className="text-4xl text-green-600" /> },
  { name: "Amazon", icon: <FaAmazon className="text-4xl text-white" /> },
  { name: "Facebook", icon: <FaFacebook className="text-4xl text-blue-700" /> },
  { name: "Twitter", icon: <FaTwitter className="text-4xl text-sky-500" /> },
  { name: "LinkedIn", icon: <FaLinkedin className="text-4xl text-blue-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-4xl text-gray-500" /> },
];

export default function LogoSlider() {
  // Duplicate the array for seamless infinite scroll
  const sliderData = [...companies, ...companies];

  return (
    <div className="w-full overflow-hidden bg-black py-4">
      <div className="flex animate-scroll gap-10">
        {sliderData.map((company, index) => (
          <div key={index} className="flex flex-col items-center min-w-[120px]">
            {company.icon}
            <span className="mt-1 text-sm font-medium text-gray-700">{company.name}</span>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
           50% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
