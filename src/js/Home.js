 import HrAw_table from "./HrAw_Table";
 import PrAs_table from "./PrAs_Table";
 import Index_Footer from "./helper/index_footer";
 import Index_Top from "./helper/index_top";
 import { motion } from 'framer-motion'
 function popup() {
  alert("What I really enjoy is the beauty of science and how it can be applied in nearly all fields of life.\nI am open to new fields of area and enjoy exploring unknown features.\n")
}

export function Home() {
  return (
    <motion.div    > 
    <div>
    <Index_Top/>       
    <div class="h2_center" onClick={() => {popup()}}>About Me 👇</div>
    <div class="aboutMeContainer">
        Computer Science undergraduate at University of Cambridge.        <br/> 
        Strong background and interest in Math, Algorithms and System related fields.<br/>
        Exploring areas in Computer System, Graphic and Machine Learning-Data Science, etc.    
    </div>
    <center>
    {/* <embed src="asset/doc/CV_PeterHU.pdf"  width="800px" height="600px" /> */}
    </center>
    <h2><b>TECHNICAL SKILLS</b></h2>
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
    
    
   

    <h2 id="project"><b>HONORS and AWARDS</b></h2>
    <HrAw_table />
 
    <h2 id="project_sub"><b>PROJECT and ASSIGNMENT</b></h2>
    <PrAs_table />
    
    <h2><b>INTEREST AND EXTRACURRICULAR ACTIVITIES </b></h2>
    Music, Swimming, Yoga, Gym, Helping others etc.  |  Society Joined: Ethics in Mathematics<br />
    <strong>Economics Related Topics: </strong> Macro & Micro, Money Banking<br />

  
    <Index_Footer />
    </div>
    </motion.div>

  );
}

