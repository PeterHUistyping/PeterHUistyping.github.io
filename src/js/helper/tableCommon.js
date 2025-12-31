/* All rights reserved. 2022-2026 (c) Peter HU */
import React from 'react';
import AUTHOR_URLS from "../../asset/data/AuthorsURL.json";
// react-markdown is used to render markdown content
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'; 
import { StoryDescriptionButton, FetchJourneyMainText} from "./uiBasicElements";

// large screen
function Pic_Large(props){
    if(props.src)
    return( 
        <td class="table_project_photo" rowspan="2">
            <div>
                <img class="img_project" src={props.src}  alt={props.alt} loading="lazy"/>
            </div> 
        </td>
    )
    else
    return(
        <>  
            {/* hide this col. */}
            {/* <td class="table_without_photo">
            </td> */}
        </>
    )
}

function Pic(props){
    var w = window.innerWidth;
    if(w<800)
    return( 
        <td class="table_project_photo" rowspan="2">
            <div>
                <img class="img_project" src={props.src1}  alt={props.alt1} loading="lazy"/>
                {
                    props.src2 &&
                    <img class="img_project" src={props.src2}  alt={props.alt2} loading="lazy"/>
                }
            </div>
        </td>
    )
    else if(w>=800)
    return(
        <>
            {/* number of images == 0 */}
            {!props.src1 &&<>  <td></td> </>}

            {/* number of images >=1 */}
            {props.src1 && <>
                    <Pic_Large src={props.src1} alt={props.alt1} loading="lazy"/>
                    <Pic_Large src={props.src2} alt={props.alt2} loading="lazy"/>
                </>
            }
        </>
    )
}


function Intro_Des(props) {
    const descriptions = [props.Des1, props.Des2, props.Des3, props.Des4].slice(0, props.line);
    return (
        <div>
            {descriptions.map((desc, index) => (
                <div key={index}>
                    {/* {desc} */}
                    <ReactMarkdown 
                    remarkPlugins={[remarkMath, remarkGfm]} 
                    rehypePlugins={[rehypeKatex]} 
                    children={desc}
                    components={{
                    img:({node,...props})=><img style={{maxWidth:'80%', maxHeight:'60vh'}}{...props}/>,
                    p: ({ node, ...props }) => <p style={{ margin: 0 }} {...props} />,
                    }}
                    />
                </div>
            ))}
        </div>
    );
}

// function Intro_Des(props){
//     if(props.line==4)
//     return(
//         <div>{props.Des1} <br/>
//         {props.Des2} <br/>
//         {props.Des3} <br/>
//         {props.Des4} <br/></div>
//     )
//     if(props.line==3)
//     return(
//         <div>{props.Des1} <br/>
//         {props.Des2} <br/>
//         {props.Des3} <br/>
//         </div>
//     )
//     if(props.line==2)
//     return(
//         <div>{props.Des1} <br/>
//         {props.Des2} <br/>
//         </div>
//     )
//     if(props.line==1)
//     return(
//         <div>{props.Des1} <br/>
//        </div>
//     )
// }


function Italic_Intro(props){
    if(props.Italic)
        return(
            // style={{ color: "gray" }}
            <i>{props.Italic}</i>
        )
}


export function Processed_blog_link(props){
    /*
        Check if the link contains "http",
        if it does, return the link as is,
        if it doesn't, return the link with "/#/" added in front of it.
    */
    if(props.link && !props.link.includes("http")){
        return "/#/"+props.link
    }
    else{
        return props.link
    }
}   


function Blog_link(props){
    /*
        Check if the link contains "http",
        if it does, return the link as is,
        if it doesn't, return the link with "/#/" added in front of it.
    */
    // get string from Processed_blog_link
    const processed_link = Processed_blog_link({ link: props.link });
    return (
        <a href={processed_link} class="project-link">🌟 blog</a>
    )
    
    // if(props.link && !props.link.includes("http")){
    //     return (<a href={"/#/"+props.link} class="project-link">📝 blog</a>)
    // }
    // else{
    //     return (<a href={props.link} class="project-link">📝 blog</a>)
    // }
}


function GetCategory(props){
    // check props.Category is not empty
    if(props.Category){
        return (<>[<i>{props.Category}</i>]</>)
    }
    else{
        return (<> </>)
    }
}


function HightlightAuthor(props){
    // check if string contains "Zheyuan Hu" and highlight this substring to bold
    if(props.trimmedPart.includes("Zheyuan Hu")){
        return (
            <>
                <b>Zheyuan Hu</b> 
            </>
        );
    }
    else{
        var authorUrl = AUTHOR_URLS[0][props.trimmedPart] || "";
        return(
            <>
                 <a href={authorUrl} 
                 target="_blank" rel="noopener noreferrer" 
                 style={{fontStyle: props.is_supervising ? 'italic' : 'normal',
                    color: props.is_supervising ? '#1E90FF' : 'normal'
                    }}>
                  {props.trimmedPart}
                </a> 
            </>
        )
    }
}


