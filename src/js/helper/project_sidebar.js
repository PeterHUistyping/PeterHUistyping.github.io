/* All rights reserved. 2022-2025 (c) Peter HU */


import { NavLink } from "react-router-dom"; 
import { HashLink } from 'react-router-hash-link';
import React from "react";
import { useState, useEffect} from "react";
import { useLocation} from 'react-router-dom';

function SidebarProject(){
    // check if the current page is project
    if(window.location.href.indexOf("project") === -1){
        return null;
    }
    else
    return (
        <>
            <HashLink id="sidebar_visual"  to="/project/#Visual_Computing">&nbsp;&nbsp;&nbsp;<i>visual</i></HashLink> 
            <HashLink id="sidebar_ml"  to="/project/#Machine_Learning">&nbsp;&nbsp;&nbsp;<i>AI/ML</i></HashLink> 
            <HashLink id="sidebar_system"  to="/project/#Computer_System">&nbsp;&nbsp;&nbsp;<i>system</i></HashLink> 
            <NavLink id="sidebar_others" exact activeClassName='is-active' to="/project/others">&nbsp;&nbsp;&nbsp;<i>others</i></NavLink>
        </>
    )
}


function SidebarResearch(){
    // check if the current page is research
    if(window.location.href.indexOf("research") === -1){
        return null;
    }
    else
    return (
        <>
            <HashLink id="sidebar_academia" to="/research/#academicResearch"><i>&nbsp;&nbsp;&nbsp;academia</i></HashLink> 
            <HashLink id="sidebar_publication" to="/research/#pub"><i>&nbsp;&nbsp;&nbsp;publication</i></HashLink> 
            <HashLink id="sidebar_talk" to="/research/#talk"><i>&nbsp;&nbsp;&nbsp;talk</i></HashLink>
            <HashLink id="sidebar_industry" to="/research/#industryResearch"><i>&nbsp;&nbsp;&nbsp;industry</i></HashLink> 
        </>
    )
}


export default function Sidebar_Project(){
    const [show, setShow] = useState(true);
    const [buttonText, setButtonText] = useState('☰sitemap');

    // Set initial state based on window width
    useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 800) {
        setShow(false); // Collapse sidebar on smaller screens
        setButtonText(<span style={{ fontSize: '10px' }}>▸map</span>); // Set button text for collapsed state
      } else {
        setShow(true); // Expand sidebar on larger screens
        setButtonText('☰sitemap'); // Set button text for collapsed state
      }
    };
    // Call handleResize to set initial state
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Previous and next buttons
    const location = useLocation();
  
    // // Define the routes in the order they should be navigated
    const routes = ["/", "/aboutme", "/research",  "/project", "/award", "/experience"];
    
    // // Function to get the next route based on the current location
    const getNextRoute = (currentPath) => {
      const currentIndex = routes.indexOf(currentPath);
      if (currentIndex === -1) {
        return "/"; // Return "/" if not in the array
      }
      // If we're at the last route, go back to the first route
      return routes[(currentIndex + 1) % routes.length];
    };

    const getPrevRoute = (currentPath) => {
        const currentIndex = routes.indexOf(currentPath);
        if (currentIndex === -1) {
            return "/"; // Return "/" if not in the array
        }
        // If we're at the first route, go to the last route
        return routes[(currentIndex - 1 + routes.length) % routes.length];
    }
    // // Get the route based on the current path
    const prevRoute = getPrevRoute(location.pathname);
    const nextRoute = getNextRoute(location.pathname);

    return (
    <div id="nav" class="sidebar_main">
        {/* Navigation  */}
        {show && 
        <nav>
            <span style={{ flex: 1, textAlign: "left" }}>
                <NavLink to={prevRoute}>◁Prev</NavLink>
            </span>
            <span style={{ flex: 1, textAlign: "right" }}>
                <NavLink to={nextRoute}>➤Next</NavLink>
            </span>
        </nav> 
        }
        {!show && 
        <nav>
            <NavLink to={prevRoute}>◁</NavLink>
            <NavLink to={nextRoute}>➤</NavLink>
        </nav> 
        }
        <button className={`button ${show ? "button_sitemapon" : "button_sitemapoff"}`}  
        onClick={() => {setShow(! show)}}
        onMouseOver={(e) => {e.currentTarget.style.border = "3px solid #A9A9A9"; setButtonText(show ? '☰CLOSE': '▸EXPAND');}}
        onMouseOut={(e) => {e.currentTarget.style.border = ""; setButtonText(show ? '☰sitemap' : <span style={{ fontSize: '10px' }}>▸map</span>);}}
        >
            {buttonText}
            {/* {show ? '☰sitemap' : <span style={{ fontSize: '10px' }}>▸map</span>} */}
        </button>
        
        {/* &nbsp; ☰<i>Sitemap</i>☰  */}
        {/* <br></br> */}
        <br></br>
        {show && 
        <nav>
            <NavLink id="sidebar_home" exact activeClassName='is-active' to="/">▸HOME</NavLink>  
            <NavLink id="sidebar_bio" exact activeClassName='is-active' to="/aboutme">▸Bio.</NavLink> 
            <NavLink id="sidebar_pub" exact activeClassName='is-active' to="/research">▸Research</NavLink>
                <SidebarResearch/>  
            <NavLink id="sidebar_project" exact activeClassName='is-active'  to="/project">▸Projects</NavLink> 
                <SidebarProject/>
            <NavLink id="sidebar_award" exact activeClassName='is-active' to="/award">▸Awards</NavLink>  
            <small><NavLink id="sidebar_exp" exact activeClassName='is-active' to="/experience">▸Experience</NavLink></small> 
        </nav> 
        }
    </div>     
    )
}