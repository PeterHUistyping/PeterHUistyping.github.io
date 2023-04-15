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
    
    <h2><b>TECHNICAL SKILLS</b></h2>
    Basic Skill <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;  ·C &nbsp;&nbsp;&nbsp;&nbsp;  ·C++ &nbsp;&nbsp;&nbsp;&nbsp;  ·Java &nbsp;&nbsp;&nbsp;&nbsp;  ·OOP &nbsp;&nbsp;&nbsp;&nbsp;  ·CMake &nbsp;&nbsp;&nbsp;&nbsp;  ·Gdb &nbsp;&nbsp;&nbsp;&nbsp;  ·Algorithms and Data Structure &nbsp;&nbsp;&nbsp;&nbsp;  ·Functional Programming (OCaml)  <br />
    Front-End <br/> 
    &nbsp;&nbsp;&nbsp;&nbsp;  ·HTML/ CSS &nbsp;&nbsp;&nbsp;&nbsp;  ·React &nbsp;&nbsp;&nbsp;&nbsp;  ·Latex Back-End &nbsp;&nbsp;&nbsp;&nbsp;  ·Database &nbsp;&nbsp;&nbsp;&nbsp;  ·SQL &nbsp;&nbsp;&nbsp;&nbsp;  ·NoSQL <br />
    Data Sci <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;  ·Python &nbsp;&nbsp;&nbsp;&nbsp;  ·NumPy &nbsp;&nbsp;&nbsp;&nbsp;  ·Machine Learning &nbsp;&nbsp;&nbsp;&nbsp;  ·Deep Learning &nbsp;&nbsp;&nbsp;&nbsp;  ·Natural Language Processing &nbsp;&nbsp;&nbsp;&nbsp;  ·Computer Vision <br />
    Graphics <br/> 
    &nbsp;&nbsp;&nbsp;&nbsp;  ·Vulkan &nbsp;&nbsp;&nbsp;&nbsp;  ·Graphics Pipeline &nbsp;&nbsp;&nbsp;&nbsp;  ·GPU driver &nbsp;&nbsp;&nbsp;&nbsp;  ·Game Engines/ Unreal Engine Unity &nbsp;&nbsp;&nbsp;&nbsp;  ·C#<br />
    Math <br/> 
    &nbsp;&nbsp;&nbsp;&nbsp;  ·Calculus &nbsp;&nbsp;&nbsp;&nbsp;  ·Linear Algebra &nbsp;&nbsp;&nbsp;&nbsp;  ·Discrete Math &nbsp;&nbsp;&nbsp;&nbsp;  ·Probability and Statistics &nbsp;&nbsp;&nbsp;&nbsp;  ·Abstract Algebra &nbsp;&nbsp;&nbsp;&nbsp;  ·Topology (basic) <br />
    Operating System <br/> 
    &nbsp;&nbsp;&nbsp;&nbsp;  ·Process Scheduling, Memory (Segment, Page, VM), I/O, File, Linux &nbsp;&nbsp;&nbsp;&nbsp;  ·bash/shell &nbsp;&nbsp;&nbsp;&nbsp;  ·Digital Electronic <br />
    Development Tools <br/> 
    &nbsp;&nbsp;&nbsp;&nbsp;  ·git (Version Control), CI/CD pipeline, Docker, Visual Studio, VS Code, Pycharm, Github/Gitlab, IntelliJ IDEA.<br />
 
    <h2><b>WORK EXPERIENCE</b></h2>
    
    <b>GPU Software Engineer Intern </b><i> 2022.12- Present</i> <br />
    <img width="48" height="48" src="./asset/photo/Logo/Huawei.png" alt="Huawei"/> 
    Huawei Technologies Research & Development (UK) Ltd 		Cambridge, England, United Kingdom<br />
    Skills: C++ &nbsp;&nbsp;&nbsp;&nbsp;  · CMake &nbsp;&nbsp;&nbsp;&nbsp;  · Vulkan &nbsp;&nbsp;&nbsp;&nbsp;  · GPU 3D Pipeline &nbsp;&nbsp;&nbsp;&nbsp;  · GPU driver &nbsp;&nbsp;&nbsp;&nbsp;  · Game Engines/ Unreal Engine &nbsp;&nbsp;&nbsp;&nbsp;  ·  Gdb<br />
    
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

