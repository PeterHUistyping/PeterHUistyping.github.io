export default function Index_Top(){
    return (
        <>
        <body_>   
        <div class="top">
            <ul>
                <li>
                    <a_ href="#"><i>Peter </i>HU's Website</a_>
                </li>
                <li>
                    <a href="http://PeterHUistyping.github.io">🏠HOME</a>
                </li>
                <li> <a href="#project">📊Project</a>
                    <ul>
                        <li> <a href="#ongoing_project">🆕Ongoing Project</a></li>
                        <li> <a href="#previous_project">📖Previous Project</a></li>
                    </ul>
                </li>
                <li><a href="https://github.com/PeterHUistyping">🖥️Github</a></li>
                <li><a href="/Blog_Sorting">📝Blog</a>
                    <ul>
                        <li> <a href="./asset/blog/blog5.html">⛵Update</a></li>
                    </ul>
                </li>
                <li><a href="#contact">📬Contact</a></li>
                <li><a href="#">⬆️Top</a></li>
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
     
    <p> University of Cambridge <br/>Computer Science <br/>Part IA</p> <br/><strong>Contact
        Details</strong><br/>
    Email: zh369@cam.ac.uk <br/> Phone: (+44) 07990 719841
    <br/><a href="./asset/doc/CV_PeterHU.pdf">CV</a> | <a
        href="https://www.linkedin.com/in/peterhu2022/">LinkedIn</a> | <a
        href="https://github.com/PeterHUistyping">Github</a>
    | More <br/>
</td>
      
    )
   
}