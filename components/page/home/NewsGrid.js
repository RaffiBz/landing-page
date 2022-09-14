import React from "react";
import BlogCard from "../Cards/BlogCard";

export default function NewsGrid({ data }) {
  return (
    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-8 mt-[2.25rem] md:mt-[2.563rem]">
      {data.map((item) => (
        <BlogCard
          key={item.id}
          img={item.img}
          date={item.date}
          text={item.text}
        />
      ))}
    </div>
  );
}
