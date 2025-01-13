/* All rights reserved. 2022-2025 (c) Peter HU */

import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
import React from "react";
import PreNextBlog from "../../js/helper/blog_pre_next";
 
// import Giscus from '@giscus/react';

// export default function MyApp() {
//   return (
//     <>
//     <br/>
//     <div>
//     <Giscus 
//         repo="PeterHUistyping/Supermarket-Management-System"
//         repo-id="R_kgDOHu_gIg"
//         category="Announcements"
//         category-id="DIC_kwDOHu_gIs4Cbimw"
//         mapping="specific"
//         term="Welcome to Supermarket-Management-System Discussions!"
//         strict="0"
//         reactions-enabled="1"
//         emit-metadata="0"
//         input-position="bottom"
//         theme="light"
//         lang="en"
//         loading="lazy"
//         crossorigin="anonymous"
//         />

// <Giscus id="comments"
//       repo="giscus/giscus-component"
//       repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
//       category="Announcements"
//       categoryId="DIC_kwDOF1L2fM4B-hVS"
//       mapping="specific"
//       term="Welcome to @giscus/react component!"
//       reactionsEnabled="1"
//       emitMetadata="0"
//       inputPosition="top"
//       theme="light"
//       lang="en"
//       loading="lazy"
//     />
//     </div>
//     </>
//   );
// }

export function Blog4(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
        <PreNextBlog currentID={4}/>
        
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
        <PreNextBlog currentID={4}/>
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}