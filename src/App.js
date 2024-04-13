import NavBar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './create';
import BlogDetails from './BlogDetails';
// import MyBlog from './myBlogs';

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
            {/* <Route path='myBlogs'>
              <MyBlog/>
            </Route> */}
            <Route path='/Create'>
              <Create/>
            </Route>
            <Route path='/Blogs/:id'>
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
