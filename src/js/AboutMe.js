/* All rights reserved. 2022-2025 (c) Peter HU */

import { useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"
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
    <large>  <i onClick={() => {popup()}}>About Me 👇</i></large> 
    </center>
    <div class="aboutMeContainer">
    
        Strong background and interest in <font color="green">Visual Computing (Graphics, Vision)</font> with <font color="#3824BD">ML</font> / <font color='#8D6F64'>System</font>.  <br/>
        
        &emsp; &nbsp;&nbsp;
        <b>Conducted long-term collaborative research in academic and industry lab</b> on  <br/>
        - <font color="green">Visual Computing (Graphics, Vision, Image Processing)</font> + <font color="#3824BD">AI/ML</font>, <br/>

        &emsp; &nbsp;&nbsp;
        covering ray tracing, appearance modeling (materials, BRDF), hair modeling, geometry representations, etc. The tasks taken include rendering, synthesis, reconstruction, classification, etc. In the past few years, I have developed or maintained several renderers in multiple languages (C++, Python, GLSL). I also present multiple knowledge sharing sessions about my research topics both internally during internship and in university. <br/> 
        <center>
        {/* 1568 1340 = 1.17 */}
        <img height="200vw" src="/asset/photo/Logo/Relationship_CV.png" alt="CV" />
        </center>

        - <font color='#8D6F64'>System</font>-related (Scheduling, CPU), <br/>

        &emsp; &nbsp;&nbsp;
        ranging from high-level architecture design to low-level algorithm implementation. 
        Theoretical expertise (literature, brainstorm), coupled with practical skills (the key developer for the simulation framework), comprise my areas of research proficiency. <br/>


        &emsp; &nbsp;&nbsp;
        <b>Enjoy most of the elegant and crazy ideas raised in Computer Science</b>, mathematic principles as well as engineering techniques. It includes courses from Cambridge, MIT/CMU OpenCourseWare.   <br/>


        &emsp; &nbsp;&nbsp;
        <b>Past group competition experience in compression</b> implemented in C and C++, where new ideas on LZSS and complete pipeline come up from our team. It achieves a lossless compression with overall better compression rate and processing speed compared with google Draco for the given 3D graphics data input. <br/>


        &emsp; &nbsp;&nbsp;
        Exploring areas in Graphics + AI/ML with GPU, CV / System-related topics, etc and open to new opportunities and fields.       <br/>
        <center> 
        <div class ="announcement">
            👈 Please click the left Sidebar for relevant sections. <br/>
        <HashLink to="/">🏠 Home</HashLink> <br/>
        <HashLink to="/research"><i>Research💭</i></HashLink> <br/>
        <HashLink to="/award"><i>Awards🥇</i></HashLink> <br/>
        <HashLink to="/project"><i>Projects🧑‍💻</i></HashLink><br/>
        {/* <HashLink to="/experience"><i>Experience</i></HashLink><br/> */}
        </div>
         </center>
    </div>

    <Index_Footer />
    </motion.div>)
}

