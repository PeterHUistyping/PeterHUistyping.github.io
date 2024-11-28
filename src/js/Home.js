/* All rights reserved. 2022-2024 (c) Peter HU */

 
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
    <a href="https://www.cam.ac.uk/">
    <img width="27" height="24" src="./asset/photo/Logo/Cam.png" alt="Cambridge" /> 
    </a>
    <b> University of Cambridge </b><i> <br />
        Undergraduate<br />
        2022.10 - 2025.06</i><br />
        Computer Science | <a href="https://peterhuistyping.github.io/Cambridge_CS_Tripos/">Notes</a><br />
        [Fully-funded] <a href="https://en.wikipedia.org/wiki/Jardine_Scholarship">Jardine</a> <a href="./asset/doc/Jardine_Certificate.jpg">Scholarship</a>. <br />
    <a href="https://en.xmu.edu.cn/main.htm">
    <img width="24" height="24" src="./asset/photo/Logo/xmu.png" alt="XMU"/>
    </a>
    <b> Universitas Amoiensis </b><i> <br />
    {/* Xiamen University  */}
        First year undergraduate<br /> 
        2021.09 - 2022.06</i> <br />
        Software Engineering<br />
        GPA: 3.91 / 4.0 (first term)<br /> 88 / 100 (yearly)<br />
        Class Rep, ACM Team.<br />
    <a href="https://en.wikipedia.org/wiki/Shanghai_Nanyang_Model_High_School">
    <img width="28" height="24" src="./asset/photo/Logo/NanyangHigh.png" alt="Nanyang"/>
    </a>
    <b>Nanyang Model High School </b> <br />
        <i> 2018.09 - 2021.06</i><br />
        {/* High School Diploma<br /> */}
        Physics Rep, research project leader, 
        awarded <a href="https://en.wikipedia.org/wiki/Shuping_Scholarship">ShuPing Scholarship</a> twice.<br />
        
    {/* <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i> */}
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
    
    Strong background and interest in Visual Computing (Graphics, Vision) with ML / System related fields.  <br/>
    Various research experience, collaborative compression competition and wide theoretical knowledge.  <br/>
   
      {/* <HashLink to="/aboutme">MORE ...</HashLink>  */}
      {/* | <HashLink to="/project">📊<i>PROJECT</i></HashLink> */}
    

    </center>
    </>
  )
}

function Interest_extra(){
  return(
    <>
  <br/>   
  <large><i>INTERESTS AND EXTRACURRICULUM</i></large> 
  <br/>

  <HashLink to="/PhotoDisplay">Photography</HashLink>, Music, Swimming, Gym,    etc.  <br />  
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
  // archive funcs
    return(
  <div class ="announcement">
    <h1>
      <HashLink to="/research">Research💭</HashLink><br/>
      <HashLink to="/award">Awards🥇</HashLink><br/>
      <HashLink to="/project">Projects🧑‍💻</HashLink><br/>
    </h1>
      {/* <HashLink to="/experience"><i>Experience</i></HashLink><br/> */}
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
    <center>
        <ColBio />   <br/><br/>
    </center>
    <Education />
    <center>
        {/* <Sidebar_Notice /> */}
        <ColResearch /> <br/>
        <ColProject /> <br/><br/>
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
        </div>
        <div class ="right-panel">
            <About_me />
            <center>
            {/* <Sidebar_Notice /> */}

            {/* split into three cols */}
            <div class="container_small">
                <div class="half-panel">
                      <ColBio />
                </div>
                <div class="half-panel">
                      <ColResearch />
                </div>
                <div class="half-panel">
                      <ColProject />
                </div>
            </div>
            <Skill />      
            <Interest_extra />
            </center>
        </div>
        </div>
      )
}


function ColBio(){
  return (
    <>
        <h3>
        <HashLink to="/aboutme">Detailed Bio.</HashLink> <br/> 
        </h3>
        <HashLink id="teaser_link"  to="/aboutme">
            <img height="100vh" src="/asset/photo/Logo/Relationship_CV.png" alt="CV" />
        </HashLink> 
    </>
  )
}


function ColResearch(){
    return (
    <>
      <h3>
      <HashLink to="/research">Research💭</HashLink> |  <HashLink to="/experience">Experience</HashLink> <br/>
      </h3>
      <HashLink id="teaser_link"  to="/research">
          <img height="100vh" src="/asset/photo/pub/1/teaser.png" alt="teaser" />
      </HashLink> 
    </>
  )
}

function ColProject(){

  return (
    <>
      <h3>
      <HashLink to="/award">Awards🥇</HashLink> |  <HashLink to="/project">Projects🧑‍💻</HashLink> <br/>
      </h3>
      <HashLink id="project_link"  to="/project">
          <img height="100vh" src="asset/photo/Assignment/blog3/Self-similar_fractals.png" alt="project_img" />
      </HashLink>
    </>
  )
}


export function Home() { 
  return (
    <motion.div> 
    <Index_Top/> 
    <script>
      document.getElementById("top").focus();
      document.getElementById("sidebar_home").focus();
    </script>
    <br/>
    <div>
      <Profile/>
      <Sidebar_Project />
      <div class="content">
        <Detail />
      </div>
      <br/>  <br/>
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

export function Profile(){
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
   
  <p> University of Cambridge <br/>Computer Science <br/>Part II</p> <br/>
  <strong>Contact Details</strong><br/>

  <img width= "12vw" src="/asset/photo/Logo/e-mail.png" alt="email"/>
  <a href="mailto:zh369@cam.ac.uk" >Email</a>   &nbsp; 
      {/* zh369@cam.ac.uk  */}
  <img width= "12vw" src="/asset/photo/Logo/phone.png" alt="phone"/> 
  <a href="tel:4407990719841">Tel</a>
  {/* (+44) 07990 719841 */}
  {/* |  More  */}

  <br/>

  <a href="https://github.com/PeterHUistyping"> <img width= "18vw" src="/asset/photo/Logo/github.svg" alt="github"/></a> | 
  
   {/* <a href="https://www.linkedin.com/in/peterhu2022/"> <img width= "16vw" src="/asset/photo/Logo/linkedin.svg" alt="linkedin"/></a> | */}

   <a href="https://www.kaggle.com/peterhu2022"> <img width= "16vw" src="/asset/photo/Logo/kaggle.svg" alt="linkedin"/></a> |
  
   <a href="./asset/doc/CV_PeterHU.pdf"><img width= "16vw" src="/asset/photo/Logo/cv.png" alt="cv"/>CV</a> 

  <br/>

       
</td>
    
  )
 
}