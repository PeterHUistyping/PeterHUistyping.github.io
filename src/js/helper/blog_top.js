import { HashLink } from 'react-router-hash-link';
 
export default function Blog_Top(){
    return (
        <>
        <body_>
        <div class="top">
        <ul>
            <li>
                <a_ href="#"><i>Peter </i>HU's Blogs&nbsp; &nbsp;</a_>
            </li>
            <li>
                <a href="../">🏠HOME</a>
            </li>

            <li>  <HashLink to="/#project">📊Project</HashLink>   
                <ul>
                    <li> <HashLink to="/#ongoing_project">🆕Ongoing</HashLink> </li>
                    <li><HashLink to="/#previous_project">📖Previous</HashLink> </li>
                </ul>
            </li>

            <li><a href="https://github.com/PeterHUistyping">🖥️Github</a></li>
            <li><a href="/#/Blog_Sorting/#welcome">📝Blog</a> 
                <ul>
                    <li> <a href="/#/blog5">⛵Update</a></li>
                </ul>
            </li>
            <li><HashLink to="/#contact">📬Contact </HashLink> </li>
            <li><a href="#">⬆️Top</a></li>

            {/* <li><a href="/asset/blog/blog.html">🎶Music</a>
                <ul>
                <li><a href="#">🚫 on 👉</a></li>
                </ul>
                <ul>
                <li><a href="#">Frame</a></li>
                </ul>
            </li> */}
            {/* <li>
                <Button onClick={sayHello}>Settings</Button>
            </li>      */}
            <li>    
                <a href="/asset/blog/blog.html">   
                <button class="button button_settings">🎶</button>      
                </a>
            </li>
        </ul>
    </div>
    </body_>
    <br /><br /><br /><br /><br /><br />
    </>
    )
}
 