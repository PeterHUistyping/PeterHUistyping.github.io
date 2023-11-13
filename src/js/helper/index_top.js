import { HashLink } from 'react-router-hash-link';
export default function Index_Top(){
    return (
        <>
        <body_>   
        <div class="top">
            <ul>
                <li> 
                    <HashLink style={{ color: 'black' }} to="/#"><i>Peter </i>HU's Website</HashLink>
                </li>
                <li>
                    <a href="http://PeterHUistyping.github.io/#">🏠HOME</a>
                </li>
                <li><HashLink to="/project/">🧑‍💻Project▾</HashLink>
                    <ul>
                        <li> <HashLink to="/award/">Award</HashLink> </li>
                        <li><HashLink to="/experience">Experience</HashLink> </li>
                    </ul>
                    {/* <ul>
                        <li> <HashLink to="/project/#ongoing_project">🆕Ongoing</HashLink> </li>
                        <li><HashLink to="/project/#previous_project">📖Previous</HashLink> </li>
                    </ul> */}
                </li>
                <li><a href="https://github.com/PeterHUistyping">🖥️Github</a></li>
                <li><a href="/#/Blog_Sorting/#welcome">📝Blog▾</a>
                    <ul>
                        <li> <a href="/#/ref">📚Ref</a></li>
                        <li> <a href="/#/blog5">⛵Update</a></li>
                    </ul>
                </li>
                 <li><HashLink to="/#contact">📬Contact </HashLink> </li>
                <li><a href="#">🔝Top</a></li>
            </ul>
        </div>
        <br /><br /><br /><br />
    </body_>
    </>
    )
}
