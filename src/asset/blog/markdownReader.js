import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { useEffect, useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";


export function Blog(props){

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("asset/blog/markdown/blog" + props.id + props.name + ".md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);

    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>
            <div
            style={{
                border: 'hidden',
                borderRadius: '2vw',
                marginLeft: '5vw',
                marginTop: 50,
                width: '90vw',
            }}
        > 
        {/* <SyntaxHighlighter language="c"  showLineNumbers> */}
                <ReactMarkdown 
                remarkPlugins={[remarkMath]} 
                rehypePlugins={[rehypeKatex]} 
                children={content}
                components={{img:({node,...props})=><img style={{maxWidth:'80%', maxHeight:'60vh'}}{...props}/>}}
                />

            {/* </SyntaxHighlighter> */}
           </div>
           </>
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}