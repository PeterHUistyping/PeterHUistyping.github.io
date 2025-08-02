/* All rights reserved. 2022-2025 (c) Peter HU */

import { useEffect } from "react";
import ScrollToTop from "../../../js/helper/ScrollToTop";
import Blog_Footer from "../../../js/helper/blog_footer";
// import Blog_Top from "../../../js/helper/blog_top";
import Index_Top from "../../../js/helper/index_top";
import Resource  from "./resource";
import ref from "../../../asset/data/Resource.json"
import camUn from "../../../asset/data/Resource_CamUn.json"
import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom"; 

export default function Blogref(){
    useEffect(() => {
            document.title = 'Reference - Peter HU';
    }, []);
    return(
    <ScrollToTop> 
    <div>
        {/* <Blog_Top/> */}
        <Index_Top type="blog"/>
            <>
            <p id="resource"><strong><font size="+2"> Useful Resource and Reference for Computer Science📚</font></strong></p>
            <div class="sidebar">
                <HashLink to="/ref/#ref">📚Reference</HashLink>  
                <HashLink to="/ref/#camUn">📄Cam Exam</HashLink> 
            </div>
            <div class="content">

            🔭 Collections of projects & reference by domain, some done by me. <br/><br/>
              

            <center>
                
                <strong><font color="green">Visual Computing</font>:</strong> <a href="https://peterhuistyping.github.io/Visual_Computing" class="project-link"> 🌐 </a>  | 
                <a href="https://github.com/PeterHUistyping/Visual_Computing" class="project-link"> 🖥️ </a>

                &ensp;&ensp;&ensp;   &ensp;&ensp;&ensp;
                
                <strong><font color="#3824BD">Machine Learning</font>:</strong> <a href="https://peterhuistyping.github.io/Machine_Learning_Guidance" class="project-link"> 🌐 </a>  |  
                <a href="https://github.com/PeterHUistyping/Machine_Learning_Guidance" class="project-link"> 🖥️ </a>     

                &ensp;&ensp;&ensp;  &ensp;&ensp;&ensp;
                
                
                <strong><font color="#8D6F64">Computer System</font>:</strong> <a href="https://peterhuistyping.github.io/Computer_System_Guidance" class="project-link"> 🌐 </a>   |   
                <a href="https://github.com/PeterHUistyping/Computer_System_Guidance" class="project-link"> 🖥️ </a>    
            </center>
                <br/>
                and many other projects scattered in repo waited to be explored:)<br/>

                <br></br>   

                <h2> Others</h2>
                <Resource id="ref"   resource={ref}/>   
                <br/><br/><br/>
                <h2 id="camUn">Cambridge Undergraduate</h2>
                <Resource  resource={camUn}/>   
                <p>Disclaimer: <i>For certain materials, all rights belong to their respective owners. I do NOT own any of these contents.</i></p>      
            </div>
           </>
    </div> 
    <Blog_Footer />
    </ScrollToTop>
    )
}