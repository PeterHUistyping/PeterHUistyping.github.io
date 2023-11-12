 import Index_Footer from "./helper/index_footer";
 import Index_Top from "./helper/index_top";
 import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link';
import Sidebar_Project from "./helper/project_sidebar"
import React, { useEffect, useState } from "react";
 function popup() {
  alert("What I really enjoy is the beauty of science and how it can be applied in nearly all fields of life.\nI am open to new fields of area and enjoy exploring unknown features.\n")
}

function Education(){
  const [show , setShow] = useState(false);
  const [show4 , setShow4] = useState(false);

  const handleOnClick = () => {
        setShow(! show4);
  }
 
  return(
    <>
    <center>
    <large><i>EDUCATION</i></large>
    </center>
    <img width="27" height="24" src="./asset/photo/Logo/Cam.png" alt="Cambridge" /> 
    <b> University of Cambridge </b><i> <br />
        Undergraduate<br />
        2022.10 - 2025.06</i><br />
        Computer Science<br />
        Jardine fully-funded Scholarship.<br />

    <img width="24" height="24" src="./asset/photo/Logo/xmu.png" alt="XMU"/>
    <b> Xiamen University </b><i> <br />
        First year undergraduate<br /> 
        2021.09 - 2022.06</i> <br />
        Software Engineering<br />
        GPA: 3.91 / 4.0 (the first term)<br /> 88/100 (whole year)<br />
        Class Rep, ACM Team.<br />

    <b>Nanyang Model High School </b> <br />
        <i> 2018.09 - 2021.06</i><br />
        {/* High School Diploma<br /> */}
        Physics Rep, research project leader, 
        awarded ShuPing Scholarship twice.<br />
        
    <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i>
    &emsp;&emsp;
    
    <button onClick={() => {setShow4(! show4)}}>Show Details</button>
    {
        show4 &&
        <>
        <br/>
        <img width="671" height="386 " src="./asset/photo/Profile/Cam.png" alt="Cam" />
        <br/>
        <img width="671" height="318 " src="./asset/photo/Profile/XMU.png" alt="XMU" />
        <br/>
        </>
    }
    <br/>
    </>
  )
}

function About_me(){
  return (
    <>
    <center>
    <large> <large><i onClick={() => {popup()}}>About Me 👇</i></large></large>
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

  </div>
    </>
  )
}

function Interest_extra(){
  return(
    <>
  <br/>  <br/> <large><i>INTEREST AND EXTRACURRICULUM</i></large> <br/>

  Music, Swimming, Gym, Helping others etc.  <br />  
  Society: Ethics in Mathematics<br />
  <i>Economics Related Topics: </i> Macro & Micro, Money Banking<br />
    </>
  )
}

function Skill(){
  return (
    <>
      <br/> <center><large><i  id="skills">SKILLS</i></large>  <br/>

      <i>Please refer to <a href="./asset/doc/CV_PeterHU.pdf">CV</a>.</i></center> 
  </>
  )
}

function Sidebar_Notice(){
    return(
  <div class ="announcement">
    👈 Please Click the left Sidebar for relevant <i>Projects, Experience, Awards</i>.
  </div>
    )
}
function Detail(){  
  var w = window.innerWidth;
  // mobile
  if (w<800)
  return(
    <>
    <About_me />
    <Education />
    <center>
        <Sidebar_Notice />
        <Skill />
          <Interest_extra />
        {/* <embed src="asset/doc/CV_PeterHU.pdf"  width="800px" height="600px" /> */}
    </center>
    </>
    )
    else // PC
    return (
        <div class="container_main">
        <div class ="left-panel">
            <Education />
            <Skill />
            
        </div>
        <div class ="right-panel">
            <About_me />
            <center>
            <Sidebar_Notice />
            <Interest_extra />
            </center>
        </div>
        </div>
      )
}

export function Home() { 
  return (
    <motion.div> 
    <Index_Top/> 
    <div>
      <Profile/>
      <Sidebar_Project />
      <div class="content">
        <Detail />
      </div>
      <Index_Footer />
    </div>
    </motion.div>
  );
}

function Profile(){
  return(
      <table class="table_profile">
      <tbody>
          <tr>
          <Profile1/>
          <Profile2/>
          </tr>
      </tbody>
  </table>
  )
}
function Profile1(){
  return(
      <td width="280" rowspan="1" height="200">
          <div> 
                  <img class="img_profile" src="./asset/photo/Peter_Hu.jpg" alt="Profile Photo"/>
          </div>
      </td>
    
  )
}

function Profile2(){
  return(
      <td width="280" text-align="center">
  <h1 id="contact"><i>Peter</i> HU </h1>
   
  <p> University of Cambridge <br/>Computer Science <br/>Part IB</p> <br/><strong>Contact
      Details</strong><br/>
  Email: zh369@cam.ac.uk <br/> Phone: (+44) 07990 719841
  <br/><a href="./asset/doc/CV_PeterHU.pdf">CV</a> | <a
      href="https://www.linkedin.com/in/peterhu2022/">LinkedIn</a> | <a
      href="https://github.com/PeterHUistyping">Github</a> |
       More <br/>
</td>
    
  )
 
}