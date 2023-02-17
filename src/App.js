import {Route,Routes } from "react-router-dom";
import {Home} from "./js/Home";
import {Blog_Sorting} from "./js/Blog_Sorting";
import {NotFound} from "./js/404";
import ScrollToTop from "./js/helper/ScrollToTop";
import { Blog } from "./js/blog/new";
import { Blog1 } from "./js/blog/blog1";
function App() {
  return (
  <> 
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Blog_Sorting" element={<Blog_Sorting />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog1" element={<Blog1 />}/>
        <Route element={<NotFound />}/>
      </Routes> 
      </ScrollToTop>
      </>
  );
}

export default App;
