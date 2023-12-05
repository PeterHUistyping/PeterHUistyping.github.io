import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { useEffect, useState } from "react";
export function Blog(){
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("asset/blog/markdown/blogTest.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);

    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={content}/>
                
                <a href="#">See More on GitHub</a>
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}