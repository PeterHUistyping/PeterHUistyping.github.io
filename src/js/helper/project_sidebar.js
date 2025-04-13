/* All rights reserved. 2022-2025 (c) Peter HU */


import { NavLink } from "react-router-dom"; 
import { HashLink } from 'react-router-hash-link';
import React from "react";
import { useState, useEffect} from "react";


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

    // Set initial state based on window width
    useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 800) {
        setShow(false); // Collapse sidebar on smaller screens
      } else {
        setShow(true); // Expand sidebar on larger screens
      }
    };
    // Call handleResize to set initial state
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
    <div id="nav" class="sidebar_main">
        {/* Navigation  */}
        <button className={`button ${show ? "button_sitemapon" : "button_sitemapoff"}`}  
        onClick={() => {setShow(! show)}}
        onMouseOver={(e) => e.currentTarget.style.border = "3px solid #A9A9A9"}
        onMouseOut={(e) => e.currentTarget.style.border = ""}
        >
            {show ? '☰sitemap' : <span style={{ fontSize: '10px' }}>▸map</span>}
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
            <NavLink id="sidebar_award" exact activeClassName='is-active' to="/award">▸Awards</NavLink>  
            <NavLink id="sidebar_project" exact activeClassName='is-active'  to="/project">▸Projects</NavLink> 
            <SidebarProject/>
            {/* <small><NavLink id="sidebar_exp" exact activeClassName='is-active' to="/experience">▸EXPERIENCE</NavLink></small>  */}
        </nav> 
        }
    </div>     
    )
}