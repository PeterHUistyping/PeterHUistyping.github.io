/* All rights reserved. 2022-2024 (c) Peter HU */


import { HashLink } from 'react-router-hash-link';
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"
function popup() {
    alert("What I really enjoy is the beauty of science and how it can be applied in nearly all fields of life.\nI am open to new fields of area and enjoy exploring unknown features.\n")
  }
export function AboutMe(){
    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />
     
     <br/><br/>
 
    
    <center>
    <large>  <i onClick={() => {popup()}}>About Me 👇</i></large> 
    </center>
    <div class="aboutMeContainer">
        Strong background and interest in Visual Computing (Graphics, Vision) with ML / System related fields.  <br/>
        
        &emsp; &nbsp;&nbsp;
        <b>Conducted long-term collaborative research in academic and industry lab</b> on  <br/>
        - Visual Computing (Graphics, Vision, Image Processing) + AI/ML; <br/>

        <center>
                 {/* 1568 1340 = 1.17 */}
        <img height="300" src="/asset/photo/Logo/Relationship_CV.png" alt="CV" />
        </center>

        - System-related (Scheduling, CPU), <br/>

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

