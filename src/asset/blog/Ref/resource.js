import resource from "../../../asset/data/Resource.json"
export default function Resource(){
    var len=resource.length;
    var keys = [...Array(len).keys()];
    keys.sort((a,b)=>a-b);
    return(
        <>
        <p id="resource"><strong><font size="+2"> Useful Resource and Reference for Computer Science📚</font></strong></p>
        {keys.map((item, index)=>(
            <>
            {index+1}. <a href={resource[item].link}>{resource[item].description}</a>
            <br/>
            Author: <i>{resource[item].author}</i>
            <br/> <br/>
            </>
        ))}  
        <p>Disclaimer: <i>All rights belong to their respective owners. I do NOT own any of these contents.</i></p>
        </>
    )
}