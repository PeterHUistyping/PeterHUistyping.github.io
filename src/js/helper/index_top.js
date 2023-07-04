import { HashLink } from 'react-router-hash-link';
export default function Index_Top(){
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
                <li><HashLink to="/#project">📊Project</HashLink>
                    <ul>
                        <li> <HashLink to="/#ongoing_project">🆕Ongoing</HashLink> </li>
                        <li><HashLink to="/#previous_project">📖Previous</HashLink> </li>
                    </ul>
                </li>
                <li><a href="https://github.com/PeterHUistyping">🖥️Github</a></li>
                <li><a href="/#/Blog_Sorting/#welcome">📝Blog</a>
                    <ul>
                        <li> <a href="/#/ref">📚Ref</a></li>
                        <li> <a href="/#/blog5">⛵Update</a></li>
                    </ul>
                </li>
                 <li><HashLink to="/#contact">📬Contact </HashLink> </li>
                <li><a href="#">🔝Top</a></li>
            </ul>
        </div>
        <br /><br /><br /><br />
    </body_>
    <Profile/>
    </>
    )
}
function Profile(){
    return(
        <table class="table_profile">
        <tbody>
            <tr>
            <Profile1/>
            <Profile2/>
            </tr>
        </tbody>
    </table>
    )
}
function Profile1(){
    return(
        <td width="280" rowspan="1" height="300">
            <div> 
                    <img class="img_profile" src="./asset/photo/Peter_Hu.jpg" alt="Profile Photo"/>
            </div>
        </td>
      
    )
}
function Profile2(){
    return(
        <td width="280" text-align="center">
    <h1 id="contact"><i>Peter</i> HU </h1>
     
    <p> University of Cambridge <br/>Computer Science <br/>Part IB</p> <br/><strong>Contact
        Details</strong><br/>
    Email: zh369@cam.ac.uk <br/> Phone: (+44) 07990 719841
    <br/><a href="./asset/doc/CV_PeterHU.pdf">CV</a> | <a
        href="https://www.linkedin.com/in/peterhu2022/">LinkedIn</a> | <a
        href="https://github.com/PeterHUistyping">Github</a>
    | More <br/>
</td>
      
    )
   
}