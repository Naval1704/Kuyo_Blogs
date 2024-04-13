import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Kuyo Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* <Link to="/myBlogs">My Blogs</Link> */}
                {/* <Link to="/contact">Contact Us</Link> */}
                <Link to="/about">About Us</Link>
                <Link to="/Create" style={{
                    color: "white",
                    backgroundColor: "#50b2df",
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    padding:'10px',
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;