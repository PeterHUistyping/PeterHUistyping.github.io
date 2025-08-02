/* All rights reserved. 2022-2025 (c) Peter HU */

import All_table from './helper/tableCommon';
import Computer_System from '../asset/data/Computer_System.json';
import Machine_Learning from '../asset/data/Machine_Learning.json';
import Visual_Computing from '../asset/data/Visual_Computing.json';
import { HashLink } from 'react-router-hash-link';
import Ongoing from '../asset/data/Ongoing_PrAs.json';
import past from '../asset/data/Past_PrAs.json';
import {Ongoing_label, Past_label} from './Project_Others';

export default function PrAs_table(){
   return (
       <div>
     <center>
        <p id="Visual_Computing"><b> <font size="+1" color="green">Visual Computing</font></b></p> 
        <a href="https://peterhuistyping.github.io/Visual_Computing" class="project-link">🌐 web</a>   |  <a href="https://github.com/PeterHUistyping/Visual_Computing" class="project-link">🖥️ github</a>
     </center>
     <br></br>
       <All_table resource={Visual_Computing}/> 
       {/* <center>
          See more → &nbsp;
       </center> */}
      
     <center>
        <p id="Machine_Learning"><b><font size="+1" color="#3824BD">Machine Learning</font></b></p>
        <a href="https://peterhuistyping.github.io/Machine_Learning_Guidance" class="project-link">🌐 web</a> | <a href="https://github.com/PeterHUistyping/Machine_Learning_Guidance" class="project-link">🖥️ github</a>
      </center>
      <br></br>
       <All_table resource={Machine_Learning}/> 
      
      <center>
        <p id="Computer_System"><b> <font size="+1" color='#8D6F64'>Computer System Design</font></b></p>        
        <a href="https://peterhuistyping.github.io/Computer_System_Guidance" class="project-link">🌐 web</a>   |   <a href="https://github.com/PeterHUistyping/Computer_System_Guidance" class="project-link">🖥️ github</a>
      </center>
       <All_table resource={Computer_System}/> 
    
       <p id="Others_mainpage"> <b> <font size="+1"><center><HashLink to="/project/others">Other Projects</HashLink></center></font></b></p>  
        
        <Ongoing_label />
        <All_table resource={Ongoing}/> 
        <Past_label />
        <All_table resource={past}/>

       </div>
      )
}
