import NavBar from './components/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Login from './screens/Login';
import Footer from './components/Footer';
// import MyBlogs from './screens/MyBlog';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/Login'>
              <Login/>
            </Route>
            {/* <Route exact path='/MyBlogs'>
              <MyBlogs/>
            </Route> */}
            <Route path='/Create'>
              <Create/>
            </Route>
            <Route path='/Blogs/:id'>
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
