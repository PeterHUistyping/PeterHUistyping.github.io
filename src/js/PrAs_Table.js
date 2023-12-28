import All_table from './helper/tableCommon';
import Computer_System from '../asset/data/Computer_System.json';
import Machine_Learning from '../asset/data/Machine_Learning.json';
import Visual_Computing from '../asset/data/Visual_Computing.json';

 

export default function PrAs_table(){
   return (
       <div>
          <p id="Visual_Computing"><b> <font size="+1"><center>Visual Computing</center></font></b></p> 
       <center>
            <a href="https://peterhuistyping.github.io/Visual_Computing">🌐 Collection of Computer System Projects</a>   |   
            <a href="https://github.com/PeterHUistyping/Visual_Computing">👨‍💻 Github</a>  <br></br>
       </center>
       
       <All_table resource={Visual_Computing}/> 

       <p id="Machine_Learning"><b><font size="+1"><center>Machine Learning</center></font></b></p>
       <center>
            <a href="https://peterhuistyping.github.io/Machine_Learning_Guidance">🌐 Collection of Machine Learning Projects</a>  |  
            <a href="https://github.com/PeterHUistyping/Machine_Learning_Guidance">👨‍💻 Github</a>   <br></br>
       
       </center>
       <All_table resource={Machine_Learning}/> 


       <p id="Computer_System"><b> <font size="+1"><center>Computer System Design</center></font></b></p> 
       <center>
            <a href="https://peterhuistyping.github.io/Computer_System_Guidance">🌐 Collection of Computer System Projects</a>   |   
            <a href="https://github.com/PeterHUistyping/Computer_System_Guidance">👨‍💻 Github</a>  <br></br>
       </center>
       
       <All_table resource={Computer_System}/> 
       
       </div>)
}
