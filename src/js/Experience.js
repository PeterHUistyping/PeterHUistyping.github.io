/* All rights reserved. 2022-2024 (c) Peter HU */


import PrAs_table from "./PrAs_Table";
import Sidebar_Project from "./helper/project_sidebar"

import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import React, { useEffect, useState } from "react";
 
export function Experience(){
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
    <div class="content">
        <>   
      {/* <h2 ><b>EXPERIENCE</b></h2> */}
     
      <h2><b>RESEARCH EXPERIENCE</b></h2>

      <b>Research Intern (Graphics Algorithm / GPU Architecture) </b><i> <br />
        2023.5 - 2024.1</i>  &nbsp;| &nbsp;  <button onClick={() => {setShow(! show)}}>Show Details</button> <br />
  
        <a href="./asset/doc/StarofCambridge.png">Award</a> for new prediction algorithm proposed with joint efforts.
        {/* &nbsp;| &nbsp;  */}
        <br />    <br />
      {
          show &&
          <>
          <br/>
          <img width="722" height="705" src="./asset/photo/Profile/GPU2.png" alt="GPU2" />
          <br/>
          {/* <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i> */}

          </>
      } 
      Sharing Session: <i>Ray Tracing (Intersection, Acceleration)</i> <a href="./asset/doc/RT_Peter-v6.pdf">Slides</a>  &nbsp; <br /> 
      <embed src="./asset/doc/RT_Peter-v6.pdf"  width="400px" height="300px"  />

      <div class="announcement">
      Speeding up real-time Ray Tracing @ <a href="https://kudos.chu.cam.ac.uk/talks/about">Churchill College Tech talk</a> | Time:  <i>Nov 1, 2023</i>
        <br/>
        <b>Feedback:</b>
        <i>"You managed to give a very broad overview of a wide range of techniques used to speed up ray tracing."</i>
        <br />
        <i>"Very rich and complex concepts that cover graphics pipeline rendering in depth. Discussed design tradeoffs and current directions of research."</i>
        <br />
        <i>"Beautiful video to demonstrate why we want ray tracing, useful pictures and diagrams throughout to explain ideas, introduced a lot of steps in the pipeline where I can see some of it being used outside graphics."</i>
        <br />
      </div>

        <br /> <br /> 
       

    <b>Research Intern (CPU Architect) </b><i><br /> 
        2023.6 - 2023.10</i>   &nbsp;| &nbsp; <button onClick={ () => {setShow2(! show2)}}>Show Details</button> <br />
           

      <a href="https://peterhuistyping.github.io/CPU_Scheduling_Review/">Scheduling, DVFS, Dynamic Resource Management</a> 
      &nbsp;| &nbsp;
     
      {
          show2 &&
          <>
          <br/>
          <img width="671" height="615 " src="./asset/photo/Profile/CPU.png" alt="CPU" />
          <br/>
          {/* <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i><br /> */}

          </>
      }<br /> 
        <embed src="https://peterhuistyping.github.io/CPU_Scheduling_Review/" width="90%" height="300px"   />
        <br /> 

      {/* &nbsp;| &nbsp; */}
      {/* <h2><b>WORK EXPERIENCE</b></h2>

      <b>GPU Software Engineer Intern </b><i> <br />
        2022.12 - 2023.5 (Part Time) </i>   <br />

        <i>C++, Vulkan, GPU Driver </i> 
          &nbsp;| &nbsp;
            <button onClick={() => {setShow3(! show3)}}>Show Details</button>
        {
          show3 &&
          <>
          <br/>
          <img width="671" height="276 " src="./asset/photo/Profile/GPU1.png" alt="GPU1" />
          <br/>
          <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i><br />

      </>
    }<br />  
      */}
        <img width="20" height="20" src="./asset/photo/Logo/Huawei.png" alt="Huawei"/> 
        
        Huawei Research Lab, Cambridge <br />
        
        <i>Please refer to EXPERIENCE section in <a href="./asset/doc/CV_PeterHU.pdf"><img width= "18vw" src="./asset/photo/Logo/cv.png" alt="cv"/></a>.</i><br />
      
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        </>
    </div>

    <Index_Footer />
    </motion.div>)
}

