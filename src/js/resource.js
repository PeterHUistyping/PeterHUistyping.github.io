import resource from "../asset/data/Resource.json"
export default function Resource(){
    var len=resource.length;
    var keys = [...Array(len).keys()];
    keys.sort((a,b)=>a-b);
    return(
        <>
        <br /> <br /> <br />
 
        <p id="resource"><strong><font size="+2"> Useful Resource and Reference📚</font></strong></p>
   
        {keys.map((item)=>(
            <>
            <a href={resource[item].link}>{resource[item].description}</a>
            <br/>
            </>
        ))}  
        </>
    )
}