function HightlightAuthorsURL(props){
    // create a mapping between author name and link
    if(props.author.includes("Zheyuan Hu")){
        // const parts = props.author.split("Zheyuan Hu");
        const parts = props.author.split(",");
        return (
      <>
        {parts.map((part, index) => {
            var trimmedPart = part.trim();
            var is_equal_contribution = trimmedPart.includes("†") ? "†" : "";
            // "AB †" -> "AB"
            var is_supervising = trimmedPart.includes("*") ? true : false;
            var trimmedPart2 = trimmedPart.replace(" †", "");
            var trimmedPart2 = trimmedPart2.replace(" *", "");
            return (
          <>
            <HightlightAuthor 
                trimmedPart={trimmedPart2}
                is_supervising={is_supervising}
            />{is_equal_contribution}
            {index < parts.length - 1 && ", "}
          </> 
        )
        })}
      </>
    );
    }
    else{
        return(
            <>
            {props.author}
            </>
        )
    }
}


function Intro(props){
    return(
        // span over all columns
        <td rowspan="2" colspan="3">
            <strong>{props.Title}  <GetCategory Category={props.Category}/><br/></strong>
            {props.author && <> <HightlightAuthorsURL author={props.author}/>.  <br/> </>}  

            {props.Published && <><b><i>{props.Published}</i></b><br/></>}
           
            <div style={{ color: "#787878" }}>
            {props.Time}   { props.Italic && <> ¦ <Italic_Intro Italic={props.Italic}/></> }
            </div>
            
            <Intro_Des 
            line={props.line}
            Des1={props.Des1}
            Des2={props.Des2}
            Des3={props.Des3}
            Des4={props.Des4}/>

            {props.Project && <> |  <a href={props.Project} class="project-link">🌐 project</a> </> }
            {props.Arxiv && <> | <a href={props.Arxiv} class="project-link">📎 arXiv</a>  </>}
            {props.PDF && <> |  <a href={props.PDF} class="project-link">📃 pdf</a> </> }
            {props.Github && <> | <a href={props.Github} class="project-link"><img width= "14vw" src="/asset/photo/Logo/github.svg" alt="github"/> code</a> </>}
            {props.Blog && <> | <Blog_link link={props.Blog}/></> } 
            {props.Dataset && <> | <a href={props.Dataset} class="project-link"><img width= "14vw" src="/asset/photo/Logo/dataset_blue.png" alt="dataset"/> dataset</a>  </>}
            {props.Video && <> | <a href={props.Video} class="project-link"><img width= "14vw" src="/asset/photo/Logo/video_icon.png" alt="video"/> video</a>  </> } 
            {props.More && <> |  <a href={props.More} class="project-link">🎁 more</a> </>}
            {/* ending mark if there's at least one attribute. */}
            {(props.Arxiv || props.Github || props.Blog || props.PDF || props.Video || props.More || props.Dataset || props.Project ) && <> | </> }
            <br/>
            {props.Journey && 
            <div style={{ width: "100%" , marginTop: "2px", marginLeft: "10px"}}>
            <StoryDescriptionButton 
                title={
                    <>
                        <b>About {props.JourneyCategory}</b> <i>{props.ShortTitle || props.Title}</i>
                    </>
                    }  
                mainText = {<FetchJourneyMainText Journey={props.Journey} />} 
                type = "Journey"
            />
            </div>
            }

            <br/>
        </td>
    )
}
 

function PicIntro_table(proxy){
    return(
        <tr>
            <Pic 
                src1={proxy.resource[proxy.id].pic1_src}
                alt1={proxy.resource[proxy.id].pic1_alt}
                src2={proxy.resource[proxy.id].pic2_src}
                alt2={proxy.resource[proxy.id].pic2_alt}/>
            {/* <Pic 
                src={proxy.resource[proxy.id].pic2_src}
                alt={proxy.resource[proxy.id].pic2_alt}/> */}
            <Intro 
            Title={proxy.resource[proxy.id].Title}
            Category={proxy.resource[proxy.id].Category}
            line={proxy.resource[proxy.id].line}
            Des1={proxy.resource[proxy.id].Des1}
            Des2={proxy.resource[proxy.id].Des2}
            Des3={proxy.resource[proxy.id].Des3}
            Des4={proxy.resource[proxy.id].Des4}
            Italic={proxy.resource[proxy.id].Italic}
            Time={proxy.resource[proxy.id].Time}
            Github={proxy.resource[proxy.id].Github}
            Blog={proxy.resource[proxy.id].Blog}
            PDF={proxy.resource[proxy.id].PDF}
            Video={proxy.resource[proxy.id].Video}
            More={proxy.resource[proxy.id].More}
            // research
            author={proxy.resource[proxy.id].author}
            Arxiv={proxy.resource[proxy.id].Arxiv}
            Dataset={proxy.resource[proxy.id].Dataset}
            Project={proxy.resource[proxy.id].Project}
            Published={proxy.resource[proxy.id].Published}
            ShortTitle={proxy.resource[proxy.id].ShortTitle}
            Journey={proxy.resource[proxy.id].Journey}
            JourneyCategory={proxy.resource[proxy.id].JourneyCategory}
            />      
        </tr>
    )
}


function Tbody(props){
    if (props.display_type === 'research') return (
        <tbody>
            <PicIntro_table id={props.id} resource={props.resource}/>
        </tbody>
    )
    else
    return(
        <tbody>
            <PicIntro_table id={props.id} resource={props.resource}/> 
        </tbody>
    )
}


export default function All_table(props){
    //const keys = [...Array(resource.length).keys()];
    var keys = [...Array(props.resource.length).keys()];
    var display_num = props.displayNum || keys.length; 
    keys = keys.slice(0, display_num);
    
    return(
    <table class="table_project">
        {keys.map((item)=>(
            <Tbody id={item} resource={props.resource} display_type={props.display_type}/>
        ))}  
    </table> 
    )
}