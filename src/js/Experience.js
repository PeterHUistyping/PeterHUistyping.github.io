/* All rights reserved. 2022-2025 (c) Peter HU */


import Sidebar_Project from "./helper/project_sidebar"
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import React, { useEffect, useState } from "react";
import {ShowDetailButton} from './helper/uiBasicElements';
 

export function Experience(){
  useEffect(() => {
    document.title = 'Experience - Peter HU';
  }, []);
    return (
    <motion.div> 
    <Index_Top/> 
    <Sidebar_Project />
    <h2><b>EXPERIENCE</b></h2>
    <ExperienceContents showall={true}/>
    <Index_Footer />
    </motion.div>)
}


export function TalkRayTracing(props){
  // check if it's in research page
  if(props.showall == true){
    return (
      <>
      Sharing session of my industry research topic on <i>Ray Tracing (Intersection, Acceleration).</i>  <br />  
      Presented both internally and at university. &nbsp; | &nbsp;  <a href="./asset/doc/RT_Peter-v6.pdf">Slides</a>   <br /> 
        <embed src="./asset/doc/RT_Peter-v6.pdf"  width="92%" height="300px"  />
  
        <div class="announcement">
        <b>Talk: </b>
        Speeding up real-time Ray Tracing @ <a href="https://kudos.chu.cam.ac.uk/talks/about">Churchill College Tech talk</a> | Date:  <i>Nov 1, 2023</i>
          <br/>
          <b>Feedback:</b>
          <i>"You managed to give a very broad overview of a wide range of techniques used to speed up ray tracing."</i>
          <br />
          <i>"Very rich and complex concepts that cover graphics pipeline rendering in depth. Discussed design tradeoffs and current directions of research."</i>
          <br />
          <i>"Beautiful video to demonstrate why we want ray tracing, useful pictures and diagrams throughout to explain ideas, introduced a lot of steps in the pipeline where I can see some of it being used outside graphics."</i>
          <br />
        </div>
      </>
    )
  }
  else
    return null;
}


function SchedReview(props){
    if(props.showall == true){
      return(
        <>
            <embed src="https://peterhuistyping.github.io/CPU_Scheduling_Review/" width="90%" height="300px"  />
            <br /> 
        </>
      )
    }
    else
      return null;
}

