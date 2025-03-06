/* All rights reserved. 2022-2025 (c) Peter HU */


import { NavLink } from "react-router-dom"; 
import { HashLink } from 'react-router-hash-link';
import {ChangeBodyColor} from "./blog_top";
function Index_top(){
    return (
        <>
        <body_>   
        <div class="top">
            <ul>
                <li> 
                    <HashLink style={{ color: 'black' }} to="https://peterhuistyping.github.io/"><b style={{"font-family":"BrushScriptMT-embed"}}>Peter </b>HU's Website</HashLink>
                </li>
                <li>
                    <NavLink id="top_home" exact activeClassName='is-active' to="/">🏠HOME▾</NavLink>  
                    {/* <a href="/#">🏠HOME</a> */}
                    <ul>
                        <li>
                            <NavLink id="top_bio" exact activeClassName='is-active' to="/aboutme">👨‍💼Bio. </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                <NavLink id="top_res" exact activeClassName='is-active' to="/research">💭Research▾</NavLink> 
                    <ul>
                        <li>
                            <HashLink id="top_academia" exact activeClassName='is-active' to="/research/#academicResearch">academia </HashLink>
                        </li>
                        <li>
                            <HashLink id="top_industry" exact activeClassName='is-active' to="/research/#industryResearch">industry</HashLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink id="top_project" exact activeClassName='is-active' to="/project">🧑‍💻Projects▾</NavLink>  
                    {/* <HashLink to="/project/" >🧑‍💻Project▾</HashLink> */}
                    <ul>
                        <li> 
                            <NavLink id="top_award" exact activeClassName='is-active' to="/award">Awards</NavLink>  
                            {/* <HashLink to="/award/">Awards</HashLink> */}
                        </li>
                        <li>
                            <NavLink id="top_experience" exact activeClassName='is-active' to="/experience">Experience</NavLink>
                            {/* <HashLink to="/experience">Experience</HashLink>  */}
                        </li>
                    </ul>
                    {/* <ul>
                        <li> <HashLink to="/project/#ongoing_project">🆕Ongoing</HashLink> </li>
                        <li><HashLink to="/project/#previous_project">📖Previous</HashLink> </li>
                    </ul> */}
                </li>
                <li>
                    <NavLink id="top_blog" exact activeClassName='is-active' to="/Blog_Sorting">📝Blogs▾</NavLink>  
                    {/* <a href="/#/Blog_Sorting/">📝Blogs▾</a> */}
                    <ul>
                        <li> 
                            <NavLink id="top_ref" exact activeClassName='is-active' to="/ref">📚ref</NavLink>  
                            {/* <a href="/#/ref">📚Ref</a> */}
                        </li>
                        <li> 
                            <NavLink id="top_blog5" exact activeClassName='is-active' to="/blog5">⛵log</NavLink>  
                            {/* <a href="/#/blog5">⛵Update</a> */}
                        </li>
                    </ul>
                </li>
                <li> 
                    {/* <HashLink to="/#contact">📬Contact▾</HashLink> */}
                    <NavLink id="top_contact" exact activeClassName='is-active' to="/contact">📬Contact▾</NavLink>
                <ul>
                    <li><a href="./asset/doc/CV_PeterHU.pdf"><img width= "20vw" src="/asset/photo/Logo/cv-blue.png" alt="cv" title="CV"/></a></li>
                    <li><a href="https://github.com/PeterHUistyping"> <img width= "22vw" src="/asset/photo/Logo/github.svg" alt="github" title="Github"/></a></li>
                    {/* <li><a href="https://www.linkedin.com/in/peterhu2022/"> <img width= "22vw" src="/asset/photo/Logo/linkedin.svg" alt="linkedin"/></a></li> */}
                </ul>
                </li>
                 {/* <li><a href={window.location.href+"/#"}>🔝</a></li> */}
            </ul>
        </div>
        <br /><br />
    </body_>
    </>
    )
}
export default function Index_Top(){
    // ChangeBodyColor("#d9f2d9");
    ChangeBodyColor("#ffffff");

    var w = window.innerWidth;
    if( w>800 ){
      return(
        <Index_top/>

      )}
    else{
      return(
          <>
             <Index_top/>
            <br/> 
            <br/> 
          </>
      )}
}
