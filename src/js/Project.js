import HrAw_table from "./HrAw_Table";
import PrAs_table from "./PrAs_Table";

import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link';

export function Project(){
    return (
    <motion.div> 
    <div>
    <Index_Top/> 

    <h2 id="project"><b>HONORS and AWARDS</b></h2>
    <HrAw_table />
 
    <h2 id="project_sub"><b>PROJECTS and ASSIGNMENTS</b></h2>
    <PrAs_table />
    
    </div>
    <Index_Footer />
    </motion.div>)
}