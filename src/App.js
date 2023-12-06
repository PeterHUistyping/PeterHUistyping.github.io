import {Route,Routes, useLocation} from "react-router-dom";
import {Home} from "./js/Home";
import {Project} from "./js/Project";
import {Experience} from "./js/Experience";
import {AboutMe} from "./js/AboutMe";

import {Award} from "./js/Award";
import {Project_Others} from "./js/Project_Others";
import {Blog_Sorting} from "./js/Blog_Sorting";
import {NotFound} from "./js/404";
import ScrollToTop from "./js/helper/ScrollToTop";
import { Blog } from "./asset/blog/markdownReader";
import { Blog4 } from "./asset/blog/blog4";
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
          <Route path="/blog" element={<Blog id="0" name="Test" />}/>
          <Route path="/blog1" element={<Blog id="1" name="TypingGame" />}/>
          <Route path="/blog2" element={<Blog id="2" name="Supermarket" />}/>
          <Route path="/blog3" element={<Blog id="3" name="CGMIT" />}/>
          <Route path="/blog4" element={<Blog4 />}/>
          <Route path="/blog5" element={<Blog id="5" name="BlogUpdate" />}/>
          <Route path="/blog6" element={<Blog id="6" name="Compression" />}/>
          <Route path="/blog7" element={<Blog id="7" name="DSMercuria" />}/>
          <Route path="/blog8" element={<Blog id="8" name="MLRD" />}/>
          <Route path="/blog9" element={<Blog id="9" name="Priest-Beneath" />}/>
          <Route path="/ref" element={<Blogref />}/>
          <Route path="/award" element={<Award />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/aboutme" element={<AboutMe />}/>

          
          <Route path="/project_others" element={<Project_Others />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes> 
      </AnimatePresence>
      </ScrollToTop>
      </>
  );
}

export default App;
