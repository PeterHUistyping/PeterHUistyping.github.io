/* All rights reserved. 2022-2024 (c) Peter HU */


import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
export function NotFound()
{
    return(
        <>
        <Index_Top/>      
        <center>
        <br/>
        <br/>
        Sorry the webpage you want to reach has been moved or doesn't exist.
        <a href="https://peterhuistyping.github.io">🏠HOME</a>
        </center>
        <Index_Footer />
        </>
        
    )
}