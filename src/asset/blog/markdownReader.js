import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { useEffect, useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Giscus from '@giscus/react';

export default function Comments() {
    return (
      <>
      <br/>
      <div>
      <Giscus 
          src="https://giscus.app/client.js"
          repo="PeterHUistyping/PeterHUistyping.github.io"
          repo-id="R_kgDOH2ed3A"
          category="Blog"
          category-id="DIC_kwDOH2ed3M4CbirX"
          mapping="pathname"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="bottom"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
          crossorigin="anonymous"
          />
      </div>
      </>
    );
  }

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
           <Comments id={props.id} name={props.name}/> 
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}