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
        <td class="table_without_photo" rowspan="2">
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
function Blog_link(props){
    if(props.link){
        return (<a href={"/#/"+props.link}>📝Blog</a>)
    }
    else{
        return (<a href={props.link}>📝Blog</a>)
    }
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
            | <Blog_link link={props.Blog}/> | <a href={props.PDF}>PDF</a> | <a href={props.Video}>Video</a>  | <a href={props.More}>More</a> <br/> 
        </td>
    )
}
 
function PicIntro_table(proxy){
    return(
        <tr>
            <Pic 
                src={proxy.resource[proxy.id].pic1_src}
                alt={proxy.resource[proxy.id].pic1_alt}/>
            <Pic 
                src={proxy.resource[proxy.id].pic2_src}
                alt={proxy.resource[proxy.id].pic2_alt}/>
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
            />      
        </tr>
    )
}
function Tbody(props){
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
    <table class="table_pastproject">
        {keys.map((item)=>(
            <Tbody id={item} resource={props.resource}/>
        ))}  
    </table> 
    )
}