import { useState } from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaThumbsDown, FaBookmark } from "react-icons/fa";

const BlogList = ({ blogs, title }) => {
  const [blogInteractions, setBlogInteractions] = useState({});

  const handleLikeDislike = (blogId, type) => {
    const currentInteractions = { ...blogInteractions };

    if (!currentInteractions[blogId]) {
      currentInteractions[blogId] = {
        likes: 0,
        dislikes: 0,
        bookmarks: false,
      };
    }

    switch (type) {
      case "like":
        currentInteractions[blogId].likes++;
        if (currentInteractions[blogId].dislikes > 0) {
            currentInteractions[blogId].dislikes--;
          }
        break;
      case "dislike":
        currentInteractions[blogId].dislikes++;
        if (currentInteractions[blogId].likes > 0) {
            currentInteractions[blogId].likes--;
          }
        break;
      case "bookmark":
        currentInteractions[blogId].bookmarks =
          !currentInteractions[blogId].bookmarks;
        break;
      default:
        break;
    }

    setBlogInteractions(currentInteractions);
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>
              Written by <span className="author-name">{blog.author}</span>
            </p>
          </Link>
          <div className="blog-interactions">
            <div className="likes-dislikes">
              <div>
                <FaThumbsUp
                  onClick={() => handleLikeDislike(blog.id, "like")}
                  className={
                    blogInteractions[blog.id]?.likes > 0 ? "liked" : ""
                  }
                />
                <span className="interaction-count">
                  {blogInteractions[blog.id]?.likes || 0}
                </span>
              </div>

              <div>
                <FaThumbsDown
                  onClick={() => handleLikeDislike(blog.id, "dislike")}
                  className={
                    blogInteractions[blog.id]?.dislikes > 0 ? "disliked" : ""
                  }
                />
                <span className="interaction-count">
                  {blogInteractions[blog.id]?.dislikes || 0}
                </span>
              </div>
            </div>
            <div className="bookmark">
              <FaBookmark
                onClick={() => handleLikeDislike(blog.id, "bookmark")}
                className={
                  blogInteractions[blog.id]?.bookmarks ? "bookmarked" : ""
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
