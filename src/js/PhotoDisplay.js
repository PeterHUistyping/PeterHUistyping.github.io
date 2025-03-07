/* All rights reserved. 2022-2025 (c) Peter HU */

import { useState, useEffect } from 'react';
// import { HashLink } from 'react-router-hash-link';
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"
import HorizontalScroll from "./helper/horizontalScroll";
// css file
import "./helper/css/sliding.css";


export function PhotoDisplay(){
    useEffect(() => {
            document.title = 'Photography - Peter HU';
    }, []);
    // add a toggle button to show the horizontal scroll bar
    const [show_horizontal_scroll , setShowHorizontalScroll] = useState(false);
    
    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />
     
    <br/><br/>

    <center>
    <h2>Moments  |  <button onClick={() => {setShowHorizontalScroll(! show_horizontal_scroll)}} 
    
        style={{
            backgroundColor: '#4A90E2',
            color: 'white',
            padding: '3px 6px',
            border: '#83789E',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            transition: 'background 0.3s'
        }} 
        onMouseOver={(e) => e.target.style.backgroundColor = '#6E6182'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4A90E2'}

    >📷 Gallery View</button> </h2> 

    <i>The best and most beautiful things in the world cannot be seen or even touched.<br/>
         They must be felt with the heart. - Helen Keller</i> <br/><br/>

 

    {
        show_horizontal_scroll && 
        <>
        <br/>
        <HorizontalScroll />
        </>
    }

    <br/>

    24 Dec <br></br>

    <img height="275" src="/asset/photo/Display/2024/241224-1.png" alt="241224-1" />
    <img height="275" src="/asset/photo/Display/2024/241224-2.png" alt="241224-2"/>
    <img height="275" src="/asset/photo/Display/2024/241224-3.png" alt="241224-3" />

    <br/><br/>

    Nov during Supo | Sep New Dorm<br/>
    <img height="280" src="/asset/photo/Display/2023/231106.png" alt="231106" />
    <img height="280" src="/asset/photo/Display/2023/230925.png" alt="230925" />

    <br/><br/>

    July | Jun  <br/>

    <img height="300" src="/asset/photo/Display/2023/230709.png" alt="230709" />
    <img height="300" src="/asset/photo/Display/2023/230702.png" alt="230702" />

    <img height="300" src="/asset/photo/Display/2023/230700.png" alt="230700" />
    <img height="300" src="/asset/photo/Display/2023/230619.png" alt="230619" />



    <br/><br/>

  
   
    Magdalene College Library | Source: 
    <a href="https://www.architecture.com/awards-and-competitions-landing-page/awards/riba-regional-awards/riba-east-award-winners/2022/magdalene-college-library">RIBA Award Winners</a> <br/>
    <img height="300" src="/asset/photo/Display/2023/MagdLib.png" alt="MagdLib" />

    <br/>
    

    </center>
    
    <Index_Footer />
    </motion.div>)
}

