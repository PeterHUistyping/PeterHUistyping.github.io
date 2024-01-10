import { HashLink } from 'react-router-hash-link';
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"

export function PhotoDisplay(){
    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />
     
     <br/><br/>
     
    <center>
    <h2>Moments</h2>

    Nov during Supo | Sep New Dorm<br/>
    <img height="300" src="/asset/photo/Display/2023/231106.png" alt="231106" />
    <img height="300" src="/asset/photo/Display/2023/230925.png" alt="230925" />

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

