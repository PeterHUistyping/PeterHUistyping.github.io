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
var resource9={
    // pic1_src:"../photo/Assignment/6/cf.png",
    // pic1_alt:"Comparing different Levels",
    // pic2_src:"../photo/Assignment/6/1.JPG",
    // pic2_alt:"Presentation",
    Title:"Computer Vision",
    Category:"Stanford CS231n",
    line:2,
    Des1: `⛵Update: Start from 9/Jan/2023 `,
    Des2:`Python, Numpy, kNN, Softmax, SVM classifier, Cross Validation`,
    // Des3:`Communicate between team members to collaborate.`, 
    // Des4: `Demonstrate my presentation skills.`,
    // Italic:"Issued by Huawei UK R&D",
    Time:"2023.1.9-Present",
    Github:"https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision",
    // Blog:"../blog/blog6.html",
    // PDF:"../doc/Crazy_Thursday.pdf",
    // Video:"https://www.linkedin.com/company/huawei/videos/native/urn:li:ugcPost:7021747028581904384/",
    // More:"https://github.com/PeterHUistyping/LZSS_with_Concurrent_Demo"
}
var resource8={
     // pic1_src:"../photo/Assignment/6/cf.png",
    // pic1_alt:"Comparing different Levels",
    // pic2_src:"../photo/Assignment/6/1.JPG",
    // pic2_alt:"Presentation",
    Title:"Machine Learning and Real-world Data",
    Category:"Cambridge Part IA",
    line:2,
    Des1: `⛵Update: Start from 17/Jan/2023`,
    Des2:`Text Classification using ML with improvements, including Naive Bayes classifier, Cross-Validation, NLP`,
    // Des3:`Communicate between team members to collaborate.`, 
    // Des4: `Demonstrate my presentation skills.`,
    // Italic:"Issued by Huawei UK R&D",
    Time:"2023.1.17-Present",
    Github:"https://github.com/PeterHUistyping/Machine_Learning-Real_World_Data",
    Blog:"../blog/blog8.html"
    
}
var resource7={
    // pic1_src:"../photo/Assignment/6/cf.png",
    // pic1_alt:"Comparing different Levels",
    // pic2_src:"../photo/Assignment/6/1.JPG",
    // pic2_alt:"Presentation",
    Title:"Machine Learning",
    Category:"Stanford CS229",
    line:2,
    Des1: `⛵Update: Start from 16/Oct/2022 `,
    Des2:`Linear classifiers (Logistic Regression, GDA), Stochastic Gradient Descent, L1 L2 Regularization, SVM`,
    // Des3:`Communicate between team members to collaborate.`, 
    // Des4: `Demonstrate my presentation skills.`,
    // Italic:"Issued by Huawei UK R&D",
    Time:"2022.10.16-Present",
    Github:"https://github.com/PeterHUistyping/Stanford_CS229.Machine_Learning",
    // Blog:"../blog/blog6.html",
  
}
var resource6={
    // pic1_src:"../photo/Assignment/6/cf.png",
    // pic1_alt:"Comparing different Levels",
    // pic2_src:"../photo/Assignment/6/1.JPG",
    // pic2_alt:"Presentation",
    Title:"Operating System",
    Category:"MIT 6.S081",
    line:1,
    Des1: `⛵Update: Start from 14/Oct/2022`,
    // Des2:`Linear classifiers (Logistic Regression, GDA), Stochastic Gradient Descent, L1 L2 Regularization, SVM`,
    // Des3:`Communicate between team members to collaborate.`, 
    // Des4: `Demonstrate my presentation skills.`,
    // Italic:"Issued by Huawei UK R&D",
    Time:"2022.10.14-Present",
    Github:"https://github.com/PeterHUistyping/Operating_System",
    // Blog:"../blog/blog6.html",
}
var resource5={
    // pic1_src:"../photo/Assignment/6/cf.png",
    // pic1_alt:"Comparing different Levels",
    // pic2_src:"../photo/Assignment/6/1.JPG",
    // pic2_alt:"Presentation",
    Title:"Database Design Project (C++)",
    Category:"CMU15-445 Project",
    line:4,
    Des1: `Buffer Pool Management System, Latch, LRU Replacement policy, Buffer Pool Manager Instance. In order to solve the
    concurrent problem, implement the PARALLEL Buffer Pool Manager.`,
    Des2:`C++ STL; Useful Coding Skills: Google C++ Style Guide`,
    Des3:`"logger.h":Debug logging functions for EE / LOG_DEBUG ; "gtest/gtest.h":Google Unit Testing<br>`, 
    Des4: `@brief @param @return @author @date @version`,
    // Italic:"Issued by Huawei UK R&D",
    Time:"2022.9.9-Present",
    Github:"https://github.com/PeterHUistyping/CMU15-445_Database_Project",
    Blog:"../blog/blog4.html",
    More:"https://google.github.io/styleguide/cppguide.html"
}
var resource4={
    // pic1_src:"../photo/Assignment/6/cf.png",
    // pic1_alt:"Comparing different Levels",
    // pic2_src:"../photo/Assignment/6/1.JPG",
    // pic2_alt:"Presentation",
    Title:"Introduction to Computer Graphics",
    Category:"CMU15-445 Project",
    line:2,
    Des1: ` With the help of the Open Course, I have the experience of writing a ray tracer using C++. Throughout the process, 
    I implement two kinds of cameras, orthonormal and perspective camera respectively. In addition, several types of primitives
    are built, e.g. sphere, triangle, plane, triangle mesh, just to name a few. Even though there is obstacle
    finishing the task (like the use of depreciated GLUT library), lots of interesting things are learnt. Command-line
    could help build the project efficiently. Folder .vscode(i.e., settings.json,launch.json,tasks,json and
    c_cpp_properties.json) helps build and compile the C++ program. What's special is that it also keeps Vscode
    occupying tiny amount of space on PC compared with other IDE.`,
    Des2:`Useful Coding Skills: Command Line Argument; Using Assert(); On each ".h", #progma once`,
    Time:"2022.8-Present",
    Github:"https://github.com/PeterHUistyping/MIT6.837-CG-Fall2004-Assignment",
    Blog:"../blog/blog3.html",
    
}
var resource3={
    // pic1_src:"../photo/Assignment/6/cf.png",
    // pic1_alt:"Comparing different Levels",
    // pic2_src:"../photo/Assignment/6/1.JPG",
    // pic2_alt:"Presentation",
    Title:"Algorithm and Data Structure",
    Category:"Java, C++",
    line:1,
    Des1: `Leetcode, Intro to Algorithms`,
    Italic:"MIT 6.006 / Also the Third Edition book",
    Time:"2022.9.9-Present",
    Github:"https://github.com/PeterHUistyping/Algorithm-Data_Structure",
    // Blog:"../blog/blog4.html",
   
}
var resource2={
    pic1_src:"../photo/Assignment/3/DB1.png",
    pic1_alt:"DB",
    pic2_src:"../photo/Assignment/3/DB2.png",
    pic2_alt:"Database",
    Title:" Database SQL",
    Category:"HW for CMU15-445",
    line:1,
    Des1: `Operate on schema of 6 tables. Use of CTEs (With .. AS)`,
    Italic:"IMDB data, SQLite DBMS",
    Time:"2022.8",
    Github:"https://github.com/PeterHUistyping/CMU15-445_SQL_HW1_Fall2019",
    
}
var resource1={
    pic1_src:"../photo/Assignment/2/Order_txt.png",
    pic1_alt:"Order_txt",
    pic2_src:"../photo/Assignment/2/Order.png",
    pic2_alt:"Order",
    Title:"Multifunctional Supermarket Management System",
    Category:"Cpp & OOP Project",
    line:2,
    Des1: `Using Inheritance(Parent-Child), Polymorphism(Operator Overloading)`,
    Des2:`Read/Write Files, just to name a few`,
    Time:"2022.4",
    Github:"https://github.com/PeterHUistyping/Supermarket-Management-System",
    Blog:"../blog/blog2.html",
  
}
var resource0={
    pic1_src:"../photo/Assignment/1/Interface.png",
    pic1_alt:"Interface",
    pic2_src:"../photo/Assignment/1/KEYBOARD-RAINBOW.png",
    pic2_alt:"KEYBOARD-RAINBOW",
    Title:"Typing Game",
    Category:"C Programming Project",
    line:1,
    Des1: `Graphically Beautiful Interactive Game`,
    Italic:"C & EasyX",
    Time:"2021.12",
    Github:"https://github.com/PeterHUistyping/Typing-Game",
    Blog:"../blog/blog1.html",
    
}

const resource=[resource0,resource1,resource2,resource3,resource4,
    resource5,resource6,resource7,resource8,resource9,]

function Tbody(props){
    return(
    <tbody>
        <PicIntro_table id={props.id}/>     
    </tbody>
    )
}
function Ongoing_label(){
    return(
        <p id="ongoing_project"><b><i>Ongoing Project</i></b></p>
    )
}
function Past_label(){
    return(
        <p id="previous_project"><b><i>Previous Project</i></b></p>
    )
}
function Ongoing_table(){
    return(
    <table class="table_pastproject"> 
        <Tbody id="9"/>
        <Tbody id="8"/>
        <Tbody id="7"/>
        <Tbody id="6"/>
        <Tbody id="5"/>
        <Tbody id="4"/>
        <Tbody id="3"/>
    </table> 
    )
}
function Past_table(){
    return(
    <table class="table_pastproject">
        <Tbody id="2"/>
        <Tbody id="1"/>
        <Tbody id="0"/>
    </table> 
    )
}

ReactDOM.render(
    <div>
    <Ongoing_label />
    <Ongoing_table />
    <Past_label />
    <Past_table />
    </div>,
        
    document.getElementById("PrAs")
)