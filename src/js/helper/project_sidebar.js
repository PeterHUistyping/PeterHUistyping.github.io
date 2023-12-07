import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
 
export default function Sidebar_Project(){
    return (
    <div id="nav" class="sidebar_main">
        Navigation ☰<i>Sidebar</i>☰ <br></br>
        <nav>
           <NavLink id="sidebar_home" exact activeClassName='is-active' to="/">▸HOME</NavLink>  
           {/* <center>
                    <a id="sidebar_system"  to="/aboutme">&nbsp;AboutMe</a> </center> */}
           <NavLink id="sidebar_award" exact activeClassName='is-active' to="/award">▸AWARD</NavLink>  
            <NavLink id="sidebar_project" exact activeClassName='is-active'  to="/project">▸PROJECT</NavLink> 
                <center>
                    <NavLink id="sidebar_system"  to="/project#Computer_System">&nbsp;&nbsp;&nbsp;System</NavLink> </center>
                <center>
                    <NavLink id="sidebar_ml"  to="/project#Machine_Learning">&nbsp;&nbsp;&nbsp;ML</NavLink> </center>
                <center>
                    <NavLink id="sidebar_others" exact activeClassName='is-active' to="/project_others">&nbsp;&nbsp;&nbsp;Others</NavLink></center>  
            <small><NavLink id="sidebar_exp" exact activeClassName='is-active' to="/experience">▸EXPERIENCE</NavLink></small> 
        </nav> 
    </div>     
    )
}