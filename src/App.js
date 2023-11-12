import {Route,Routes, useLocation} from "react-router-dom";
import {Home} from "./js/Home";
import {Project} from "./js/Project";
import {Experience} from "./js/Experience";
import {Award} from "./js/Award";
import {Project_Others} from "./js/Project_Others";
import {Blog_Sorting} from "./js/Blog_Sorting";
import {NotFound} from "./js/404";
import ScrollToTop from "./js/helper/ScrollToTop";
import { Blog } from "./asset/blog/new";
import { Blog1 } from "./asset/blog/blog1";
import { Blog2 } from "./asset/blog/blog2";
import { Blog3 } from "./asset/blog/blog3";
import { Blog4 } from "./asset/blog/blog4";
import { Blog5 } from "./asset/blog/blog5";
import { Blog6 } from "./asset/blog/blog6";
import { Blog7 } from "./asset/blog/blog7";
import { Blog8 } from "./asset/blog/blog8";
import { Blog9 } from "./asset/blog/blog9";
import { Blogref} from "./asset/blog/Ref/blogRef"
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
  <> 
      <ScrollToTop>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />}/>
          <Route path="/Blog_Sorting" element={<Blog_Sorting />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog1" element={<Blog1 />}/>
          <Route path="/blog2" element={<Blog2 />}/>
          <Route path="/blog3" element={<Blog3 />}/>
          <Route path="/blog4" element={<Blog4 />}/>
          <Route path="/blog5" element={<Blog5 />}/>
          <Route path="/blog6" element={<Blog6 />}/> 
          <Route path="/blog7" element={<Blog7 />}/>
          <Route path="/blog8" element={<Blog8 />}/>
          <Route path="/blog9" element={<Blog9 />}/>
          <Route path="/ref" element={<Blogref />}/>
          <Route path="/award" element={<Award />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/experience" element={<Experience />}/>
          
          <Route path="/project_others" element={<Project_Others />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes> 
      </AnimatePresence>
      </ScrollToTop>
      </>
  );
}

export default App;
