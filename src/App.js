import {Route,Routes } from "react-router-dom";
import {Home} from "./js/Home";
import {Blog_Sorting} from "./js/Blog_Sorting";
import {NotFound} from "./js/404";
import ScrollToTop from "./js/helper/ScrollToTop";
import { Blog } from "./asset/blog/new";
import { Blog1 } from "./asset/blog/blog1";
import { Blog2 } from "./asset/blog/blog2";
function App() {
  return (
  <> 
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Blog_Sorting" element={<Blog_Sorting />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog1" element={<Blog1 />}/>
        <Route path="/blog2" element={<Blog2 />}/>
        <Route element={<NotFound />}/>
      </Routes> 
      </ScrollToTop>
      </>
  );
}

export default App;
