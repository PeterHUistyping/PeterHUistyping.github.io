/* All rights reserved. 2022-2024 (c) Peter HU */


import PrAs_table from "./PrAs_Table";
import Sidebar_Project from "./helper/project_sidebar"

import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
 
export function Project(){
    return (
    <motion.div> 
    <Index_Top/> 
    <Sidebar_Project />
    <h2 id="project"><b>PROJECTS and ASSIGNMENTS</b></h2>
    
    <div class="content">
        <>   
        {/*  Project_and_assignment   */}
        <PrAs_table />
        </>
    </div>

    <Index_Footer />
    </motion.div>)
}

