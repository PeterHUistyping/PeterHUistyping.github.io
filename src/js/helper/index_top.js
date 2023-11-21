import { HashLink } from 'react-router-hash-link';
import {ChangeBodyColor} from "./blog_top";
function Index_top(){
    return (
        <>
        <body_>   
        <div class="top">
            <ul>
                <li> 
                    <HashLink style={{ color: 'black' }} to="/#"><i>Peter </i>HU's Website</HashLink>
                </li>
                <li>
                    <a href="http://PeterHUistyping.github.io/#">🏠HOME</a>
                </li>
                <li><HashLink to="/project/">🧑‍💻Project▾</HashLink>
                    <ul>
                        <li> <HashLink to="/award/">Award</HashLink> </li>
                        <li><HashLink to="/experience">Experience</HashLink> </li>
                    </ul>
                    {/* <ul>
                        <li> <HashLink to="/project/#ongoing_project">🆕Ongoing</HashLink> </li>
                        <li><HashLink to="/project/#previous_project">📖Previous</HashLink> </li>
                    </ul> */}
                </li>
                <li><a href="/#/Blog_Sorting/">📝Blog▾</a>
                    <ul>
                        <li> <a href="/#/ref">📚Ref</a></li>
                        <li> <a href="/#/blog5">⛵Update</a></li>
                    </ul>
                </li>
                <li><HashLink to="/#contact">📬Contact▾</HashLink>
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
