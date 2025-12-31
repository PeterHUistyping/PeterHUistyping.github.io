/* All rights reserved. 2022-2026 (c) Peter HU */


import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"

import Ongoing from '../asset/data/Ongoing_PrAs.json';
import past from '../asset/data/Past_PrAs.json';
import All_table from './helper/tableCommon';
 
export function Ongoing_label(){
   return(
       <p id="ongoing_project"><b><i><center>--- Ongoing ---</center></i></b></p>
   )
}

export function Past_label(){
   return(
       <p id="previous_project"><b><i><center>--- Previous ---</center></i></b></p>
   )
}

export default function Project_Others(){
    return (
    <motion.div> 
    <div>
    <Index_Top/> 

    <Sidebar_Project />
        <div class="content">
        <h2><b>Other Projects</b></h2>

        <Ongoing_label /> 
        <All_table resource={Ongoing}/> 
        <Past_label /> 
        <All_table resource={past}/>
      
        </div>
    </div>

    <Index_Footer />
    </motion.div>)
}

