/* All rights reserved. 2022-2025 (c) Peter HU */

 
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link';
import Sidebar_Project from "./helper/project_sidebar"
// import FooterCommon from "./helper/footerCommon"
import {Publication} from "./Research"
import React, { useEffect, useState } from "react";
import { ShowDetailButton } from './helper/uiBasicElements';
import {Slideshow} from "./helper/slideShow"
import {Education, Skill, Interest_extra} from "./EduSkill"

function About_me(){
  return (
    <>
    {/* <center>
    <large> <large><i>About</i> ME 👇</large></large> <br/>
    </center> */}
    <div style={{"margin-left":"20%", "margin-right":"20%"}}>
    {/* an undergraduate at  */}
    <i>Hi, thanks for dropping by~</i> I'm (<HashLink to="/aboutme">bio.</HashLink>) currently a graduate student (Master’s) at <a href="https://www.cst.cam.ac.uk/">University of Cambridge</a>, where I also completed my undergraduate studies. My interests lie in the fields of <font color="green">Visual Computing (Graphics, Vision)</font> with <font color="#3824BD">ML</font>. Besides, I have been engaged with exciting hackathons, research projects, and internships (e.g. <font color='#8D6F64'>System</font>) in the past few years.
    </div>
    {/* Various research experience, collaborative compression competition and wide theoretical knowledge.  <br/> */}
      {/* <HashLink to="/aboutme">MORE ...</HashLink>  */}
      {/* | <HashLink to="/project">📊<i>PROJECT</i></HashLink> */}
    </>
  )
}

           
// function Sidebar_Notice(){
//   // archive funcs
//     return(
//   <div class ="announcement">
//     <h1>
//       <HashLink to="/research">Research💭</HashLink><br/>
//       <HashLink to="/award">Awards🥇</HashLink><br/>
//       <HashLink to="/project">Projects🧑‍💻</HashLink><br/>
//     </h1>
//       {/* <HashLink to="/experience"><i>Experience</i></HashLink><br/> */}
//   </div>
//     )
// }


function Detail(){
    var w = window.innerWidth;  
    // depending on the width, the classname is different
    var teaser_layout_class = "";
    if (w<800){
      teaser_layout_class = "";
    }
    else{
      teaser_layout_class = "container_small";
    }

    return(
      <>
      <About_me /> 
      <br/>
      <center>
        {/* split into main two cols */}
        {/* <div class ="left-panel"> */}
        {/* <div class ="right-panel"> */}
        {/* split into three cols */}
        <div class={teaser_layout_class}>
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
      </center>
      <br/>
          <h1 style={{
            "font-family":"BrushScriptMT-embed", 
            "textAlign": 'center'
          }}>List of Publications</h1>
        <Publication />
        <br/>
        {/* <Interest_extra /> <br/> */}
        {/* <embed src="asset/doc/CV_PeterHU.pdf"  width="800px" height="600px" /> */}
      </>
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
        {/* <font size="+1"> */}
        <HashLink to="/aboutme" className="project-link">Biography》</HashLink> 
        {/* </font> */}

         <ShowDetailButton 
        rounded = {"True"} 
        buttonText = {<>🌈</>}  
        mainText = {<>  
          <HashLink id="teaser_link"  to="/aboutme">
            <img height="100vh" 
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            src="/asset/photo/Logo/Relationship_CV.png" alt="Bio." title="Bio." />
          </HashLink> 
        </>
        } />
    </>
  )
}


function ColResearch(){
    const images = [
      "asset/photo/pub/1/teaser.png",
      "asset/photo/pub/1/diagram.png",
      "asset/photo/pub/2/teaser.png",
      "asset/photo/pub/2/diagram.png",
      'asset/photo/experience/RT/depthMap.png',
      'asset/photo/experience/RT/posMap.png',
      'asset/photo/experience/RT/normalMap.png',
      'asset/photo/experience/RT/AO_64spp.png',
    ];
    return (
    <>
      {/* <font size="+1"> */}
      <HashLink to="/research"
        className="project-link"
      >Research》</HashLink>|<HashLink to="/experience"
        className="project-link"
      >Experience》</HashLink> 

      <ShowDetailButton 
        rounded = {"True"} 
        buttonText = {<>💭</>}  
        mainText = {<>  
          <HashLink id="teaser_link"  to="/research">
            <Slideshow images={images} type="Research"/>
          </HashLink> 
        </>
      } />

      {/* <img height="100vh" src="/asset/photo/pub/1/teaser.png" alt="teaser" /> */}
      {/* </font> */}
    </>
  )
}

