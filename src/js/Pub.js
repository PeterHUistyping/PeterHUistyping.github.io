/* All rights reserved. 2022-2024 (c) Peter HU */


import Pub_table from "./Pub_Table";
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"

export function Publication(){
    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />
     
    <div class="content">
        <>
        {/* Honors_and_awards */}
        <h2 id="project"><b>PUBLICATION</b></h2>
        <Pub_table />
        
        </>
    </div>

    <Index_Footer />
    </motion.div>)
}

