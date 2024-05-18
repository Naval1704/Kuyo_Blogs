import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <h1>Kuyo</h1>
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
          {/* <Link to="/MyBlogs">My Blogs</Link> */}
          {/* <Link to="/contact">Contact Us</Link> */}
          <Link className="home" to="/about">
            About Us
          </Link>
        </div>
        <Link
          className="aboutUs"
          to="/Create"
          style={{
            color: "white",
            backgroundColor: "#50b2df",
            borderRadius: "5px",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          New Blog
        </Link>
        <Link
          className="aboutUs"
          to="/Login"
          style={{
            color: "white",
            backgroundColor: "#50b2df",
            borderRadius: "5px",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          Login
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
