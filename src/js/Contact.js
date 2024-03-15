/* All rights reserved. 2022-2024 (c) Peter HU */


import Sidebar_Project from "./helper/project_sidebar"

import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import React from "react";
import {Profile} from "./Home";
 
export function Contact(){
    return (
      <motion.div> 
      <Index_Top/> 
      <br/>
      <Sidebar_Project />

        <Profile/>

        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  

      <Index_Footer />

      </motion.div>
    )
}

