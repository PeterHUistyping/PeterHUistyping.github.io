/* All rights reserved. 2022-2025 (c) Peter HU */

 
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link';
import Sidebar_Project from "./helper/project_sidebar"
import FooterCommon from "./helper/footerCommon"
import {Publication} from "./Research"
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
    <b> University of Cambridge </b> <br />
     <i> Undergraduate<br />
     2022.10 - 2025.06</i><br />
    <a href="https://www.cst.cam.ac.uk/">Computer Science</a> | <a href="https://peterhuistyping.github.io/Cambridge_CS_Tripos/">notes</a><br />
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
    <b>Nanyang Model High School </b> &nbsp;
    {/* <br /> */}
        <i> 2018.09 - 2021.06</i><br />
        {/* High School Diploma<br /> */}
        Physics Rep, research project leader, 
        awarded <a href="https://en.wikipedia.org/wiki/Shuping_Scholarship">ShuPing Scholarship</a> twice.<br />
        
    {/* <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i> */}
    {/* &emsp;&emsp; */}
    
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
    <large> <large><i>About ME 👇</i></large></large> <br/>
    Hi! Thanks for dropping by~ I'm (<HashLink to="/aboutme">bio.</HashLink>) an undergraduate at <a href="https://www.cst.cam.ac.uk/">University of Cambridge</a>.  <br/>
    Strong background and interest in <font color="green">Visual Computing (Graphics, Vision)</font> with <font color="#3824BD">ML</font> / <font color='#8D6F64'>System</font> related fields.  <br/>
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
  Society: <a href="https://www.ethics-in-mathematics.com/">Ethics in Mathematics</a><br />
  <i>Economics Related Topics: </i> Macro & Micro, Money Banking<br />
    </>
  )
}

function Skill(){
  return (
    <>
      <br/> <center><large><i  id="skills">SKILLS</i></large>  <br/>
      <i>Please refer to <a href="./asset/doc/CV_PeterHU.pdf"><img width= "18vw" src="/asset/photo/Logo/cv-blue.png" alt="cv"/></a>.</i></center> 
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
        <ColBio />   <br/> 
    </center>
    <Education />
    <center>
        {/* <Sidebar_Notice /> */}
        <ColResearch /> <br/>
        <ColProject /> <br/>
        {/* <Skill /> */}
        <Interest_extra /> <br/>
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
            <br/> 
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
            {/* <Skill />       */}
            <br/>
            <Interest_extra />
            <br/>
            <br/>
            </center>
        </div>
        </div>
      )
}

// const HomeNavButtonStyle = {
//   display: 'inline-block', 
//   padding: '1px 2px', 
//   backgroundColor: 'green', 
//   border: '1px solid #ccc', 
//   borderRadius: '10px', 
//   textDecoration: 'none', 
//   color: '#f0f0f0',
//   fontWeight: 'bold'
// };


function ColBio(){
  return (
    <>
        <HashLink id="teaser_link"  to="/aboutme">
            <img height="100vh" src="/asset/photo/Logo/Relationship_CV.png" alt="CV" />
        </HashLink> 
        <br/>
        {/* <font size="+1"> */}
        <b>
        <HashLink to="/aboutme"> Biography 》</HashLink> <br/> 
        </b>
        {/* </font> */}
    </>
  )
}


function ColResearch(){
    return (
    <>
      <HashLink id="teaser_link"  to="/research">
          <img height="100vh" src="/asset/photo/pub/1/teaser.png" alt="teaser" />
      </HashLink> 
      <br/>
      
      {/* <font size="+1"> */}
      <b>
      <HashLink to="/research">Research 》</HashLink> |  <HashLink to="/experience">Experience 》</HashLink> <br/>
      </b>
      {/* </font> */}
    </>
  )
}

function ColProject(){

  return (
    <>
      <HashLink id="project_link"  to="/project">
          <img height="100vh" src="asset/photo/Assignment/blog3/Self-similar_fractals.png" alt="project_img" />
      </HashLink>
      <br/>
      {/* <font size="+1"> */}
      <b>
      <HashLink to="/award">Awards 》</HashLink> |  <HashLink to="/project">Projects 》</HashLink> <br/>
      </b>
      {/* </font> */}
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
        <center>
          <h1 style={{"font-family":"Brush Script MT"}}>List of Publications</h1>
          <Publication />
        </center>
      </div>
      {/* <br/> */}
      <hr width="50%" color="#C0C0C0" SIZE="1" />  
       {/* #987cb9 */}
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
                  <a href="https://peterhuistyping.github.io/"><img class="img_profile" src="./asset/photo/Peter_Hu.jpg" alt="Profile Photo"/></a>
          </div>
      </td>
  )
}

function Profile2(){
  return(
      <td width="280" text-align="center">
  <h2 id="contact"><i><large>Peter</large></i>/Zheyuan HU </h2>
  <br/>
  {/* <p> University of Cambridge <br/>Computer Science <br/></p>   */}

  <div style={{border: "1px dashed  #987cb988", padding: "4px", borderRadius: "15px"}}>

  <a href="https://github.com/PeterHUistyping"> <img width= "18vw" src="/asset/photo/Logo/github.svg" alt="github"/></a> 
  
  &thinsp;
  {/* &thinsp; |  &thinsp; */}

  {/* <a href="https://www.linkedin.com/in/peterhu2022/"> <img width= "16vw" src="/asset/photo/Logo/linkedin.svg" alt="linkedin"/></a> | */}

  <a href="https://orcid.org/0009-0004-4687-6945"><img width= "18vw" src="/asset/photo/Logo/ORCiD.png" alt="ORCiD"/></a> 
  
  &thinsp; 
  {/* &thinsp; |  &thinsp; */}

  <a href="https://scholar.google.com/citations?user=M3jgt3QAAAAJ"><img width= "18vw" src="/asset/photo/Logo/goggle_scholar.png" alt="google_scholar"/></a> 
  
  &thinsp; 
  {/* &thinsp; |  &thinsp; */}
  
  <a href="https://www.kaggle.com/peterhu2022"><img width= "18vw" src="/asset/photo/Logo/kaggle.svg" alt="kaggle"/></a> 
  
  {/* &thinsp;  */}
  {/* &thinsp; |  &thinsp; */}
 
  <br/>

  <a href="./asset/doc/CV_PeterHU.pdf"><img width= "20vw" src="/asset/photo/Logo/cv-blue.png" alt="cv"/></a>   &nbsp; 

  {/* <strong>Contact Details</strong><br/> */}
  <img width= "12vw" src="/asset/photo/Logo/e-mail.png" alt="email"/>
  <a href="mailto:zh369@cam.ac.uk" >Email</a>   &nbsp; 
  
  {/* zh369@cam.ac.uk  */}
  {/* <img width= "12vw" src="/asset/photo/Logo/phone.png" alt="phone"/> 
  <a href="tel:4407990719841">Tel.</a> */}
  {/* (+44) 07990 719841 */}
  {/* |  More  */}

  </div>

</td>
    
  )
 
}