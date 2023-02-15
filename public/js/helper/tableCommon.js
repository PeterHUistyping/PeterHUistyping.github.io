export function Pic(props){
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
export function Intro(props){
    
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
 