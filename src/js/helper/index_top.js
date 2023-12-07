import { NavLink } from "react-router-dom"; 
import {ChangeBodyColor} from "./blog_top";
function Index_top(){
    return (
        <>
        <body_>   
        <div class="top">
            <ul>
                <li> 
                    <NavLink style={{ color: 'black' }} to="/"><i>Peter </i>HU's Website</NavLink>
                </li>
                <li>
                    <a href="http://PeterHUistyping.github.io/">🏠HOME</a>
                </li>
                <li><a  href="/project">🧑‍💻Project▾</a>
                    <ul>
                        <li> <NavLink to="/award">Award</NavLink> </li>
                        <li><NavLink to="/experience">Experience</NavLink> </li>
                    </ul>
                    {/* <ul>
                        <li> <NavLink to="/project/#ongoing_project">🆕Ongoing</NavLink> </li>
                        <li><NavLink to="/project/#previous_project">📖Previous</NavLink> </li>
                    </ul> */}
                </li>
                <li><a href="/Blog_Sorting">📝Blog▾</a>
                    <ul>
                        <li> <a href="/ref">📚Ref</a></li>
                        <li> <a href="/blog5">⛵Update</a></li>
                    </ul>
                </li>
                <li><NavLink to="/#contact">📬Contact▾</NavLink>
                <ul>
                    <li><a href="https://github.com/PeterHUistyping"> <img width= "22vw" src="/asset/photo/Logo/github.svg" alt="github"/></a></li>
                    <li><a href="https://www.linkedin.com/in/peterhu2022/"> <img width= "22vw" src="/asset/photo/Logo/linkedin.svg" alt="linkedin"/></a></li>
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
    ChangeBodyColor("#d9f2d9");
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
