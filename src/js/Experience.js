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
        {/*  Project_and_assignment   */}
        <h2 ><b>EXPERIENCE</b></h2>
     
      <h2><b>RESEARCH EXPERIENCE</b></h2>

      <b>Research Intern (GPU Algorithm) </b><i> <br />
        2023.5 - Present</i>  <br />
        {/* &nbsp;| &nbsp;  */}
        <a href="./asset/doc/RT_Peter-v6.pdf">Ray Tracing Slides(Intersection, Acceleration)</a> 
        &nbsp;| &nbsp;
      <button onClick={() => {setShow(! show)}}>Show Details</button>
      {
          show &&
          <>
          <br/>
          <img width="671" height="490 " src="./asset/photo/Profile/GPU2.png" alt="GPU2" />
          <br/>
          <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i>

          </>
      } <br /> 

    <b>Research Intern (CPU Architect) </b><i><br /> 
        2023.6 - 2023.10</i>   <br />
            {/* &nbsp;| &nbsp;  */}

        <a href="https://peterhuistyping.github.io/CPU_Scheduling_Review/">Scheduling, DVFS, Dynamic Resource Management</a> 
        &nbsp;| &nbsp;
        <button onClick={ () => {setShow2(! show2)}}>Show Details</button>
      {
          show2 &&
          <>
          <br/>
          <img width="671" height="615 " src="./asset/photo/Profile/CPU.png" alt="CPU" />
          <br/>
          <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i><br />

          </>
      }<br /> 

      <h2><b>WORK EXPERIENCE</b></h2>

      <b>GPU Software Engineer Intern </b><i> <br />
        2022.12 - 2023.5 (Part Time) </i>   <br />
        {/* &nbsp;| &nbsp; */}
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
        <img width="28" height="28" src="./asset/photo/Logo/Huawei.png" alt="Huawei"/> 
        
        Huawei Research Lab, Cambridge <br />
        
        <i>Please refer to EXPERIENCE section in <a href="./asset/doc/CV_PeterHU.pdf">CV</a>.</i><br />
      
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        </>
    </div>

    <Index_Footer />
    </motion.div>)
}
