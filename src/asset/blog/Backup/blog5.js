/* All rights reserved. 2022-2024 (c) Peter HU */

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
        <p><strong><center>More update coming soon...</center></strong></p>   <br/>   
        12 Nov 2023 <br />
        Add more sub-page for Projects, awards and experience. <br/>  
        Update home page with left navigation bar and brand-new layout.<br/>  
        Differentiate mobile and PC view of the Main page by checking screen width in js.<br/>  
         

        <img class="img_normal" src="asset/photo/Assignment/5/Home_Nov2023.png" alt="Mobile_Home_Apr2023" title="Home Page v2"/><br/> 
        <br/> 

        6 Mar 2023 <br />
        Adjust to mobile view: CSS add "media only screen and (max-width: 800px)" condition. <br/>
        <img width="160vw" src="asset/photo/Assignment/5/Mobile_Home_Apr2023.png" alt="Mobile_Home_Apr2023" title="Mobile View of Home Page"/><br/> 
            {/* <center>
                <iframeset cols="100%">
                    <iframe src="/#"    width= "400vw" height="400vw"></iframe>
                </iframeset>
            </center><br /> */}

           

            <h2>Code Reconstruction</h2> 
        
            16 Feb 2023<br/>
            Using React component-based architecture, using Routes to deliver new page. <br/>
            <br />
            15 Feb 2023<br/>
            Reconstructing the whole web structure using React App. <br/>
            Adding a 404 redirect to home page. <br/>
            <br />
            1 Feb 2023<br />
            Using React together with React to construct functions, thus shortening the lines of code and maintenance cost.<br />
            
            <img class="img_normal" src="asset/photo/Assignment/5/React_js.png" alt="React_js" title="React_js"/><br/>
        
                <center>
            --- Personal Page 2022 --- <br/>
            <img class="img_normal" src="asset/photo/Assignment/5/page.png" alt="Personal Page2022" title="Personal Page 2022"/><br />
            <br/>
            </center>
        
            <center> 
                <a href="/#"> 
                <button class="button button_blogs"> 🏠 PERSONAL PAGE </button>  
                </a> 
            </center> 

            <h2 id="blog">
                <center> 
                    <a href="/#/Blog_Sorting"> 
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
            ---Music: Town of Windmill---<br/> <br/>

            <p><strong><center>More update coming soon...</center></strong></p>   <br/>  <br/>       

            17 Apr 2023<br/>
            Introduce sidebar in Ref📚 for classification.<br/>
            15 Apr 2023<br/>
            Introduce a separate Ref📚 module in Blog system.<br/>
            Change the format of Update Log, using chronological order now. <br/>
            <br/>
            11 Apr 2023<br/>
            Blogs<i>3.0</i> Platform: This patch updates navigation bar in Blogs<i>3.0</i> Platform, adding ⚙️Settings🛠️.<br/>
            ⚙️Settings🛠️ supports changing background color, controlling music.<br/>
            <br/>
            5 Apr 2023<br/>
            Updates blog UI system with better visual effect. <br/>
            <img class="img_normal" src="asset/photo/Assignment/5/blog3.0.png" alt="Blog3.0" title="Blog3.0"/> <br></br>
            
            7 Apr 2023    <br/>
            Blogs<i>3.0</i> Platform: This patch updates navigation bar UI design and music button. <br/>
            Further update on music system: enable play and pause toggle design.<br/>
            Enable music on main page by redirecting to '/#' instead of '/'. ( Music can't continue on main website. -- Fixed) <br/>
            <br/>
            9 Apr 2023<br/>
            Adding the feature of seeing the state of music display state. <br/>
            Removing legacy version (2022.9.18 Music for Blog: Using   frame  and iframe to support Music autoplay and looping  )<br/>
            <br />
            
            <br />

        

            <h2><center>Legacy Display</center></h2>
            <center>--- Blog3.0 Design --- <br></br>

            <img class="img_normal" src="asset/photo/Assignment/5/BlogMar23.png" alt="Blog3.0_Mar23" title="Blog3.0_Mar23"/></center>  
            <br/>

            <center>--- Blog2.0 Design ---</center>  

            <center>
                <iframeset >
                    <iframe src="/asset/blog/blog_directory_Storting.html"   title="blog2.0"></iframe> 
                </iframeset>
            </center><br />
            <br/>
            Updated new feature: ⬇ <i>Sort Data on Header Click</i> <br/>
            2022.9.27<br/>
            &ensp; &ensp; &ensp; Using JavaScript to support table display and sorting <br/>
            (2023.2.16 Table sorting is no longer supported in react version. )<br/>
            <br/>
            <center> 
            <img class="img_normal" src="asset/photo/Assignment/5/blog2.0.png" alt="Blog2.0" title="Blog2.0"/>
            </center> 
            <br/>
            <center>--- Blog1.0 Design ---</center>  

            <center>
                <iframeset >
                    <iframe src="/asset/blog/blog_directory.html"   title="blog1.0"></iframe>
                </iframeset>
            </center><br />
            <center>
            <img class="img_normal" src="asset/photo/Assignment/5/blog.png" alt="Blog1.0" title="Blog1.0"/>
            </center> 
        
            <p><strong><center>Appendix: Heuristic Evaluation of the Design</center></strong></p>
            <ol>
                <li><p> Visibility of system status<br/>
                Designs should keep users informed about what is going on, through appropriate, timely feedback.<br/>
                use progress bars / indicators</p></li>
                <li><p> Match between system and real world<br/>
                The design should speak the users' language. Use words, phrases, and concepts familiar to the user, rather than internal jargon.</p></li>
                <li><p> User control and freedom<br/>
                Users often perform actions by mistake. They need a clearly marked "emergency exit" to leave the unwanted action.</p></li>
                <li><p> Consistency and standards<br/>
                Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.</p></li>
                <li><p> Error prevention<br/>
                Good error messages are important, but the best designs carefully prevent problems from occurring in the first place.</p></li>
                <li><p> Recognition rather than recall<br/>
                Minimize the user's memory load by making elements, actions, and options visible. Avoid making users remember information.</p></li>
                <li><p> Flexibility and efficiency of use<br/>
                Shortcuts - hidden from novice users - may speed up the interaction for the expert user such that the design can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.</p></li>
                <li><p> Aesthetic and minimalist design<br/>
                Interfaces should not contain information which is irrelevant. Every extra unit of information in an interface competes with the relevant units of information.</p></li>
                <li><p> Help users recognize and recover from errors<br/>
                Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.</p></li>
                <li><p> Help and documentation<br/>
                It’s best if the design doesn’t need any additional explanation. However, it may be necessary to provide documentation to help users complete their tasks.</p></li>
            </ol>

            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}