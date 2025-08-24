import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function JobDetailsSkeleton() {
  return (
    <div className="mt-[87px] px-2 md:p-10 flex flex-col">
      <div className="shadow-sm rounded-lg border border-gray-200 p-6">
        {/* Header row skeleton */}
        <div className="flex justify-between items-center mb-8">
          <Skeleton width={100} height={30} />
          <Skeleton circle width={30} height={30} />
        </div>

        {/* Logo + title */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <Skeleton circle width={80} height={80} />
          <div>
            <Skeleton width={200} height={25} />
            <Skeleton width={150} height={18} />
          </div>
        </div>

        {/* Info row */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <Skeleton width={120} height={20} />
          <Skeleton width={120} height={20} />
          <Skeleton width={120} height={20} />
        </div>

        {/* Button */}
        <div className="mt-6">
          <Skeleton width={150} height={40} />
        </div>
      </div>
    </div>
  );
}
