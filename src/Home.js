import BlogList from "./BlogList";
import useFetch from "./UseFetch";
import React from "react";

export default function Home() {
  const {data: blogs, isPending, error,} = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading......</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'naval')} title = "Naval's Blogs!" />             */}
    </div>
  );
}
