import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
export function Blog5(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>
            <h1 id="startingmypersonalpageandblog">Starting my Personal Page and Blog (with Update Details)</h1>
    <pre><code>HTML, CCS, js, React
    </code></pre>
    <h2 id="personalpage" ><center>Personal Page</center></h2>
    <p>Powered by Github Page<br />
        Main idea: Using table to sort things up<br />
        Better display on mobile device. <br /></p>
    <center>
        <iframeset cols="100%">
            <iframe src="/" width="1024px" height="400px"></iframe>
        </iframeset>
    </center><br />

    <p>CSS ~ Change style directly<br />
        Reuse:Only need to change here once instead of multiple times<br /><br />
        Directory: Using class Top ul li a <br />
        Setting utf-8 to display emoji</p>
    <img class="img_normal" src="asset/photo/Assignment/5/page.png" alt="Personal Page"/><br />

    Code Reconstruction<br/>
    Using React together with React to construct functions, thus shortening the lines of code and maintenance cost. -2023.2.1<br />
    Reconstructing the whole web structure using React App. -2023.2.15<br/>
    Adding a 404 redirect to home page. <br/>
    Using React component-based architecture, using Routes to deliever new page. -2023.2.16<br/>
    <img class="img_normal" src="asset/photo/Assignment/5/React_js.png" alt="React_js"/><br/>
    <pre><code>        ├── README.md
        ├── package-lock.json
        ├── package.json
        ├── public
        │   ├── 404.html
        │   ├── asset
        │   │   ├── audio
        │   │   │   └── Town_of_Windmill.mp3
        │   │   ├── blog
        │   │   │   ├── Backup
        │   │   │   │   ├── html_blog_format.html
        │   │   │   │   └── index_1Feb2023.html
        │   │   │   ├── blog.html
        │   │   │   ├── blog1.html
        │   │   │   ├── blog2.html
        │   │   │   ├── blog3.html
        │   │   │   ├── blog4.html
        │   │   │   ├── blog5.html
        │   │   │   ├── blog6.html
        │   │   │   ├── blog7.html
        │   │   │   ├── blog8.html
        │   │   │   ├── blog9.html
        │   │   │   ├── blog_directory.html
        │   │   │   ├── blog_directory_Storting.html
        │   │   │   ├── blog_footer.js
        │   │   │   ├── blog_new.html
        │   │   │   ├── blog_top.js
        │   │   │   ├── jquery.js
        │   │   │   ├── js
        │   │   │   │   └── blog_sortingTB.js
        │   │   │   └── music.html
        │   │   ├── data
        │   │   │   ├── Hr_Award.json
        │   │   │   ├── Ongoing_PrAs.json
        │   │   │   ├── Past_PrAs.json
        │   │   │   └── test.json
        │   │   ├── doc
        │   │   │   ├── CV_PeterHU.pdf
        │   │   │   ├── Crazy_Thursday.pdf
        │   │   │   └── Jardine_Certificate.jpg
        │   │   └── photo
        │   │       ├── Assignment
        │   │       │   ├── 1
        │   │       │   │   ├── Interface.png
        │   │       │   │   └── KEYBOARD-RAINBOW.png
        │   │       │   ├── 2
        │   │       │   │   ├── Order.png
        │   │       │   │   └── Order_txt.png
        │   │       │   ├── 3
        │   │       │   │   ├── DB1.png
        │   │       │   │   └── DB2.png
        │   │       │   ├── 5
        │   │       │   │   ├── React_js.png
        │   │       │   │   ├── blog.png
        │   │       │   │   ├── blog2.0.png
        │   │       │   │   └── page.png
        │   │       │   ├── 6
        │   │       │   │   ├── 1.JPG
        │   │       │   │   ├── 2.JPG
        │   │       │   │   ├── 3.JPG
        │   │       │   │   └── cf.png
        │   │       │   ├── 7
        │   │       │   │   ├── Compare_AIS.png
        │   │       │   │   ├── Compare_Report.png
        │   │       │   │   ├── Formula.jpg
        │   │       │   │   ├── HTTP.png
        │   │       │   │   ├── Intro.png
        │   │       │   │   ├── Intro_Ch.png
        │   │       │   │   ├── Intro_Sea.png
        │   │       │   │   ├── Map.png
        │   │       │   │   ├── Members.JPG
        │   │       │   │   ├── Port.png
        │   │       │   │   └── Team_Member.png
        │   │       │   ├── 8
        │   │       │   │   ├── Estimation of log-log.png
        │   │       │   │   └── Numbers of Words.png
        │   │       │   ├── 9
        │   │       │   │   ├── Frozen.png
        │   │       │   │   └── Web.png
        │   │       │   └── blog3
        │   │       │       └── MyProject
        │   │       │           ├── assignment0_Barnsley fern
        │   │       │           │   └── Self-similar fractals.png
        │   │       │           ├── assignment1_Sphere-Ray
        │   │       │           │   ├── Sphere-depth.png
        │   │       │           │   └── Sphere.png
        │   │       │           ├── assignment2_Tri-Ray
        │   │       │           │   ├── Raytracing1.png
        │   │       │           │   ├── Raytracing2.png
        │   │       │           │   ├── Raytracing3.png
        │   │       │           │   └── Raytracing4.png
        │   │       │           ├── assignment3_Open-GL
        │   │       │           │   ├── OpenGL1.png
        │   │       │           │   ├── OpenGL2.png
        │   │       │           │   └── OpenGL3.png
        │   │       │           ├── assignment4_Ray-Tracer
        │   │       │           │   ├── RayTracer.png
        │   │       │           │   └── RayTracerBUG.png
        │   │       │           ├── assignment5_Voxel-Rendering
        │   │       │           │   ├── 5_1.png
        │   │       │           │   ├── 5_2.png
        │   │       │           │   ├── 5_3.png
        │   │       │           │   └── 5_4.png
        │   │       │           ├── assignment6_Grid-Acceleration+Solid-Textures
        │   │       │           │   ├── 6.837.png
        │   │       │           │   └── Texture.png
        │   │       │           └── assignment7_Supersampling+Antialiasing
        │   │       │               ├── Antialiasing.png
        │   │       │               └── Supersampling.png
        │   │       ├── IMG_0813.JPG
        │   │       ├── Logo
        │   │       │   ├── Cam.png
        │   │       │   ├── Huawei.png
        │   │       │   ├── xmu-logo.jpg
        │   │       │   └── xmu.png
        │   │       ├── Peter_Hu.jpg
        │   │       └── Pic.jpg
        │   ├── css
        │   │   └── style.css
        │   ├── index.html
        │   └── manifest.json
        └── src
            ├── App.js
            ├── App.test.js
            ├── index.css
            ├── index.js
            ├── js
            │   ├── 404.js
            │   ├── Blog_Sorting.js
            │   ├── Home.js
            │   ├── HrAw_Re.js
            │   ├── HrAw_Table.js
            │   ├── PrAs_Table.js
            │   ├── helper
            │   │   ├── ScrollToTop.jsx
            │   │   ├── blog_footer.js
            │   │   ├── blog_top.js
            │   │   ├── footerCommom.js
            │   │   ├── index_footer.js
            │   │   ├── index_top.js
            │   │   ├── readJson.js
            │   │   └── tableCommon.js
            │   └── test.html
            ├── react-app
            │   ├── README.md
            │   └── create-react-app React.pdf
            ├── reportWebVitals.js
            ├── setupTests.js
            └── style.css

        35 directories, 115 files
</code></pre>
    <h2 id="blog"><center>Blog</center></h2>
    Updated Blog2.0: ⬇ <i>Sort Data on Header Click</i> <br/>
    &ensp; &ensp; &ensp; Using JavaScript to support table display and sorting -2022.9.27<br/>
    Table sorting is no longer supported in react version. -2023.2.16<br/>
    <br/>Updated Music for Blog: Using   frame  and iframe to support Music autoplay and looping -2022.9.18<br/>
        <br />
        <center>
            <iframeset cols="100%">
                <iframe src="/asset/blog/blog_directory_Storting.html" width="1024px" height="400px"></iframe>
            </iframeset>
        </center><br />
        
        Originally written in Markdown(.md).<br/> Convert Markdown to HTML via <a
            href="https://showdownjs.com/">Showdown</a><br/>
        Reuse: the same part in the HTML / using JavaScript to encapsulate the header and footer<br/>
        <center>
            <iframeset cols="100%">
                <iframe src="/asset/blog/blog_directory.html" width="1024px" height="400px"></iframe>
            </iframeset>
        </center><br />

        


        <img class="img_normal" src="asset/photo/Assignment/5/blog2.0.png" alt="Blog2.0"/>
        <img class="img_normal" src="asset/photo/Assignment/5/blog.png" alt="Blog"/> 
        <br/>
        

        <a href="/">Welcome to My Personal Page</a>
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}