import ScrollToTop from "../../../js/helper/ScrollToTop";
import Blog_Footer from "../../../js/helper/blog_footer";
import Blog_Top from "../../../js/helper/blog_top";
import Resource  from "./resource";
import ref from "../../../asset/data/Resource.json"
import camUn from "../../../asset/data/Resource_CamUn.json"
import { HashLink } from 'react-router-hash-link';
 
export function Blogref(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>
            <p id="resource"><strong><font size="+2"> Useful Resource and Reference for Computer Science📚</font></strong></p>
            <div class="sidebar">
                <HashLink to="/ref/#ref">📚Reference</HashLink>  
                <HashLink to="/ref/#camUn">📄Cambridge Exam</HashLink> 
            </div>
            <div class="content">
                <Resource id="ref"   resource={ref}/>   
                <br/><br/><br/>
                <h2 id="camUn">Cambridge Undergraduate Exam</h2>
                <Resource  resource={camUn}/>   
                <p>Disclaimer: <i>All rights belong to their respective owners. I do NOT own any of these contents.</i></p>      
            </div>
           </>
    </div> 
    <Blog_Footer />
    </ScrollToTop>
    )
}