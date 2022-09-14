import React from "react";
import { BlogPageData } from "../../../data/BlogPage";
import BlogCard from "../Cards/BlogCard";

export default function BlogGrid() {
  return (
    <div className="px-4 lg:px-[3.75rem] py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {BlogPageData.blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            img={blog.img}
            date={blog.date}
            text={blog.text}
          />
        ))}
      </div>
    </div>
  );
}
