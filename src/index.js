/* All rights reserved. 2022-2025 (c) Peter HU */


import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route,Routes, useLocation,HashRouter as Router} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./js/helper/ScrollToTop";

// import {Home} from "./js/Home";
// import {Contact} from "./js/Contact";
// import {PhotoDisplay} from "./js/PhotoDisplay";
// import {Project} from "./js/Project";
// import {Experience} from "./js/Experience";
// import {AboutMe} from "./js/AboutMe";
// import {Research} from "./js/Research";

// import {Award} from "./js/Award";
// import {Project_Others} from "./js/Project_Others";
// import {Blog_Sorting} from "./js/Blog_Sorting";
// import {NotFound} from "./js/404";
// import { Blog } from "./asset/blog/markdownReader";
// import { Blog4 } from "./asset/blog/blog4";
// import { Blogref} from "./asset/blog/Ref/blogRef"
import Loading from "./js/Loading";  

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = lazy(() => import('./js/Home'));  
const PhotoDisplay = lazy(() => import('./js/PhotoDisplay'));  
const Contact = lazy(() => import('./js/Contact'));
const Project = lazy(() => import('./js/Project'));  
const Experience = lazy(() => import('./js/Experience')); 
const AboutMe = lazy(() => import('./js/AboutMe'));  
const Research = lazy(() => import('./js/Research')); 
const Award = lazy(() => import('./js/Award')); 
const Project_Others = lazy(() => import('./js/Project_Others'));  
const Blog_Sorting = lazy(() => import('./js/Blog_Sorting'));  
const NotFound = lazy(() => import('./js/404'));  
const Blog4 = lazy(() => import('./asset/blog/blog4')); 
const Blogref = lazy(() => import('./asset/blog/Ref/blogRef'));  
const Blog = lazy(() => import('./asset/blog/markdownReader'));  

function App() {
    const location = useLocation();
    return (
    <> 
        <ScrollToTop>
        <Suspense fallback={<Loading />}>
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />}/>
            <Route path="/PhotoDisplay" element={<PhotoDisplay />}/>
            <Route path="/award" element={<Award />}/>
            <Route path="/research" element={<Research />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/project/others" element={<Project_Others />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/aboutme" element={<AboutMe />}/>
            <Route path="/contact" element={<Contact />}/>

            <Route path="/Blog_Sorting" element={<Blog_Sorting />}/>
            <Route path="/ref" element={<Blogref />}/>
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
            <Route path="/blog10" element={<Blog id="10" name="CVStanford" />}/>
            <Route path="/blog11" element={<Blog id="11" name="ARBlockTower" />}/>
        
            <Route path='/*' element={<NotFound />}/>
          </Routes> 
        </AnimatePresence>
        </Suspense>
        </ScrollToTop>
        </>
    );
  }

  
root.render(
  
    <Router hashType="noslash"> 
        <App />
    </Router>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
