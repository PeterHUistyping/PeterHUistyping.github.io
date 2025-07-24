/* All rights reserved. 2022-2025 (c) Peter HU */

import Sidebar_Project from "./helper/project_sidebar"
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
 
export default function Loading(){
    // 定义内联样式对象
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // height: '100vh'
    };

    const spinnerStyle = {
      border: '4px solid rgba(0, 0, 0, 0.1)',
      borderLeftColor: '#000',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      animation: 'spin 1s linear infinite',
      marginBottom: '16px'
    };

    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `;
    if (!document.querySelector('style[data-loading-spin]')) {
      style.setAttribute('data-loading-spin', '');
      document.head.appendChild(style);
    }

    return (
      <motion.div> 
      <Index_Top/> 
      <br/>
      <Sidebar_Project />
        {/* center the loading text */}
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        {/* <div style={{ textAlign: "center" }}>
          Loading... This may take a few seconds ... <br/>
        </div> */}
        {/* <br />  <br />   */}
         
        <div style={containerStyle}>
          <div style={spinnerStyle} />
          <p>Loading...</p>
          <p>Thank you for your patience!</p>
        </div>


        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  

      <Index_Footer />

      </motion.div>
    )
}

