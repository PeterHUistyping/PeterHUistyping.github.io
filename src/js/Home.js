 import Index_Footer from "./helper/index_footer";
 import Index_Top from "./helper/index_top";
 import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link';
import Sidebar_Project from "./helper/project_sidebar"
import FooterCommon from "./helper/footerCommom"

import React, { useEffect, useState } from "react";


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
        <a href="https://en.wikipedia.org/wiki/Jardine_Scholarship">Jardine</a> <a href="./asset/doc/Jardine_Certificate.jpg">Scholarship</a> [fully-funded]. <br />

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
        awarded <a href="https://en.wikipedia.org/wiki/Shuping_Scholarship">ShuPing Scholarship</a> twice.<br />
        
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
    <large> <large><i>About Me 👇</i></large></large> <br/>
    
    Strong background and interest in Math, Algorithms and System related fields,  <br/>
     with past long-term research lab, collaborative competition experience and wide theoretical knowledge.  <br/>
   
    <HashLink to="/aboutme">See more ...</HashLink>
    

    </center>
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

      <i>Please refer to <a href="./asset/doc/CV_PeterHU.pdf"><img width= "18vw" src="/asset/photo/Logo/cv.png" alt="cv"/></a>.</i></center> 
  </>
  )
}

           
function Sidebar_Notice(){
    return(
  <div class ="announcement">
    👈 Please click the left Sidebar for relevant sections. <br/>
          🧑‍💻<br/> 
    <i> 
      <HashLink to="/award">AWARD</HashLink> , <br/>
      <HashLink to="/project">PROJECT</HashLink>, <br/>
      <HashLink to="/experience">EXPERIENCE</HashLink>. <br/>
    </i>
      
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
    <br/>
    <div>
      <Profile/>
      <Sidebar_Project />
      <div class="content">
        <Detail />
      </div>
      <hr width="50%" color="#987cb9" SIZE="1" /> 
      <table class="table_footer">
          <tbody>
                <td>
                  <FooterCommon />
                </td>
          </tbody>
      </table>
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
  <img width= "18vw" src="/asset/photo/Logo/e-mail.png" alt="email"/>zh369@cam.ac.uk <br/> <img width= "12vw" src="/asset/photo/Logo/phone.png" alt="phone"/> (+44) 07990 719841
  <br/><HashLink to="/project">📊</HashLink> | <a href="https://github.com/PeterHUistyping"> <img width= "18vw" src="/asset/photo/Logo/github.svg" alt="github"/></a> |  <a href="https://www.linkedin.com/in/peterhu2022/"> <img width= "16vw" src="/asset/photo/Logo/linkedin.svg" alt="linkedin"/></a> | <a href="./asset/doc/CV_PeterHU.pdf"><img width= "18vw" src="/asset/photo/Logo/cv.png" alt="cv"/></a> 
  {/* |  More  */}
  <br/>

       
</td>
    
  )
 
}