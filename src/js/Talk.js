import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import Sidebar_Project from "./helper/project_sidebar";


export function TalkSlides(props) {
    if (props.showslides === true) {
        return (
            <>
                <embed src={props.src}  width="92%" height="300px"  />
            </>
        )
    }
}


export function TalkIntelCore(props){
  // check if it's in research page
    if (props.showall === true) {
    const slides_link = "./asset/doc/Intel-Skylake.pdf";
    return (
      <>
      <div class="announcement">
        <b>Talk: </b>
        Inside the 6th Gen Intel® Skylake Core @ <a href="https://www.cl.cam.ac.uk/teaching/2526/R265/">Advanced Topic in Computer Architecture Seminar</a> | Date:  <i>3 Feb, 2025</i>
          <br/>
          ✨ Sharing session of my review of the 1st to latest Intel® microarchitecture design, particularly the Skylake core.
           <br />  
          ✨ Covering the power management, superscalar microarchitecture, memory, security, graphics. | <a href={slides_link}>Slides</a>   <br /> 
            <TalkSlides showslides={props.showslides} src={slides_link}/>
          <br/>
          {/* <b>Feedback:</b> &nbsp; */}
          {/* <i></i> --. */}
          <br />
        </div>
      </>
    )
    } 
}


export function TalkSocialDatacenter(props){
  // check if it's in research page
    if (props.showall === true) {
    const slides_link = "./asset/doc/Social_Datacenter.pdf";
    return (
      <>
      <div class="announcement">
        <b>Talk: </b>
        Inside the Social Network’s Datacenter Network @ <a href="https://www.cl.cam.ac.uk/teaching/2526/R02/">Network Architecture Seminar</a> | Date:  <i>23 Oct, 2025</i>
          <br/>
          ✨ Sharing session of my review of the Facebook datacenter network architecture.   
           <br />  
          ✨ Covering the network topology, cluster types, experiments results and implication. | <a href={slides_link}>Slides</a>   <br /> 
            <TalkSlides showslides={props.showslides} src={slides_link}/>
          <br/>
          <b>Feedback:</b> &nbsp;
          <i>"Very nice - setting a high standard!!  - I would make presentation notes and on each slide (especially anything with a graph) figure out what is the one "take home message" from that graph - so introducing a result, and why it matters, briefly saying what are axes on graph, what is plotted and what about any curve is the major factor"</i> -- Prof Jon Crowcroft.
          <br />
        </div>
      </>
    )
    } 
}


export function JardineScholarshipTalk(props){
  // check if it's in research page
    const slides_link = "./asset/doc/Shuping-Jardine.pdf";
    return (
      <>
        <div class="announcement">
            <b>Talk: </b>
            From Jardine Scholar to Journey-Maker @ <a href="https://kudos.chu.cam.ac.uk/talks/about">Shuping Foundation</a> | Date:  <i>Aug 3, 2025</i>
            <br/>
            ✨ Sharing session of my journey as a Jardine Scholar at the University of Cambridge. <br /> 
            ✨ The talk focuses on how to choose departments, college, how to make the most of the experience, and the impact of the scholarship on my life. <br />
            ✨ Shared at the Shuping Foundation for prospective applicants. &nbsp; | &nbsp;  <a href={slides_link}>Slides</a>   <br /> 
               <TalkSlides showslides={props.showslides} src={slides_link}/>
            <br />
            <b>Feedback:</b> &nbsp;
            <i>"Well prepared slides with interesting reflections and insights for perspective applicants!"</i>
            <br />
            </div>
      </>
    )
}


export function TalkRayTracing(props){
  // check if it's in research page
    if (props.showall === true) {
    const slides_link = "./asset/doc/RT_Peter-v6.pdf";
    return (
      <>
      <div class="announcement">
        <b>Talk: </b>
        Speeding up real-time Ray Tracing @ <a href="https://kudos.chu.cam.ac.uk/talks/about">Churchill College Tech talk '23</a> | Date:  <i>Nov 1, 2023</i>
          <br/>
          ✨ Sharing session of my industry research topic on <i>Ray Tracing (Intersection, Acceleration).</i>  <br />  
          ✨ Presented both at the R&D group internally and in the university. &nbsp; | &nbsp;  <a href={slides_link}>Slides</a>   <br /> 
            <TalkSlides showslides={props.showslides} src={slides_link}/>
          <br/>
          <b>Feedback:</b> &nbsp;
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
}


export function Compression22(props){
  // check if it's in research page
    const slides_link = "./asset/doc/Crazy_Thursday.pdf";
    if (props.showall === true) {
    return (
      <>
      <div class="announcement">
        <b>Talk: </b>
        3D graphics asset compression @ <a href="https://www.youtube.com/watch?v=kYutw-pczmg">national Tech Arena '22, UK</a> | Date:  <i>Nov 25, 2022</i>
          <br/>
          ✨ Sharing session of my implementation and exploration on <i>3D obj. compression</i>, with novel 6-level algorithmic improvements. 
          <br />  
          ✨ Low-level C with bitwise operators & hash tables, optimization via branch prediction and concurrency.
          <br />  
          ✨ Team work on preprocessing, serialization and huffman coding.
           &nbsp; | &nbsp;  <a href={slides_link}>Slides</a>   <br /> 
            <TalkSlides showslides={props.showslides} src={slides_link}/>
          <br/>
          <b>Feedback:</b> &nbsp; 
          <b>Gold medal</b> among all UK undergraduates and postgraduates contestants, <i>after rating by the leading industry experts panel.</i>
          <br />
        </div>
      </>
    )
    } 
}

export function TalkHighlight(props){

    return (
        <>
          {
            props.showall === true &&
            
            <div style={{textAlign: "center"}}>
               <b>{props.mainTitle}</b>: {props.newline === true && <br/>} {props.subTitle}
            </div>
          }
        </>
    )
}

export function TalkList(props){
    return (
      <>
      <TalkHighlight showall={props.showall} showslides={props.showslides} mainTitle="Real-time Ray Tracing" subTitle="Past, present and future."/>
      <TalkRayTracing showall={props.showall} showslides={props.showslides} />
      <br/>

      <TalkHighlight showall={props.showall} showslides={props.showslides} mainTitle="3D graphics asset compression" subTitle="6-level LZSS algorithm."/>
      <Compression22 showall={props.showall} showslides={props.showslides} />
      <br/>

      <TalkHighlight showall={props.showall} showslides={props.showslides} mainTitle="Inside the 6th Gen Intel® Skylake Core" subTitle="Past, Present, and Future of a new microarchitecture."/>
      <TalkIntelCore showall={props.showall} showslides={props.showslides} />
      <br/>

      <TalkHighlight showall={props.showall} showslides={props.showslides} mainTitle="Network architecture for social network" subTitle="A review for Facebook datacenter network."/>
      <TalkSocialDatacenter showall={props.showall} showslides={props.showslides} />
      <br/>
 
 
      <TalkHighlight showall={props.showall} showslides={props.showslides} mainTitle="From Jardine Scholar to Journey-Maker" subTitle="Reflections of a Transformative Opportunity." newline={true} />
      { /*  Lessons, and the Ripple Effects  */}
      <JardineScholarshipTalk showall={props.showall} showslides={props.showslides}/>
      <br/>
      </>
    )
}

export default function Talk(){
    useEffect(() => {
            document.title = 'Invited Talks - Peter HU';
    }, []);

    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />

    <h2 id="research"><b>INVITED TALKS</b></h2>
    <div class="content">
        <TalkList showall={true} showslides={true} />
    </div>

    <Index_Footer />
    </motion.div>)
}
