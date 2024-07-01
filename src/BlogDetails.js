// import { useHistory, useParams } from "react-router-dom";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
// import useFetch from "./UseFetch";
import { useEffect, useState } from "react";

const BlogDetails = () => {
    const { id } = useParams() ;
    // const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const [displayData,changeData]=useState([]);
    const loadData= async ()=>{
        let response=await fetch("http://localhost:5000/api/blogs/"+id,{
          method:"POST",
          headers:{ 
              'Content-Type':'application/json'
            },
        });
    
        response= await response.json();
        // console.log(response[0]);
        changeData(()=>response[0]);
        // here as we are changing the displaydata to the first element of the array given to us so we always have to get the response as an array only.
    }
    useEffect(()=>{
        loadData();
    })
    const navigate = useNavigate();

    const handleClick = () => {

        fetch('http://localhost:8000/blogs/' + displayData.id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/');
        })

    }

    return ( 
        <div className="blog-details">
            {/* {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>} */}
            {displayData &&(
                <article>
                    <h2> { displayData.title } </h2>
                    <p> Written by <span className="author-name">{ displayData.author }</span></p>
                    <div> { displayData.body } </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails; 