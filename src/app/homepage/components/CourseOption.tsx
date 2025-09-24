"use client";
import { useRouter } from "next/navigation";

export const CourseOptions = () => {
  const router = useRouter(); // ✅ inside the component

  const courseOptions = [
    { label: "Most Popular", active: true },
    { label: "Full Stack", active: false },
    { label: "Frontend", active: false },
    { label: "Backend", active: false },
    { label: "Database", active: false },
    { label: "Design", active: false },
  ];

  return (
    <main>
      <div className="flex items-center justify-between">
        {/* Title */}
        <h2 className="text-[#0E90CF] sm:text-title text-[20px] font-normal">
          Explore Our Courses
        </h2>

        <button
          type="button"
          onClick={() => router.push("/courses")} // ✅ works now
          className="bg-[#11B3FE] border-none text-white py-[10px] px-[20px] rounded-[6px] sm:text-[14px] text-[12px] font-semibold"
        >
          View more
        </button>
      </div>

      {/* Options */}
      <section
  className="
    flex gap-2 sm:gap-4 mt-5
    overflow-x-auto scroll-smooth p-0
    scrollbar-thin scrollbar-thumb-gray-400 pb-2 scrollbar-track-gray-100
    md:overflow-x-hidden
  "
>
  {courseOptions.map((course, index) => (
    <button
      key={index}
      type="button"
      className={`
        px-3 sm:px-4 lg:px-6 py-2
        rounded-[20px] font-medium flex-shrink-0
        cursor-pointer transition
        text-xs sm:text-sm lg:text-base
        ${
          course.active
            ? "bg-[#00AEFF] text-white"
            : "bg-[#FAFAFA] text-[#4B5563]"
        }
      `}
    >
      {course.label}
    </button>
  ))}
</section>

    </main>
  );
};
