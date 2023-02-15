//import {readTextFile} from './helper/readJson.js'
// import {resource} from '../data/Hr_Award.json'
// console.log(data);
// alert("Hi!")

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

 
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
//     let resource;
//     readTextFile("", function(text){
//         const data=JSON.parse(text);
//         resource=data;  
// });
    // var resource;
    // $.getJSON( "../data/Hr_Award.json", function( data ) {
    //     resource=data;
    // console.log(resource);
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
var resource0={
    pic1_src:"../asset/photo/Assignment/6/cf.png",
    pic1_alt:"Comparing different Levels",
    pic2_src:"../asset/photo/Assignment/6/1.JPG",
    pic2_alt:"Presentation",
    Title:"Gold Medal in UK Tech Arena 2022",
    Category:"Programming in C and C++, Compression, Concurrent",
    line:4,
    Des1: `In a team of 4, winning £7000 prize.`,
    Des2:`Responsible for LZSS algorithm and improvements.`,
    Des3:`Communicate between team members to collaborate.`, 
    Des4: `Demonstrate my presentation skills.`,
    Italic:"Issued by Huawei UK R&D",
    Time:"2022.10.20-2022.11.26",
    Github:"https://github.com/PeterHUistyping/UKTechArena-3DGraphics_Compression_Algorithm-Metaverse",
    Blog:"../asset/blog/blog6.html",
    PDF:"../doc/Crazy_Thursday.pdf",
    Video:"https://www.linkedin.com/company/huawei/videos/native/urn:li:ugcPost:7021747028581904384/",
    More:"https://github.com/PeterHUistyping/LZSS_with_Concurrent_Demo"
} 
var resource1={
    pic1_src:"../asset/photo/Assignment/6/cf.png",
    pic1_alt:"Comparing different Levels",
    pic2_src:"../asset/photo/Assignment/6/1.JPG",
    pic2_alt:"Presentation",
    Title:"Gold Medal in UK Tech Arena 2022",
    Category:"Programming in C and C++, Compression, Concurrent",
    line:4,
    Des1: `In a team of 4, winning £7000 prize.`,
    Des2:`Responsible for LZSS algorithm and improvements.`,
    Des3:`Communicate between team members to collaborate.`, 
    Des4: `Demonstrate my presentation skills.`,
    Italic:"Issued by Huawei UK R&D",
    Time:"2022.10.20-2022.11.26",
    Github:"https://github.com/PeterHUistyping/UKTechArena-3DGraphics_Compression_Algorithm-Metaverse",
    Blog:"../asset/blog/blog6.html",
    PDF:"../doc/Crazy_Thursday.pdf",
    Video:"https://www.linkedin.com/company/huawei/videos/native/urn:li:ugcPost:7021747028581904384/",
    More:"https://github.com/PeterHUistyping/LZSS_with_Concurrent_Demo"
} 
var resource=[resource0,resource1 ]
 



function Tbody(props){
    return(
    <tbody>
        <PicIntro_table id={props.id}/> 
    </tbody>
    )
}

function All_table(){
    //const keys = [...Array(resource.length).keys()];
    const keys = [...Array(1).keys()];
    return(
    <table class="table_pastproject">
        {keys.map((item)=>(
            <Tbody id={item}/>
        ))}  
    </table> 
    )
}

ReactDOM.render(
    <All_table />,     
    document.getElementById("HrAw2")
)