function ColProject(){
  const images = [
    "asset/photo/Assignment/11/wiHumanOcclusion.PNG",
    "asset/photo/Assignment/11/conclusion.png",
    "asset/photo/Assignment/blog3/MyProject/assignment4_Ray-Tracer/RayTracer.png",
    "asset/photo/Assignment/blog3/Self-similar_fractals.png",
    "asset/photo/Assignment/7/Team_Member.png",
    "asset/photo/Assignment/6/1.JPG",
    "asset/photo/Assignment/9/Frozen.png"
  ];

  return (
    <>
      {/*   */}
      {/* <font size="+1"> */}
      <HashLink to="/award"
        className="project-link"
      >Awards》</HashLink>|<HashLink to="/project"
        className="project-link"
      >Projects》</HashLink>  
      {/* </font> */}

       <ShowDetailButton 
        rounded = {"True"} 
        buttonText = {<>💻</>}  
        mainText = {<>  
          <HashLink id="project_link"  to="/project">
            <Slideshow images={images} type="Projects"/>
          </HashLink>
        </>
      } />

      {/* <img height="100vh" src="asset/photo/Assignment/blog3/Self-similar_fractals.png" alt="project_img" /> */}

    </>
  )
}


export function Home() { 
  useEffect(() => {
    document.title = 'Homepage - Peter HU';
  }, []);
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
      {/* <br/> */}
      <Index_Footer />
      {/* <hr width="50%" color="#C0C0C0" size="1" />  
      <table class="table_footer">
          <tbody>
                <td>
                  <FooterCommon />
                </td>
          </tbody>
      </table> */}
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
      // portrait
      <td width="280" rowspan="1" height="200">
          <div> 
                  <a href="https://peterhuistyping.github.io/"><img class="img_profile" src="./asset/photo/Peter_Hu.jpg" alt="Profile Photo" title="Portrait (Oil Painting Style)"/></a>
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

  <a href="https://github.com/PeterHUistyping"> <img width= "18vw" 
  onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  src="/asset/photo/Logo/github.svg" alt="github" title="GitHub"/></a>
  
  &thinsp;
  {/* &thinsp; |  &thinsp; */}

  {/* <a href="https://www.linkedin.com/in/peterhu2022/"> <img width= "16vw" 
  onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  src="/asset/photo/Logo/linkedin.svg" alt="linkedin"/></a> | */}

  <a href="https://orcid.org/0009-0004-4687-6945"><img width= "18vw" 
  onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  src="/asset/photo/Logo/ORCiD.png" alt="ORCiD" title="ORCiD"/></a>
  
  &thinsp; 
  {/* &thinsp; |  &thinsp; */}


  <a href="https://scholar.google.com/citations?user=M3jgt3QAAAAJ"><img width= "18vw" 
  onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  src="/asset/photo/Logo/goggle_scholar.png" alt="google_scholar" title="Google Scholar"/></a>
  
  &thinsp; 
  {/* &thinsp; |  &thinsp; */}

  <a href="https://dblp.org/pid/270/0713-6"><img width= "18vw" 
  onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  src="/asset/photo/Logo/dblp.webp" alt="dblp" title="DBLP"/></a>
  
  &thinsp; 
  {/* &thinsp; |  &thinsp; */}
  
  <a href="https://www.kaggle.com/peterhu2022"><img width= "18vw" 
  onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  src="/asset/photo/Logo/kaggle.svg" alt="kaggle" title="Kaggle"/></a>

  <br/>

  <a href="./asset/doc/CV_PeterHU.pdf"><img width= "20vw" 
  onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  src="/asset/photo/Logo/cv-blue.png" alt="cv" title="CV"/></a>

  &emsp;
  {/* &thinsp; |  &thinsp; */}

  {/* <strong>Contact Details</strong><br/> */}
  <a href="mailto:zh369@cam.ac.uk" title="Email">
      <img width= "20vw" 
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      src="/asset/photo/Logo/e-mail.png" alt="email" title="Email"/>
  </a>
  
  {/* zh369@cam.ac.uk  */}
  {/* <img width= "12vw" src="/asset/photo/Logo/phone.png" alt="phone"/> 
  <a href="tel:4407990719841">Tel.</a> */}
  {/* (+44) 07990 719841 */}
  {/* |  More  */}

  </div>

</td>
    
  )
 
}


// legacy two cols
// function Detail(){  
//   var w = window.innerWidth;
//   // mobile
//   if (w<800)
//   return(
//     <>
//     <About_me /> 
//     <center>
//         <ColBio />   <br/> 
//     </center>
//     <Education />
//     <center>
//         {/* <Sidebar_Notice /> */}
//         <ColResearch /> <br/>
//         <ColProject /> <br/>
//         {/* <Skill /> */}
//         <Interest_extra /> <br/>
//         {/* <embed src="asset/doc/CV_PeterHU.pdf"  width="800px" height="600px" /> */}
//     </center>
//     </>
//     )
//     else // PC
//     return (
//         <div class="container_main">
//         <div class ="left-panel">
//             <Education />
//         </div>
//         <div class ="right-panel">
//             <About_me />
//             <br/> 
//             <center>
//             {/* <Sidebar_Notice /> */}

//             {/* split into three cols */}
//             <div class="container_small">
//                 <div class="half-panel">
//                       <ColBio />
//                 </div>
//                 <div class="half-panel">
//                       <ColResearch />
//                 </div>
//                 <div class="half-panel">
//                       <ColProject />
//                 </div>
//             </div>
//             {/* <Skill />       */}
//             <br/>
//             <Interest_extra />
//             <br/>
//             <br/>
//             </center>
//         </div>
//         </div>
//       )
// }