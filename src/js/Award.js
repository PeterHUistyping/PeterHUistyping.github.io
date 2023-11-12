import HrAw_table from "./HrAw_Table";

import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"

export function Award(){
    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />
     
    <div class="content">
        <>
        {/* Honors_and_awards */}
        <h2 id="project"><b>HONORS and AWARDS</b></h2>
        <HrAw_table />
        
        </>
    </div>

    <Index_Footer />
    </motion.div>)
}

