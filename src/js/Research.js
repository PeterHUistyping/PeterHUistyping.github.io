/* All rights reserved. 2022-2024 (c) Peter HU */

import Pub_table from "./Pub_Table";
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"
import React, {useState } from "react";
import {ExperienceContents} from "./Experience";
 
export function Research(){
    const [show , setShow] = useState(false);
    const [show2 , setShow2] = useState(false);
    const [show3 , setShow3] = useState(false);
  
    const handleOnClick = () => {
          setShow(! show);
    }
    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />
     
    <h2 id="research"><b>RESEARCH EXPERIENCE</b></h2>
    
    <div class="content">
        <>
        {/* Honors_and_awards */}
        <h2 id="academicResearch"><b>Academic Research</b></h2>
         <i>May, 2024 - Present</i> | <a href="https://core-lab.io/">Core Lab</a>, <a href="https://www.cst.cam.ac.uk/">Department of Computer Science and Technology</a>, &nbsp; <a href="https://www.cam.ac.uk/"><img width="27" height="24" src="./asset/photo/Logo/Cam.png" alt="Cambridge" /></a> <br/>
        I am privileged to undertake some interesting academic research explorations @<a href="https://core-lab.io/">Core Lab</a>.    <br/>
        {/* University of Cambridge */}
        
        My undergraduate research is supervised by <a href="https://chenliang-zhou.github.io/">Chenliang Zhou</a> on generative machine learning and Dr. <a href="https://asztr.github.io/">Alejandro Sztrajman</a> on real-world materials; Dr. <a href="https://www.cl.cam.ac.uk/~fz261/">Fangcheng Zhou</a> on Graphics and rendering.<br/>

        <br/> <br/> 
        <br/> 

        <h2 id="pub"><b>Publication</b></h2>

        <Pub_table />
        
        <br/> <br/> 
        <br/> <br/> 
        <br/> <br/> 
        
        <h2 id="industryResearch"><b>Industry Research</b></h2>
        </>
    </div>
    <ExperienceContents />
       
    <Index_Footer />
    </motion.div>)
}

