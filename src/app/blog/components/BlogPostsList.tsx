"use client";
import { useState } from "react";
import { blogPosts, Post } from "../data/BlogPosts";
import { BLOG } from "@/assets/blog";
import { BlogDetail } from "./BlogDetail";

export const BlogPostsList = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleReadMore = (post: Post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return <BlogDetail post={selectedPost} onBack={handleBack} />;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-md shadow-md overflow-hidden flex flex-col"
        >
          <div className="relative">
            <img
              src={BLOG.src}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="absolute top-0 left-0 bg-yellow-400 text-sm text-gray-900 px-5 py-2 rounded-r-md font-semibold">
              {post.date}
            </div>
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-gray-900 text-[16px] sm:text-[18px] mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-[14px] sm:text-[16px] mb-4 flex-grow">
              {post.description}
            </p>
          </div>

          <div className="p-4 pt-0">
            <button
              onClick={() => handleReadMore(post)}
              className="bg-[#00AEFF] text-white px-4 py-2 rounded-md cursor-pointer w-full sm:w-auto 
                hover:bg-white hover:text-[#00AEFF] hover:border hover:border-[#00AEFF]"
            >
              Read More
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};
