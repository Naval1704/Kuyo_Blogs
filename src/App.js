import NavBar from './components/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from "./create.js"
import BlogDetails from './BlogDetails';
import Login from './screens/Login';
import Footer from './components/Footer';
import SignUp from './screens/Signup';
// import MyBlogs from './screens/MyBlog';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/Login' element={<Login/>} />
            <Route exact path='/create-account' element={<SignUp/>} />
            <Route exact path='/Create' element={<Create/>} />
            <Route exact path='/Blogs/:id' element={<BlogDetails/>} />
            {/* <Route exact path='/MyBlogs' element={<MyBlogs/>} /> */}
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
