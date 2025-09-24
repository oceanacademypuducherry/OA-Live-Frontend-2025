import { Post } from "../data/BlogPosts";
import { BLOG } from "@/assets/blog";

interface BlogDetailProps {
  post: Post;
  onBack: () => void;
}

export const BlogDetail = ({ post, onBack }: BlogDetailProps) => {
  return (
    <div className="max-w-4xl mx-auto p-1 sm:p-6 mb-12">
      {/* Back Button below Navbar */}
      <div className="flex justify-start mb-6">
        <button
          onClick={onBack}
          className="bg-[#00AEFF] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#00AEFF] hover:border hover:border-[#00AEFF] transition"
        >
          ← Back
        </button>
      </div>

      {/* Title stays left-aligned */}
      <h1 className="sm:text-2xl text-[20px] font-bold mb-6 text-[#00AEFF]">
        {post.title}
      </h1>

      {/* Centered Image */}
      <div className="flex justify-center mb-6">
        <img
          src={BLOG.src}
          alt={post.title}
          className="w-100  h-64 object-cover rounded-md"
        />
      </div>

      {/* Content */}
      <div className="text-gray-700 text-[14px] sm:text-[16px] leading-relaxed space-y-4">
        <p>
          With the rise in popularity of digital experiences such as how we are
          living, shopping, and communicating, front-end development has emerged
          as one of the most demanded skills in the technological landscape.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 mt-6">
          Why 2025: Front-End Development is the Choice Career
        </h2>
        <p>
          Software development is quickly becoming an essential investment for
          every business. Companies are investing in just user-friendly UI, but
          also scalable frontend technologies. 2025 will be a breakout year for
          job seekers with front-end skills.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 mt-6">
          What You Can Expect to Learn: Technical and Career-Ready
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>HTML, CSS, JavaScript – Learn the core browser programming languages.</li>
          <li>Popular frameworks and libraries – including React, Next.js, and Bootstrap.</li>
          <li>Responsive Design – Learn mobile-first strategies and accessibility.</li>
          <li>
            Career Guidance – Resume preparation, mock interviews, and placement support.
          </li>
        </ul>
      </div>
    </div>
  );
};
