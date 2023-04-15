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
            <h2 id="personalpage" >
                <center> 
                    <a href="/#"> 
                    <button class="button button_blogs"> 🏠 PERSONAL PAGE </button>  
                    </a> 
                </center>
            </h2>
            <p>Powered by Github Page<br />
                CSS ~ Change style directly. 
                Hence, reusing more: Only need to change here once instead of multiple times<br />
                Navigation Bar: Using class Top ul li a, with utf-8 setting to display emoji.<br/>   

                Main idea: Using table to sort things up, achieving
                better display on mobile device.  <br /></p>
                <br />
                2023.3.6 <br />
                Adjust to mobile view: CSS add "media only screen and (max-width: 800px)" condition. <br/>
                <img width="160vw" src="asset/photo/Assignment/5/Mobile_Home_Apr2023.png" alt="Mobile_Home_Apr2023" title="Mobile View of Home Page"/><br/> 
                    {/* <center>
                        <iframeset cols="100%">
                            <iframe src="/#"    width= "400vw" height="400vw"></iframe>
                        </iframeset>
                    </center><br /> */}

            <p><strong><center>More update coming soon...</center></strong></p>   <br/>  <br/>       

            <strong>Code Reconstruction</strong><br/>
         
         
            2023.2.16<br/>
            Using React component-based architecture, using Routes to deliever new page. <br/>
            <br />
            2023.2.15<br/>
            Reconstructing the whole web structure using React App. <br/>
            Adding a 404 redirect to home page. <br/>
            <br />
            2023.2.1<br />
            Using React together with React to construct functions, thus shortening the lines of code and maintenance cost.<br />
            
            <img class="img_normal" src="asset/photo/Assignment/5/React_js.png" alt="React_js" title="React_js"/><br/>
        


            <h2 id="blog">
                <center> 
                    <a href="/#/Blog_Sorting/#welcome"> 
                    <button class="button button_blogs"> 📝 Blogs<i>3.0</i> PLATFORM <br></br>
                    Artistic, Better, Convenient
                    </button>  
                    </a> 
                    <br/><br/> 
                </center> 
            </h2>
            
            Originally written in Markdown(.md).<br/> Convert Markdown to HTML via <a
                href="https://showdownjs.com/">Showdown</a><br/>
            Reuse: the same part in the HTML / using JavaScript to encapsulate the header and footer<br/>
            
            ---Version: Blogs3.0 Platform---<br/>
            ---Music: Town of Windmill---<br/>

            <p><strong><center>More update coming soon...</center></strong></p>   <br/>  <br/>       


            2023.4.15<br/>
            Introduce a separate Ref📚 module in Blog system.<br/>
            Change the format of Update Log, using chronological order now. <br/>
            <br/>
            2023.4.11<br/>
            Blogs<i>3.0</i> Platform: This patch updates navigation bar in Blogs<i>3.0</i> Platform, adding ⚙️Settings🛠️.<br/>
            ⚙️Settings🛠️ supports changing background color, controlling music.<br/>
            <br/>
            2023.4.5<br/>
            Updates blog UI system with better visual effect. <br/>
            <img class="img_normal" src="asset/photo/Assignment/5/blog3.0.png" alt="Blog3.0" title="Blog3.0"/> <br></br>
            
            2023.4.7    <br/>
            Blogs<i>3.0</i> Platform: This patch updates navigation bar UI design and music button. <br/>
            Further update on music system: enable play and pause toggle design.<br/>
            Enable music on main page by redirecting to '/#' instead of '/'. ( Music can't continue on main website. -- Fixed) <br/>
            <br/>
            2023.4.9<br/>
            Adding the feature of seeing the state of music display state. <br/>
            Removing legacy version (2022.9.18 Music for Blog: Using   frame  and iframe to support Music autoplay and looping  )<br/>
            <br />
            
            <br />

            <h2><center>Legacy Display</center></h2>
            --- Blog3.0 Design --- <br/>
            <img class="img_normal" src="asset/photo/Assignment/5/BlogMar23.png" alt="Blog3.0_Mar23" title="Blog3.0_Mar23"/><br/>
            <br/>

            --- Blog2.0 Design --- <br/>
            Updated new feature: ⬇ <i>Sort Data on Header Click</i> <br/>
            2022.9.27<br/>
            &ensp; &ensp; &ensp; Using JavaScript to support table display and sorting <br/>
            (2023.2.16 Table sorting is no longer supported in react version. )<br/>
            <br/>
            <img class="img_normal" src="asset/photo/Assignment/5/blog2.0.png" alt="Blog2.0" title="Blog2.0"/><br/>
      
            <center>
                <iframeset >
                    <iframe src="/asset/blog/blog_directory_Storting.html"   title="blog2.0"></iframe> 
                </iframeset>
            </center><br />
            <br/>
            --- Blog1.0 Design --- <br/>
            <img class="img_normal" src="asset/photo/Assignment/5/blog.png" alt="Blog1.0" title="Blog1.0"/> <br/>
        
            <br/>       <br/>
            <center>
                <iframeset >
                    <iframe src="/asset/blog/blog_directory.html"   title="blog1.0"></iframe>
                </iframeset>
            </center><br />
            
            --- Personal Page 2022 --- <br/>
            <img class="img_normal" src="asset/photo/Assignment/5/page.png" alt="Personal Page2022" title="Personal Page 2022"/><br />
            <br/>
        
            <center> 
                <a href="/#"> 
                <button class="button button_blogs"> 🏠 PERSONAL PAGE </button>  
                </a> 
            </center> 
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}