export function ExperienceContents(props){
  return (
    <div class="content">
        <>   
      <i>May, 2023 - Jan, 2024</i> | <img width="34" height="20" src="./asset/photo/Logo/Hisilicon.png" alt="Hisilicon"/>  <a href="https://www.hisilicon.com/en/products/Kirin">HiSilicon Kirin Chipsets Dept.</a>, <img width="20" height="20" src="./asset/photo/Logo/Huawei.png" alt="Huawei"/>   <a href="https://www.cambridgesciencepark.co.uk/company-directory/hauwei-uk-rd-centre/">Huawei Research center, Cambridge Science Park</a>, UK.<br />
      <br/>

      We explore various architectural and algorithmic innovations towards the next-generation mobile or cloud based processors (CPU, GPU, NPU). During these period of time, I am also exposed to other research summits or events hosted, including talks and connections with other academic professors and industry experts. The topics discussed range from the above to more, such as simulation, LLM, compiler and federated learning, which I enjoy the most.
      
      <br/>  <br />
      In particular, I focus on Ray Tracing acceleration via classical graphics and machine learning techniques, under supervision of senior engineers and Mathematics graduates. During which, I maintain and develop a open-source research <a href="https://github.com/knightcrawler25/GLSL-PathTracer">GLSL path renderer</a> in C and GLSL. With the renderer setup, I redesign the underlying BVH algorithms, keeping balance between preprocessing time and real-time intersection complexity. One of our proposed methods are deployed in the product and thus received research-center-wise award.  Besides, we also explore various possibilities of combining AI / machine learning with graphics task, including Ambient Occlusion or Global illumination, which I help integrate the renderer and Pytorch training pipeline, as part of the research explorations.
      <br />
      <br />
      <center>
      <img width="120vw" src="asset/photo/experience/RT/AO_64spp.png" alt="AO-64spp" title="AO-64spp" />
      <img width="120vw" src="asset/photo/experience/RT/baryMap.png" alt="baryCenter" title="baryCenter"/>
      <img width="120vw" src="asset/photo/experience/RT/colorMap.png" alt="color" title="color"/>
      <img width="120vw" src="asset/photo/experience/RT/depthMap.png" alt="depth" title="depth"/>
      <img width="120vw" src="asset/photo/experience/RT/normalMap.png" alt="normal" title="normal"/>
      <img width="120vw" src="asset/photo/experience/RT/posMap.png" alt="position" title="position"/>
      <br />
      <a href="https://www.intel.com/content/www/us/en/developer/topic-technology/graphics-research/samples.html">Sponza scene</a> from adapted <a href="https://github.com/knightcrawler25/GLSL-PathTracer">GLSL path renderer</a>, forming <a href="https://en.wikipedia.org/wiki/Deferred_shading">GBuffer</a> for further explorations. 
      </center>

      <br />  
      Aside from that, I also join the CPU team on heterogeneous scheduling, DVFS and dynamic resource management, supervised by PhD graduate in Electrical Engineering and other engineers. I initialize the codebase for the scheduler simulator in Python, from which the team develop the prototype for the next-gen scheduling policies based on the literature review I collected. In general, the difficulty lies in the multi-objective optimization and tradeoff between performance, power consumption, thermal conditions, priorities, fairness and other factors.
      <br />  <br />

      <i>For details, please click the 'Show Details' button.</i><br />
      <br /> 

      Research Engineer Intern (<b>Graphics Algorithms / GPU Architecture</b>)  &nbsp; &nbsp; &nbsp; <i> 2023.5 - 2024.1</i>  
      <br/>
      
      <ShowDetailButton 
        title={<>| <a href="./asset/doc/StarofCambridge.png">Award</a> for new prediction algorithm proposed with joint efforts. | {/* &nbsp;| &nbsp;  */} </>}
        mainText=
        {
            <>
              <img width="722" height="705" src="./asset/photo/Profile/GPU2.png" alt="GPU2" />
              <br/>
              {/* <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i> */}
            </>
        } 
      />
      <TalkRayTracing showall={props.showall} />
      <br /> 
      <br />

      Research Intern (<b>CPU Architect</b>)  &nbsp; &nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; <i>2023.6 - 2023.10</i>
      <br /> 
      <ShowDetailButton
        title={<> | <a href="https://peterhuistyping.github.io/CPU_Scheduling_Review/">Literature Review: Scheduling, DVFS, Dynamic Resource Management</a> &nbsp;|   </>}
        mainText=     
        {
          <>
          <img width="671" height="615 " src="./asset/photo/Profile/CPU.png" alt="CPU" />
          <br/>
          {/* <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i><br /> */}
          </>
        }
      />
      <br /> 
      
      <SchedReview showall={props.showall} />
      

      {/* &nbsp;| &nbsp; */}
      <br/> 
      Software Engineer Intern (<b>GPU</b>) 
       &nbsp; &nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;
      {/* <br /> */}
      <i> 2022.12 - 2023.5 </i>   <br />
        {/* (Part Time)  */}
      <ShowDetailButton
        title={<> &nbsp;| &nbsp; <i>C++, Vulkan, GPU Driver, UE4 (rendering)</i></>}
        mainText={
          <>
            <img width="671" height="276 " src="./asset/photo/Profile/GPU1.png" alt="GPU1" />
            <br/>
            {/* <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i><br /> */}
          </>
        }
      />
      
      <br />
  
        <i>Please refer to EXPERIENCE section in <a href="./asset/doc/CV_PeterHU.pdf"><img width= "18vw" src="./asset/photo/Logo/cv-blue.png" alt="cv"/></a>.</i><br />
      
        <br />   
        </>
    </div>

  )
  
}