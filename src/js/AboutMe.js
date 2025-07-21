/* All rights reserved. 2022-2025 (c) Peter HU */

import { useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"
import {Education, Skill, Interest_extra} from "./EduSkill"


function popup() {
    alert("What I really enjoy is the beauty of science and how it can be applied in nearly all fields of life.\nI am open to new fields of area and enjoy exploring unknown features.\n")
  }


export function AboutMe(){
    useEffect(() => {
        document.title = 'Biography - Peter HU';
        }, []);

    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />
     
     <br/><br/>
 
    
    <center>
        <large onClick={() => {popup()}}><i >About</i> Me 👇</large> 
    </center>
    <div class="aboutMeContainer">
    
        {/* Strong background and interest in <font color="green">Visual Computing (Graphics, Vision)</font> with <font color="#3824BD">ML</font> / <font color='#8D6F64'>System</font>.  <br/> */}
      
        {/* &emsp; &nbsp;&nbsp; */}
    {/* <div style={{ display: 'flex', width: '100%'}}> */}
        {/* <div style={{float: "left", margin: "auto"}}> */}
        <center>
            <a href="asset/doc/Zheyuan_Peter-Hu_portfolio_slides.pdf">CV</a> | <a href="asset/doc/Zheyuan_Peter-Hu_portfolio_slides.pdf" >Portfolio slides</a> <br/>
        </center>

        <b>Engage in long-term collaborative <HashLink to="/research">academic and industry research</HashLink></b>. <br/>
        <center>
            <font color="green">Visual Computing (Graphics, Vision, Image Processing)</font> + <font color="#3824BD">AI/ML</font>
        </center>
        <div style={{width: "90%", margin: "auto"}}>
        <img style={{float: 'right'}}
            height="200vw" 
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.4)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            src="/asset/photo/Logo/Relationship_CV.png" alt="CV" />
        &emsp; &nbsp;&nbsp;
        covering rendering (ray tracing, volume rendering, neural rendering), appearance modeling (materials, BRDF), geometry modeling and representations (hair), etc. The tasks taken include synthesis, reconstruction, classification, etc. In the past few years, I have developed or maintained several renderers in multiple languages (C++, Python, GLSL). I also present multiple knowledge sharing sessions about my research topics both internally during internship and in university. 
        </div>
        <br/> 
      
        <center>
            <font color='#8D6F64'>System</font>-related (Scheduling, CPU, Security)
        </center>
        
        <div style={{width: "90%", margin: "auto"}}>
        &emsp; &nbsp;&nbsp;
        ranging from high-level architecture design to low-level algorithm implementation. 
        Theoretical expertise (literature, brainstorm), coupled with practical skills (the key developer for the simulation framework), comprise my areas of research proficiency. 
        </div>
        <br/>
        {/* &emsp; &nbsp;&nbsp; */}
        <b>Enjoy most of the elegant or crazy ideas raised in Mathematic, Technology and Science</b>. It includes courses, as well as <HashLink to="/project">projects</HashLink>, from Cambridge, MIT/CMU OpenCourseWare.   <br/>

        {/* &emsp; &nbsp;&nbsp; */}
        <b>Past <HashLink to="/blog6">group competition</HashLink> experience in compression</b> implemented in C and C++, where new ideas on LZSS and complete pipeline come up from our team. It achieves a lossless compression with overall better compression rate and processing speed compared with google Draco for the given 3D graphics data input. <br/>
    {/* </div> */}


        {/* &emsp; &nbsp;&nbsp; */}
        {/* Exploring areas in Graphics + AI/ML with GPU, CV / System-related topics, etc and open to new opportunities and fields.       <br/> */}
    {/* <div style={{ flex: 1, float: 'right', }}> */}
    {/* </div> */}

    {/* </div> */}
    
        <br/>

        <br/>

        <Education />   <br/>

        <Skill />   <br/>

        <center> 
            
        <Interest_extra /> <br/>
        
         </center>
    </div>

    <Index_Footer />
    </motion.div>)
}
