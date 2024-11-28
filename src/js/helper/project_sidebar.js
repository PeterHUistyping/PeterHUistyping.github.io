/* All rights reserved. 2022-2024 (c) Peter HU */


import { NavLink } from "react-router-dom"; 
import { HashLink } from 'react-router-hash-link';
import React from "react";
import { useState, useRef} from "react";


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
            <HashLink id="sidebar_academic" to="/research/#academicResearch"><i>&nbsp;&nbsp;&nbsp;academic</i></HashLink> 
            <HashLink id="sidebar_publication" to="/research/#pub"><i>&nbsp;&nbsp;&nbsp;publication</i></HashLink> 
            <HashLink id="sidebar_talk" to="/research/#talk"><i>&nbsp;&nbsp;&nbsp;talk</i></HashLink>
            <HashLink id="sidebar_industry" to="/research/#industryResearch"><i>&nbsp;&nbsp;&nbsp;industry</i></HashLink> 
        </>
    )
}


export default function Sidebar_Project(){
    const [show, setShow] = useState(true);
    return (
    <div id="nav" class="sidebar_main">
        {/* Navigation  */}
        <button className={`button ${show ? "button_sitemapon" : "button_sitemapoff"}`}  onClick={() => {setShow(! show)}}>{show ? '☰sitemap' : '📦'}</button>
        
        {/* &nbsp; ☰<i>Sitemap</i>☰  */}
        {/* <br></br> */}
        <br></br>
        {show && 
        <nav>
           <NavLink id="sidebar_home" exact activeClassName='is-active' to="/">▸HOME</NavLink>  
           {/* <center>
                    <HashLink id="sidebar_system"  to="/aboutme">&nbsp;AboutMe</HashLink> </center> */}
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