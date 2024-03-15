/* All rights reserved. 2022-2024 (c) Peter HU */


import All_table from './helper/tableCommon';
import Computer_System from '../asset/data/Computer_System.json';
import Machine_Learning from '../asset/data/Machine_Learning.json';
import Visual_Computing from '../asset/data/Visual_Computing.json';

 

export default function PrAs_table(){
   return (
       <div>
     <p id="Visual_Computing"><b> <font size="+1"><center>Visual Computing</center></font></b></p> 
       <All_table resource={Visual_Computing}/> 
       <center>
          See more → &nbsp;
            <a href="https://peterhuistyping.github.io/Visual_Computing">🌐 Projects</a>   |   
            <a href="https://github.com/PeterHUistyping/Visual_Computing">👨‍💻 Github</a>  <br></br>
       </center>

       <p id="Machine_Learning"><b><font size="+1"><center>Machine Learning</center></font></b></p>
       <All_table resource={Machine_Learning}/> 
       <center>
          See more → &nbsp;
            <a href="https://peterhuistyping.github.io/Machine_Learning_Guidance">🌐 Projects</a>  |  
            <a href="https://github.com/PeterHUistyping/Machine_Learning_Guidance">👨‍💻 Github</a>   <br></br>
       </center>

       <p id="Computer_System"><b> <font size="+1"><center>Computer System Design</center></font></b></p>        
       <All_table resource={Computer_System}/> 
       <center>
          See more → &nbsp;
            <a href="https://peterhuistyping.github.io/Computer_System_Guidance">🌐 Projects</a>   |   
            <a href="https://github.com/PeterHUistyping/Computer_System_Guidance">👨‍💻 Github</a>  <br></br>
       </center>

       </div>)
}
