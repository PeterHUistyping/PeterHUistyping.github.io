/* All rights reserved. 2022-2025 (c) Peter HU */
import React from 'react';
import AUTHOR_URLS from "../../asset/data/AuthorsURL.json";

// large screen
function Pic_Large(props){
    if(props.src)
    return( 
        <td class="table_project_photo" rowspan="2">
            <div>
                <div>
                <img class="img_project" src={props.src}  alt={props.alt} loading="lazy"/>
                </div>
            </div> 
        </td>
    )
    else
    return(
        <td class="table_without_photo" rowspan="2">
        <div>
            <div>
          
            </div>
        </div> 
    </td>
    )
}

function Pic(props){
    var w = window.innerWidth;
    if(props.src1 && props.src2 && w<800 )
    return( 
        <td class="table_project_photo" rowspan="2">
            <div>
                <div>
                <img class="img_project" src={props.src1}  alt={props.alt1} loading="lazy"/>
                </div>
                <div>
                <img class="img_project" src={props.src2}  alt={props.alt2} loading="lazy"/>
                </div>
            </div> 
        </td>
    )
    else if(w>=800 )
    return(
        <>
            <Pic_Large  src={props.src1} alt={props.alt1}/>
            <Pic_Large  src={props.src2} alt={props.src2}/>
        </>
    )
    else
    return (
    <>
        <Pic_Large  src={props.src1} alt={props.alt1}/>
    </>
)
}


function Intro_Des(props){
    if(props.line==4)
    return(
        <div>{props.Des1} <br/>
        {props.Des2} <br/>
        {props.Des3} <br/>
        {props.Des4} <br/></div>
    )
    if(props.line==3)
    return(
        <div>{props.Des1} <br/>
        {props.Des2} <br/>
        {props.Des3} <br/>
        </div>
    )
    if(props.line==2)
    return(
        <div>{props.Des1} <br/>
        {props.Des2} <br/>
        </div>
    )
    if(props.line==1)
    return(
        <div>{props.Des1} <br/>
       </div>
    )
}


function Italic_Intro(props){
    if(props.Italic)
        return(
            // style={{ color: "gray" }}
            <i>{props.Italic}</i>
        )
}


function Blog_link(props){
    if(props.link){
        return (<a href={"/#/"+props.link} class="project-link">📝 blog</a>)
    }
    else{
        return (<a href={props.link} class="project-link">📝 blog</a>)
    }
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
                 <a href={authorUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
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
            var trimmedPart2 = trimmedPart.replace(" †", "");
            return (
          <>
            <HightlightAuthor trimmedPart={trimmedPart2}/>{is_equal_contribution}
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
        <td rowspan="2">
            <strong>{props.Title}  <GetCategory Category={props.Category}/><br/></strong>
            {props.author && <> <HightlightAuthorsURL author={props.author}/>  <br/> </>}  
            <Intro_Des 
            line={props.line}
            Des1={props.Des1}
            Des2={props.Des2}
            Des3={props.Des3}
            Des4={props.Des4}/>

            <div style={{ color: "#787878" }}>
            {props.Time}   { props.Italic && <> ¦ <Italic_Intro Italic={props.Italic}/></> }
            </div>

            {props.Project && <> |  <a href={props.Project} class="project-link">project</a> </> }
            {props.Arxiv && <> | <a href={props.Arxiv} class="project-link">arXiv</a>  </>}
            {props.PDF && <> |  <a href={props.PDF} class="project-link">pdf</a> </> }
            {props.Github && <> | <a href={props.Github} class="project-link"><img width= "13vw" src="/asset/photo/Logo/github.svg" alt="github"/> code</a> </>}
            {props.Blog && <> | <Blog_link link={props.Blog}/></> } 
            {props.Dataset && <> | <a href={props.Dataset} class="project-link">dataset</a>  </>}
            {props.Video && <> | <a href={props.Video} class="project-link">video</a>  </> } 
            {props.More && <> |  <a href={props.More} class="project-link">more</a> </>}
            {/* ending mark if there's at least one attribute. */}
            {(props.Arxiv || props.Github || props.Blog || props.PDF || props.Video || props.More || props.Dataset || props.Project ) && <> | </> }
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
    const keys = [...Array(props.resource.length).keys()];
    return(
    <table class="table_project">
        {keys.map((item)=>(
            <Tbody id={item} resource={props.resource} display_type={props.display_type}/>
        ))}  
    </table> 
    )
}