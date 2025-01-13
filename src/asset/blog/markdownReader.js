/* All rights reserved. 2022-2025 (c) Peter HU */

import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { useEffect, useState } from "react";
import 'katex/dist/katex.min.css'
import remarkGfm from 'remark-gfm'
import PreNextBlog from "../../js/helper/blog_pre_next";
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

        <PreNextBlog currentID={props.id}/>

        <div style={{
            border: 'hidden',
            borderRadius: '2vw',
            marginLeft: '5vw',
            marginTop: 50,
            width: '90vw',
        }}
        > 
        
        {/* <SyntaxHighlighter language="c"  showLineNumbers> */}
                <ReactMarkdown 
                remarkPlugins={[remarkMath, remarkGfm]} 
                rehypePlugins={[rehypeKatex]} 
                children={content}
                components={{img:({node,...props})=><img style={{maxWidth:'80%', maxHeight:'60vh'}}{...props}/>}}
                />

            {/* </SyntaxHighlighter> */}
           </div>
        <PreNextBlog currentID={props.id}/>

        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}