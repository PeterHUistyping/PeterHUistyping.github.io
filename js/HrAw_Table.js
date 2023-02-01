function Pic(props){
    return( 
        <td class="table_pastproject_photo" rowspan="2">
            <div>
                <div>
                <img class="img_pastproject" src={props.src}  alt={props.alt} />
                </div>
            </div> 
        </td>
    )
}

function Intro(props){
    return(
        <td class="width: 600px;" rowspan="2">
            <strong>{props.Title}  [<i>{props.Category}</i>]<br/></strong>
            {props.Des1} <br/>
            {props.Des2} <br/>
            {props.Des3} <br/>
            {props.Des4} <br/>
            <i>{props.Italic}</i><br/>
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
var resource1={
    pic1_src:"../photo/Assignment/6/cf.png",
    pic1_alt:"Comparing different Levels",
    pic2_src:"../photo/Assignment/6/1.JPG",
    pic2_alt:"Presentation",
    Title:"Gold Medal in Huawei Tech Arena 2022",
    Category:"Programming in C and C++, Compression, Concurrent",
    line:4,
    Des1: `In a team of 4, winning £7000 prize.`,
    Des2:`Responsible for LZSS algorithm and improvements.`,
    Des3:`Communicate between team members to collaborate.`, 
    Des4: `Demonstrate my presentation skills.`,
    Italic:"Issued by Huawei UK R&D",
    Time:"2022.10.20-2022.11.26",
    Github:"https://github.com/PeterHUistyping/UKTechArena-3DGraphics_Compression_Algorithm-Metaverse",
    Blog:"../blog/blog6.html",
    PDF:"../doc/Crazy_Thursday.pdf",
    Video:"https://www.linkedin.com/company/huawei/videos/native/urn:li:ugcPost:7021747028581904384/",
    More:"https://github.com/PeterHUistyping/LZSS_with_Concurrent_Demo"
}
var resource2={
    pic1_src:"../photo/Assignment/7/Map.png",
    pic1_alt:"Route_Planning",
    pic2_src:"../photo/Assignment/7/Team_Member.png",
    pic2_alt:"Team_Member",
    Title:"Top 2 Team in Mercuria Hackathon 2022",
    Category:"Python, Data Analysis, Route-Planning",
    line:4,
    Des1: `Using data analysis to accelerate the energy transition and reduce the carbon emissions of the maritime industry.`,
    Des2:` Python Data Analysis, Route Plotting.`,
    Des3:`Great Team Work, Collaboration.`, 
    Des4: `Networking with senior engineers, excellent undergraduate, Master and PhD students from all around the Europe.`,
    Italic:"Issued by Mercuria Energy Trading, Switzerland",
    Time:"TEST",
    Github:"https://github.com/PeterHUistyping/Mercuria_Hackathon2022",
    Blog:"../blog/blog7.html"
}
 
const resource=[resource1,resource2]
function All_table(){
    return(
    <table class="table_pastproject">
        <tbody>
            <PicIntro_table id={0}/>     
        </tbody>
        <tbody>
            <PicIntro_table id={1}/>     
        </tbody>
    </table> 
    )
}

ReactDOM.render(
    <All_table />,     
    document.getElementById("test")
)