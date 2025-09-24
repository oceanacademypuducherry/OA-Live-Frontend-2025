import React from "react";
import { BlogPostsList } from "./components";
import { Footer, Navbar } from "@/components";
   // adjust path if needed

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Full-width Blue Banner */}
      <section className="w-full  bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white py-8 sm:py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[30px] sm:text-[36px] font-bold mb-4 ">Blog</h2>
          <p className="text-gray-100 text-sm sm:text-base md:text-lg">
            Empower your future with our comprehensive IT training programs
            tailored for students and working professionals. Learn from
            experienced trainers, gain practical skills, and stay ahead in
            today’s competitive IT industry.
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <div className="mt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow">
        <BlogPostsList />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
