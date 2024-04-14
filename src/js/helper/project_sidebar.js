/* All rights reserved. 2022-2024 (c) Peter HU */


import { NavLink } from "react-router-dom"; 
import { HashLink } from 'react-router-hash-link';
import React from "react";

export default function Sidebar_Project(){
    return (
    <div id="nav" class="sidebar_main">
        {/* Navigation  */}
        &nbsp; ☰<i>Sitemap</i>☰ 
        <br></br>
        <br></br>
        <nav>
           <NavLink id="sidebar_home" exact activeClassName='is-active' to="/">▸HOME</NavLink>  
           {/* <center>
                    <HashLink id="sidebar_system"  to="/aboutme">&nbsp;AboutMe</HashLink> </center> */}
           <NavLink id="sidebar_award" exact activeClassName='is-active' to="/award">▸AWARD</NavLink>  
            <NavLink id="sidebar_project" exact activeClassName='is-active'  to="/project">▸PROJECT</NavLink> 
                <center>
                    <HashLink id="sidebar_visual"  to="/project/#Visual_Computing">&nbsp;&nbsp;&nbsp;Visual</HashLink> 
                </center>
                <center>
                    <HashLink id="sidebar_ml"  to="/project/#Machine_Learning">&nbsp;&nbsp;&nbsp;ML</HashLink> 
                </center>
                <center>
                    <HashLink id="sidebar_system"  to="/project/#Computer_System">&nbsp;&nbsp;&nbsp;System</HashLink> 
                </center>
                <center>
                    <NavLink id="sidebar_others" exact activeClassName='is-active' to="/project/others">&nbsp;&nbsp;&nbsp;Others</NavLink></center>  
            <small><NavLink id="sidebar_exp" exact activeClassName='is-active' to="/experience">▸EXPERIENCE</NavLink></small> 
        </nav> 
    </div>     
    )
}