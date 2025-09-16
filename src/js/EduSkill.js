import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import {ShowDetailButton} from './helper/uiBasicElements';
import edu_json from '../asset/data/Edu.json';
import { LargeExpandablePanel } from "./helper/uiBasicElements";


export function Skill(){
  return (
    <>
      <br/> <center><large><i  id="skills">SKILLS</i></large>  <br/>
      <i>Please refer to <a href="./asset/doc/CV_PeterHU.pdf"><img width= "18vw" src="/asset/photo/Logo/cv-blue.png" alt="cv"/></a>.</i></center> 
  </>
  )
}


function JardineScholarship(){
  return (
    <>
      [Merit-based, fully-funded] <a href="https://en.wikipedia.org/wiki/Jardine_Scholarship">Jardine Scholarship</a> | <a href="./asset/doc/Jardine_Certificate.jpg">certificate</a>.
    </>
  )
}


export function Education(){
  return(
    <>
    <center>
    <large><i>EDUCATION</i></large>
    </center>
    <br />

    <LargeExpandablePanel resource={edu_json}/>

    {/* <a href="https://www.cam.ac.uk/">
    <img width="27" height="24" src="./asset/photo/Logo/Cam.png" alt="Cambridge" /> 
    </a>
    <b> University of Cambridge </b>  &nbsp;
     <i>2025.10 - 2026.06</i><br />
    M.Eng. (Hons) <a href="https://www.cst.cam.ac.uk/">Computer Science</a>.<br />
    Selected from top undergrads, on par with the <b>M.Phil</b> in research depth and assessment rigor, stated by <a href="https://www.cst.cam.ac.uk/teaching/masters">the department</a>. <br />
    <JardineScholarship /> <br /> */}

    {/* <a href="https://www.cam.ac.uk/">
    <img width="27" height="24" src="./asset/photo/Logo/Cam.png" alt="Cambridge" /> 
    </a>
    <b> University of Cambridge </b>  &nbsp;
    <i>2022.10 - 2025.07</i><br />
    B.A. (Hons) <a href="https://www.cst.cam.ac.uk/">Computer Science</a><br />
    First-Class (72.4) | Dissertation (93.5) | <a href="https://peterhuistyping.github.io/Cambridge_CS_Tripos/">notes</a><br />
    <JardineScholarship /> <br /> */}

    {/* Very grateful for selected a Jardine Scholar and being awarded Jardine Scholarship (Merit-based, full-ride) to study Computer Science in University of Cambridge. I really love the academic atmosphere where I can pursue every exciting part of Computer Science.  */}

    {/* Xiamen University  */}
    {/* <a href="https://en.xmu.edu.cn">
    <img width="24" height="24" src="./asset/photo/Logo/xmu.png" alt="XMU"/>
    </a>
    <b> Universitas Amoiensis </b> &nbsp;
        <i>2021.09 - 2022.06</i> <br />
       B.Eng. undergrad in <a href="https://en.wikipedia.org/wiki/Software_engineering">Software Engineering</a> (withdrew after completing first year)<br /> 
      GPA: 3.91 / 4.0, rank: 1 / 173 (first term) |  88.2 (yearly) | <a href="asset/doc/XMU_Transcript.pdf">Transcript</a>  | Class Rep, ACM Team<br /> */}

    {/* I ranked 1 / 173 among the software engineering department in the first term. During this year at XMU, I learnt a lot around the Math and fundamental of Computer Science. */}

    {/* High School Diploma<br /> */}

    {/* <a href="https://en.wikipedia.org/wiki/Shanghai_Nanyang_Model_High_School">
    <img width="28" height="24" src="./asset/photo/Logo/NanyangHigh.png" alt="Nanyang"/>
    </a>
    <b>Nanyang Model High School </b> &nbsp;
        <i> 2018.09 - 2021.06</i><br />
        Physics Rep, research project leader, 
        awarded <a href="https://en.wikipedia.org/wiki/Shuping_Scholarship">ShuPing Scholarship</a> twice<br /> */}
        
    {/* <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i> */}
    {/* &emsp;&emsp; */}
    
    {/* <ShowDetailButton 
      title=" "
      mainText=
      {
          <>
          <img width="671" height="386 " src="./asset/photo/Profile/Cam.png" alt="Cam" />
          <br/>
          <img width="671" height="318 " src="./asset/photo/Profile/XMU.png" alt="XMU" />
          <br/>
          </>
      }
    /> */}
    </>
  )
}


export function Interest_extra(){
  return(
    <>
  <br/>   
  <large><i>INTERESTS AND EXTRACURRICULUM</i></large> 
  <br/>

  <HashLink to="/PhotoDisplay">Photography</HashLink>, Music, Swimming, Gym,    etc.  <br />  
  Society: <a href="https://www.ethics-in-mathematics.com/">Ethics in Mathematics.</a><br />
  <i>Economics-related: </i> Macro & Micro, Money Banking.<br />
  Volunteering (twice @ <a href="https://www.cst.cam.ac.uk/admissions/open-days/undergraduate">Departmental Open Days and Events</a>).<br />
    </>
  )
}