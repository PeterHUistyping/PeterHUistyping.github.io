 import Index_Footer from "./helper/index_footer";
 import Index_Top from "./helper/index_top";
 import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link';

 function popup() {
  alert("What I really enjoy is the beauty of science and how it can be applied in nearly all fields of life.\nI am open to new fields of area and enjoy exploring unknown features.\n")
}

export function Home() {
  return (
    <motion.div> 
    <div>
    <Index_Top/> 
    <Profile/>

    {/* <div class="sidebar">
                <HashLink to="/#skills">📚Skills</HashLink>  
                <HashLink to="/ref/#camUn">📄Cambridge Exam</HashLink> 
    </div> */}
    {/* <div class="content"> */}
    <div class="h2_center" onClick={() => {popup()}}>About Me 👇</div>
    <div class="aboutMeContainer">
        Computer Science undergraduate at University of Cambridge.        <br/> 
        Strong background and interest in Math, Algorithms and System related fields.<br/>
        Exploring areas in Computer System, Graphic and Machine Learning-Data Science, etc.    
    </div>
    <center>
    {/* <embed src="asset/doc/CV_PeterHU.pdf"  width="800px" height="600px" /> */}
    </center>
    <h2  id="skills"><b>TECHNICAL SKILLS</b></h2>
    <i>Please refer to SKILLS section in  <a href="./asset/doc/CV_PeterHU.pdf">CV</a>.</i>
 
    <h2><b>WORK EXPERIENCE</b></h2>
    
    <b>GPU Software Engineer Intern </b><i> 2022.12- Present</i> <br />
    <img width="48" height="48" src="./asset/photo/Logo/Huawei.png" alt="Huawei"/> 
    Huawei Technologies Research & Development (UK) Ltd 		Cambridge, England, United Kingdom<br />
    <br/><i>Please refer to EXPERIENCE section in <a href="./asset/doc/CV_PeterHU.pdf">CV</a>.</i>
    <h2><b>EDUCATION BACKGROUND</b></h2>
    <b>University of Cambridge </b><i> 2022.10 - Present</i><br />
    <img width="54" height="48" src="./asset/photo/Logo/Cam.png" alt="Cambridge" /> 
    Undergraduate, Computer Science<br />
    Fully supported by Jardine Scholarship.<br />
    <br/>
    <b>Xiamen University </b><i> 2021.09 - 2022.06</i><br />
    <img width="48" height="48" src="./asset/photo/Logo/xmu.png" alt="XMU"/> 
    First year of Undergraduate Program, Software Engineering<br />
    GPA: 3.91 / 4.0 (the first term), 88/100 (the whole year)<br />
    Class Rep, ACM Team training.<br />
    <br/>
    <b>Nanyang Model High School </b> <i> 2018.09 - 2021.06</i><br />
    High School Diploma<br />
    Physics Rep, Leader of a research project. I have been awarded ShuPing Scholarship twice.<br />
    <br></br>
    <i>See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a></i><br />

    <h2 id="project"><b><HashLink to="/project">AWARDS and PROJECTS 📊</HashLink></b></h2>  
    
    <h2><b>INTEREST AND EXTRACURRICULAR ACTIVITIES </b></h2>
    Music, Swimming, Yoga, Gym, Helping others etc.  |  Society Joined: Ethics in Mathematics<br />
    <strong>Economics Related Topics: </strong> Macro & Micro, Money Banking<br />

    </div>
    <Index_Footer />
    {/* </div> */}
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
      <td width="280" rowspan="1" height="300">
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
  Email: zh369@cam.ac.uk <br/> Phone: (+44) 07990 719841
  <br/><a href="./asset/doc/CV_PeterHU.pdf">CV</a> | <a
      href="https://www.linkedin.com/in/peterhu2022/">LinkedIn</a> | <a
      href="https://github.com/PeterHUistyping">Github</a> |
       More <br/>
</td>
    
  )
 
}