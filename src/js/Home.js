 import HrAw_table from "./HrAw_Table";
 import PrAs_table from "./PrAs_Table";
 import Index_Footer from "./helper/index_footer";
 import Index_Top from "./helper/index_top";
 import { motion } from 'framer-motion'
export function Home() {
  return (
    <motion.div    > 
    <div>
    <Index_Top/>       
    <div class="h2_center">About Me</div>
    <div class="container">
        I am a Computer Science student studying at University of Cambridge. What I really enjoy is the beauty of
        Computer Science and how it can be applied in nearly all fields of life. I am open to new fields of area and
        enjoy exploring unknown features. The joy of improving myself step by step is what I enjoy.
    </div>

    <h2><b>WORK EXPERIENCE</b></h2>
    
    <b>GPU Software Engineer Intern </b><i> 2022.12- Present</i> <br />
    <img width="48" height="48" src="./asset/photo/Logo/Huawei.png" alt="Huawei"/> 
    Huawei Technologies Research & Development (UK) Ltd 		Cambridge, England, United Kingdom<br />
    Skills: C++ · CMake · Vulkan · GPU 3D Pipeline · GPU driver · Game Engines/ Unreal Engine ·  Gdb<br />
    
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
    See more on <a href="https://www.linkedin.com/in/peterhu2022/"> LinkedIn</a><br />
    
    
    <h2><b>TECHNICAL SKILLS</b></h2>
    ·C  ·C++ ·Java  ·OOP ·HTML/ CSS  ·CMake  ·Gdb  ·bash/shell  ·git  ·Algorithms and Data Structure <br />
    ·Database ·SQL  ·NoSQL  ·Latex  ·Functional Programming (OCaml) ·Digital Electronic<br />
    ·Python ·NumPy  ·Machine Learning  ·Deep Learning   ·Natural Language Processing  ·Computer Vision  <br />  
    ·Computer Graphics  ·Vulkan  ·GPU 3D Pipeline  ·GPU driver  ·Game Engines/ Unreal Engine<br />
    Development Tools Visual Studio Code, Visual Studio, Pycharm, Github, IntelliJ IDEA<br />
    ·Calculus  ·Linear Algebra  ·Discrete Math  ·Probability and Statistics  ·Abstract Algebra  ·Topology (basic)
    <br/>

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

