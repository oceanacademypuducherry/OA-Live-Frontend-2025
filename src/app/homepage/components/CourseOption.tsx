"use client";

export const CourseOptions = () => {
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
        <h2 className="text-[#0E90CF] sm:text-[30px] text-[20px] font-semibold">
          Explore Our Courses
        </h2>

        <button
          type="button"
          className="bg-[#11B3FE] border-none text-white py-[10px] px-[20px] rounded-[6px] sm:text-[14px] text-[12px] font-semibold"
        >
          View more
        </button>
      </div>

      {/* Options */}
      <section
        className="
          flex sm:gap-[16px] gap-[8px] mt-[20px] 
          overflow-x-auto scroll-smooth p-2
          scrollbar-none
          sm:overflow-visible
        "
      >
        {courseOptions.map((course, index) => (
          <button
            key={index}
            type="button"
            className={`px-[10px] sm:px-[10px] md:px-[30px] py-[8px] rounded-[20px] font-medium text-[12px] sm:text-[14px] md:text-[16px] cursor-pointer transition flex-shrink-0
              ${
                course.active
                  ? "bg-[#00AEFF] text-white"
                  : "bg-[#FAFAFA] text-[#4B5563]"
              }`}
          >
            {course.label}
          </button>
        ))}
      </section>
    </main>
  );
};
