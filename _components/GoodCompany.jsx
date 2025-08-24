import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { News } from "./News";
import Link from "next/link";
import { FaQuoteRight } from "react-icons/fa";


export const GoodCompany = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-30 my-10 md:my-20 mx-1 md:mx-10">
        <div>
          <img
            src="./companyEnv.jpg"
            alt="image"
            className="w-[550px] h-auto md:h-[514px] object-cover rounded-lg"
          />
        </div>
        <div className="w-auto md:w-[600px] text-center md:text-start flex flex-col gap-3 md:gap-6">
          <h1 className="font-bold text-[28px] md:text-5xl">
            Good Life Begins With A Good Company
          </h1>
          <p className="text-justify">
            A positive workplace drives success. At GoodCompany, we help people grow
  their careers while building lasting relationships with leading employers.
          </p>
          <div className="flex gap-8 items-center justify-center md:justify-start">
          <Link href="/jobs" className="px-4 py-2 bg-[#309689] rounded-lg text-white cursor-pointer">
              Search JOB
            </Link>
            <a href="" className="underline">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mx-2 md:mx-5 lg:mx-10 xl:mx-20 2xl:mx-32 mb-10 md:mb-20 gap-4 md:gap-8">
        <div className="w-full md:w-1/2 text-center md:text-start lg:w-1/4 flex flex-col gap-3 p-3">
          <h1 className="text-[#309689] font-bold text-4xl">12k+</h1>
          <h3 className="font-semibold text-2xl">Clients worldwide</h3>
          <p>
            Trusted by global businesses to find the right talent and build high-performing teams.
          </p>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-start lg:w-1/4 flex flex-col gap-3 p-3">
          <h1 className="text-[#309689] font-bold text-4xl">20k+</h1>
          <h3 className="font-semibold text-2xl">Active resume</h3>
          <p>
            Thousands of professionals keep their profiles updated, making it easy for employers to find top talent.
          </p>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-start lg:w-1/4 flex flex-col gap-3 p-3">
          <h1 className="text-[#309689] font-bold text-4xl">18k+</h1>
          <h3 className="font-semibold text-2xl">Companies</h3>
          <p>
            Leading startups and enterprises trust our platform to hire the right candidates quickly and effectively.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-20 bg-black text-white mb-10 md:mb-20 mx-2 md:mx-10 p-5 rounded-lg h-auto">
        <div className="max-w-[488px] flex flex-col justify-center items-center gap-4 md:gap-8 md:px-5 md:py-10">
          <h1 className="font-bold text-3xl md:text-5xl leading-snug text-center md:text-start">
            Create A Better Future For Yourself
          </h1>
          <p className="text-gray-400 text-center md:text-start">
            Discover career paths, connect with mentors, and land opportunities that
  match your skills and ambitions.
          </p>
          <Link href="/jobs"
            className="px-4 py-2 bg-[#309689] rounded-lg text-white self-start w-full text-center md:w-fit cursor-pointer"
          >
            Search JOB</Link>
        </div>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1603201667230-bd139210db18?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="group-photo"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="bg-gray-300">
        <div className="py-10 mx-2 md:mx-30">
          <div className="text-center font-semibold flex flex-col gap-3 md:gap-5 mb-10">
            <h1 className="text-3xl md:text-5xl">Testimonials from Our Cuctomers</h1>
            <p className="text-gray-500">
              Hear what professionals and companies say about working with us.
            </p>
          </div>

          <Carousel
            opts={{ align: "start" }}
            className="w-[90%] md:max-w-6xl mx-auto"
          >
            <CarouselContent className="flex gap-4">
              {["amber", "red", "green", "blue", "red", "purple"].map(
                (color, i) => (
                  <CarouselItem
                    key={i}
                    className="basis-[calc((100%-1rem)/1)] lg:basis-[calc((100%-2rem)/2)] 2xl:basis-[calc((100%-2rem)/3)] rounded-lg"
                  >
                    <div
                      className={`h-auto flex items-center justify-center rounded-lg`}
                    >
                      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow">
                        <div className="flex space-x-1 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                          Amazing services
                        </h5>

                        <p className="mb-6 font-normal text-gray-500">
                          The platform made my job search simple and fast. I found a role within weeks and the support team was incredible.
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://m.economictimes.com/thumb/msid-88176008,width-1200,height-900,resizemode-4,imgsize-105102/office-.jpg"
                              alt="User image"
                            />
                            <div className="ml-3">
                              <p className="text-sm font-semibold text-gray-900">
                                Marco Kihn
                              </p>
                              <p className="text-xs text-gray-500">
                                Marketing Specialist
                              </p>
                            </div>
                          </div>
                          <FaQuoteRight className="text-[#309689] size-8"/>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                )
              )}
            </CarouselContent>

            <CarouselPrevious className="hidden md:block md:-left-14" />
            <CarouselNext className="hidden md:block md:-right-14" />
          </Carousel>
        </div>
      </div>
      <div className='my-10 md:my-20 mx-2 md:mx-10 lg:mx-20'>
        <News/>
      </div>
    </div>
  );
};
