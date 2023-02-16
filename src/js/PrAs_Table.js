import ongoing from '../../public/asset/data/Ongoing_PrAs.json';
import past from '../../public/asset/data/Past_PrAs.json';
import {All_table} from './helper/tableCommon';
function Ongoing_label(){
   return(
       <p id="ongoing_project"><b><i>Ongoing Project</i></b></p>
   )
}
function Past_label(){
   return(
       <p id="previous_project"><b><i>Previous Project</i></b></p>
   )
}

export default function PrAs_table(){
   return (
       <div>
       <Ongoing_label /> 
       <All_table resource={ongoing}/> 
       <Past_label /> 
       <All_table resource={past}/>
       </div>)
}
