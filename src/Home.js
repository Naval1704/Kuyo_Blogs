import BlogList from "./BlogList";
// import useFetch from "./useFetch";
import React from "react";

export default function Home() {
  // react function should not be defined as an async function as it gives a promise of returning a function and not the function directly
  // const {data: blogs, isPending, error,} = useFetch("http://localhost:8000/blogs");

  const [displayData,changeData]=React.useState([]);

  const loadData= async ()=>{
    let response=await fetch("http://localhost:5000/api/blogs",{
      method:"POST",
      headers:{ 
          'Content-Type':'application/json'
        },
    });

    response= await response.json();
    // console.log(response[0]);
    changeData(()=>response[0]);
  }

  React.useEffect(()=>{
    loadData();
  },[]);
  loadData();

  return (
    <div className="home">
      {/* {error && <div>{error}</div>}
      {isPending && <div>Loading......</div>} */}
      {displayData && <BlogList blogs={displayData} title="All Blogs!" />}
      {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'naval')} title = "Naval's Blogs!" />             */}
    </div>
  );
}
