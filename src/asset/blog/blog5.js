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
            <iframe src="/"    width= "400vw" height="400vw"></iframe>
        </iframeset>
    </center><br />

    <p>CSS ~ Change style directly<br />
        Reuse:Only need to change here once instead of multiple times<br /><br />
        Directory: Using class Top ul li a <br />
        Setting utf-8 to display emoji</p>
    <p>Adjust to mobile view: CSS add "media only screen and (max-width: 800px)" condition -2023.3.6</p>
    <img class="img_normal" src="asset/photo/Assignment/5/page.png" alt="Personal Page" title="Personal Page"/><br />

    Code Reconstruction<br/>
    Using React together with React to construct functions, thus shortening the lines of code and maintenance cost. -2023.2.1<br />
    Reconstructing the whole web structure using React App. -2023.2.15<br/>
    Adding a 404 redirect to home page. <br/>
    Using React component-based architecture, using Routes to deliever new page. -2023.2.16<br/>
    <img class="img_normal" src="asset/photo/Assignment/5/React_js.png" alt="React_js" title="React_js"/><br/>
   
    <h2 id="blog"><center>Blog</center></h2>
    Blogs<i>3.0</i> Platform: This patch updates blog UI system with better visual effect. -2023.4.5<br/>
    
    <img class="img_normal" src="asset/photo/Assignment/5/BlogApr23.png" alt="Blog_Apr23" title="Blog_Apr23"/><br/>

    
    Updated Blog2.0: ⬇ <i>Sort Data on Header Click</i> <br/>
    &ensp; &ensp; &ensp; Using JavaScript to support table display and sorting -2022.9.27<br/>
    (Table sorting is no longer supported in react version. -2023.2.16)<br/>
    <br/>
    Blogs<i>3.0</i> Platform: This patch updates navigation bar UI design and music button. -2023.4.7<br/>
    Further update on music system: enable play and pause toggle design. Disable music on main website. <br/>
    Adding the feature of seeing the state of music display state. -2023.4.9<br/>
    Removing legacy version ( Music for Blog: Using   frame  and iframe to support Music autoplay and looping -2022.9.18 )<br/>
        <br />
        <center>
            <iframeset cols="100%">
                <iframe src="/asset/blog/blog_directory_Storting.html"  width= "400vw" height="400vw"></iframe>
            </iframeset>
        </center><br />
        
        Originally written in Markdown(.md).<br/> Convert Markdown to HTML via <a
            href="https://showdownjs.com/">Showdown</a><br/>
        Reuse: the same part in the HTML / using JavaScript to encapsulate the header and footer<br/>
        <center>
            <iframeset cols="100%">
                <iframe src="/asset/blog/blog_directory.html"  width= "400vw" height="400vw"></iframe>
            </iframeset>
        </center><br />

        <h2>Legacy Display</h2>


        <img class="img_normal" src="asset/photo/Assignment/5/blog2.0.png" alt="Blog2.0" title="Blog2.0"/>
        <img class="img_normal" src="asset/photo/Assignment/5/blog.png" alt="Blog" title="Blog"/> 
        <br/>
        

        <a href="/">Welcome to My Personal Page</a>
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}