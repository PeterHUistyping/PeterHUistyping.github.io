/* All rights reserved. 2022-2025 (c) Peter HU */

export default function resource(props){
    var len=props.resource.length;
    var keys = [...Array(len).keys()];
    keys.sort((a,b)=>a-b);
    return(
        <>
        {keys.map((item, index)=>(
            <>
            {index+1}. <a href={props.resource[item].link}>{props.resource[item].description} </a>
            <br/>
            Author: <i>{props.resource[item].author}</i>
            <br/> <br/>
            </>
        ))}  
      
        </>
    )
}