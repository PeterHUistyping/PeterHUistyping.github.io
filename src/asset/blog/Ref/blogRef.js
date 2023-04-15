import ScrollToTop from "../../../js/helper/ScrollToTop";
import Blog_Footer from "../../../js/helper/blog_footer";
import Blog_Top from "../../../js/helper/blog_top";
import Resource  from "./resource";
export function Blogref(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>
            <Resource />
                
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}