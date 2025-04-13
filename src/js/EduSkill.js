import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import {ShowDetailButton} from './helper/uiBasicElements';

export function Skill(){
  return (
    <>
      <br/> <center><large><i  id="skills">SKILLS</i></large>  <br/>
      <i>Please refer to <a href="./asset/doc/CV_PeterHU.pdf"><img width= "18vw" src="/asset/photo/Logo/cv-blue.png" alt="cv"/></a>.</i></center> 
  </>
  )
}


export function Education(){
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
    
    <ShowDetailButton 
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
    />
    <br/>
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
  Society: <a href="https://www.ethics-in-mathematics.com/">Ethics in Mathematics</a><br />
  <i>Economics Related Topics: </i> Macro & Micro, Money Banking<br />
    </>
  )
}