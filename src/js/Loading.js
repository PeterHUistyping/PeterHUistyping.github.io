/* All rights reserved. 2022-2025 (c) Peter HU */

import Sidebar_Project from "./helper/project_sidebar"
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
 
export default function Loading(){
    return (
      <motion.div> 
      <Index_Top/> 
      <br/>
      <Sidebar_Project />
        {/* center the loading text */}
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        <div style={{ textAlign: "center" }}>
          Loading... This may take a few seconds ... <br/>
        </div>
        <br />  <br />   
        <div style={{ textAlign: "center" }}>
          Please wait as the page loads, thank you for your patience!
        </div>

        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  

      <Index_Footer />

      </motion.div>
    )
}

