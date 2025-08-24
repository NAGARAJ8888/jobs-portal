import React from "react";

export const News = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 mb-10 items-center">
        <h1 className="font-semibold text-3xl md:text-5xl">News and Blog</h1>
        <p className="text-center">
          Stay updated with the latest career tips, industry insights, and
          company news to help you grow and succeed.
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap md:gap-6 items-center md:items-start md:justify-between">
        {/* Card 1 */}
        <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[48%]">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
            <img
              src="https://www.athpower.com/wp-content/uploads/2024/06/Employee-Engagement-1.png"
              alt="Article Image"
              className="w-full h-full object-cover"
            />
          </div>{" "}
          <div className="py-2 flex flex-col gap-3">
            <p className="text-gray-500 text-sm">30 March 2024</p>
            <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl">
              Revitalizing Workplace Morale: Innovative Tactics for Boosting
              Employee Engagement in 2024
            </h3>
            <p className="text-[#309689] font-semibold cursor-pointer hover:underline">
              Read more
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[48%]">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
            <img
              src="https://pilbox.themuse.com/image.png?filter=antialias&h=350&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2Fcommon-interview-questions.png&w=700"
              alt="Article Image"
              className="w-full h-full object-cover"
            />
          </div>{" "}
          <div className="py-2 flex flex-col gap-3">
            <p className="text-gray-500 text-sm">30 March 2024</p>
            <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl">
              How to avoid the top six most common job interview mistakes
            </h3>
            <p className="text-[#309689] font-semibold cursor-pointer hover:underline">
              Read more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
