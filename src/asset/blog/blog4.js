import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
import React from "react";
 
 
export function Blog4(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>
            <h1 id="project_database">Database Management System Design Project (C++)</h1>

            
    <h1 id="cmu15445_database">CMU15-445 <em>Database</em> Project</h1>
    <p>Database Design Project (C++)<br />

        Course Link: </p>
    <p>https://15445.courses.cs.cmu.edu/fall2021/assignments.html </p>
    <p>Project Link: </p>
    <p>https://github.com/cmu-db/bustub </p>

    <frameset cols="90%,0.5%">
        <frame src=" https://peterhuistyping.github.io/CMU15-445_Database_Management_System/"></frame>
    </frameset> 

    <br/>
    <br/>
    <a href="https://github.com/PeterHUistyping/CMU15-445_Database_Management_System">See More on GitHub</a>
            </>

        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}