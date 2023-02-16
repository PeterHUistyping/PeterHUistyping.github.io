import {Route,Routes} from "react-router-dom"
import {Home} from "./js/Home"
import {Blog_Sorting} from "./js/Blog_Sorting"

function App() {
  return (
  <>
    <nav>
    <a href="/Blog_Sorting">blog</a>
    <a href="/asset/blog/blog8.html"><center>Blog8</center></a>
    </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Blog_Sorting" element={<Blog_Sorting />}/>
      </Routes>
      </>
  );
}

export default App;
