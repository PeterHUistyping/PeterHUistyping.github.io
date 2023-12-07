import { NavLink } from "react-router-dom"; 
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
     
     <br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/>
 
    
    <center>
    <large>  <i onClick={() => {popup()}}>About Me 👇</i></large> 
    </center>
    <div class="aboutMeContainer">
        Strong background and interest in Math, Algorithms and System related fields. <br/>
        
        &emsp; &nbsp;&nbsp;
        <b>Conducted long-term System-related (Graphics/GPU, CPU, etc) research with AI/ML in industry lab</b>, ranging from high-level architecture/algorithm design to low-level implementation. Theoretical expertise (literature, brainstorm), coupled with practical skills (the key developer for the simulation framework), comprise my areas of research proficiency. <br/>

        &emsp; &nbsp;&nbsp;
        <b>Enjoy most of the elegant and crazy ideas raised in Computer Science</b>, mathematic principles as well as engineering techniques. It includes courses from Cambridge, MIT/CMU OpenCourseWare.   <br/>

        &emsp; &nbsp;&nbsp;
        <b>Past group competition experience in compression</b> implemented in C and C++, where new ideas on LZSS and complete pipeline come up from our team. It achieves a lossless compression with overall better compression rate and processing speed compared with google Draco for the given 3D graphics data input. <br/>

        &emsp; &nbsp;&nbsp;
        Exploring areas in Computer System, Graphic and Machine Learning-Data Science, etc and open to new opportunities and fields.       <br/>
        <br/><br/> 
        <center> 
        <div class ="announcement">
            👈 Please click the left Sidebar for relevant sections. <br/>
            🧑‍💻<br/> 
        <i> 
        <NavLink to="/award">AWARD</NavLink> , <br/>
        <NavLink to="/project">PROJECT</NavLink>, <br/>
        <NavLink to="/experience">EXPERIENCE</NavLink>. <br/>
        </i>
        </div>
        <br/><br/> 

         <NavLink to="/">Home</NavLink> </center>
    </div>



    
    <br/><br/><br/><br/><br/>

    <Index_Footer />
    </motion.div>)
}

