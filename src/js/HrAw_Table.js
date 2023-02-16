import React from "react";
import ReactDOM from 'react-dom/client';
import '../css/style.css'
function Pic(props){
    if(props.src)
    return( 
        <td class="table_pastproject_photo" rowspan="2">
            <div>
                <div>
                <img class="img_pastproject" src={props.src}  alt={props.alt} />
                </div>
            </div> 
        </td>
    )
    else
    return(
        <td class="table_pastproject_photo" rowspan="2">
        <div>
            <div>
          
            </div>
        </div> 
    </td>
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
            <div><i>{props.Italic}</i><br/></div>
        )
}
function Intro(props){
    return(
        <td class="width: 600px;" rowspan="2">
            <strong>{props.Title}  [<i>{props.Category}</i>]<br/></strong>
            <Intro_Des 
            line={props.line}
            Des1={props.Des1}
            Des2={props.Des2}
            Des3={props.Des3}
            Des4={props.Des4}/>
            <Italic_Intro Italic={props.Italic}/>
            {props.Time}<br/>
            <a href={props.Github}>Project (Github) </a>
            | <a href={props.Blog}>📝Blog</a> | <a href={props.PDF}>PDF</a> | <a href={props.Video}>Video</a>  | <a href={props.More}>More</a> <br/> 
        </td>
    )
}
function PicIntro_table(proxy){
    return(
        <tr>
            <Pic 
                src={resource[proxy.id].pic1_src}
                alt={resource[proxy.id].pic1_alt}/>
            <Pic 
                src={resource[proxy.id].pic2_src}
                alt={resource[proxy.id].pic2_alt}/>
            <Intro 
            Title={resource[proxy.id].Title}
            Category={resource[proxy.id].Category}
            line={resource[proxy.id].line}
            Des1={resource[proxy.id].Des1}
            Des2={resource[proxy.id].Des2}
            Des3={resource[proxy.id].Des3}
            Des4={resource[proxy.id].Des4}
            Italic={resource[proxy.id].Italic}
            Time={resource[proxy.id].Time}
            Github={resource[proxy.id].Github}
            Blog={resource[proxy.id].Blog}
            PDF={resource[proxy.id].PDF}
            Video={resource[proxy.id].Video}
            More={resource[proxy.id].More}
            />
            
        </tr>
    )
}

const resource=[resource0,resource1,resource2]
function Tbody(props){
    return(
    <tbody>
        <PicIntro_table id={props.id}/>     
    </tbody>
    )
}

function All_table(){
    return(
    <table class="table_pastproject">
        <Tbody id="0"/>
        <Tbody id="1"/>
        <Tbody id="2"/>
    </table> 
    )
}

ReactDOM.render(
    <All_table />,     
    document.getElementById("HrAw")
)