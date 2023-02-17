import ScrollToTop from "../helper/ScrollToTop";
import Blog_Footer from "../helper/blog_footer";
import Blog_Top from "../helper/blog_top";
export function Blog(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>

                <a href="#">See More on GitHub</a>
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}