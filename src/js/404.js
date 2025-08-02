/* All rights reserved. 2022-2025 (c) Peter HU */


import { useEffect } from "react";
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import Sidebar_Project from "./helper/project_sidebar"


export default function NotFound()
{
    useEffect(() => {
        document.title = 'Page not found - Peter HU';
    }, []);

    return(
        <>
        <Index_Top/>      
        <Sidebar_Project />
        <center>
        <br/>
        <br/>
        Sorry the webpage you want to reach has been moved or doesn't exist.
        {/* <a href="https://peterhuistyping.github.io">🏛️HOME</a> */}
        <br/>
        </center>
        <Index_Footer />
        </>
        
    )
}