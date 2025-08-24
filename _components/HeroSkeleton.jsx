"use client";

export default function HeroSkeleton() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[120vh] lg:min-h-[100vh] text-center p-4 bg-gray-200 animate-pulse"
    >
      {/* Blur Overlay (dimmed effect) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center gap-4">
        <div className="h-10 w-72 lg:w-[500px] bg-gray-400 rounded"></div>
        <div className="h-4 w-60 lg:w-[400px] bg-gray-400 rounded"></div>
      </div>

      {/* Search Form Skeleton */}
      <div className="relative z-10 mt-6 w-full sm:w-fit flex flex-col lg:flex-row gap-4 p-4 rounded-xl bg-white/70">
        <div className="flex flex-col lg:flex-row gap-4 w-full sm:w-fit">
          <div className="h-10 w-64 bg-gray-300 rounded"></div>
          <div className="h-10 w-40 bg-gray-300 rounded"></div>
          <div className="h-10 w-44 bg-gray-300 rounded"></div>
        </div>
        <div className="h-12 w-48 bg-[#309689]/60 rounded"></div>
      </div>

      {/* Stats Skeleton */}
      <div className="z-10 flex py-6 md:py-10 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-3 items-center">
            <div className="h-10 w-10 rounded-full bg-gray-400"></div>
            <div className="flex flex-col gap-1">
              <div className="h-4 w-14 bg-gray-400 rounded"></div>
              <div className="h-3 w-20 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Logo Slider Skeleton */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 p-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-10 w-24 bg-gray-400 rounded"></div>
        ))}
      </div>
    </div>
  );
}
