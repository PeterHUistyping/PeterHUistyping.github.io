import Ongoing from '../asset/data/Ongoing_PrAs.json';
import past from '../asset/data/Past_PrAs.json';
import All_table from './helper/tableCommon';
import Computer_System from '../asset/data/Computer_System.json';
import Machine_Learning from '../asset/data/Machine_Learning.json';
function Ongoing_label(){
   return(
       <p id="ongoing_project"><b><i><center>Ongoing Project</center></i></b></p>
   )
}
function Past_label(){
   return(
       <p id="previous_project"><b><i><center>Previous Project</center></i></b></p>
   )
}

export default function PrAs_table(){
   return (
       <div>
       <p id="Computer_System"><b> <font size="+1"><center>Computer System Design</center></font></b></p>
       <All_table resource={Computer_System}/> 
       <p id="Machine_Learning"><b><font size="+1"><center>Machine Learning</center></font></b></p>
       <All_table resource={Machine_Learning}/> 
       <Ongoing_label /> 
       <All_table resource={Ongoing}/> 
       <Past_label /> 
       <All_table resource={past}/>
       </div>)
}
