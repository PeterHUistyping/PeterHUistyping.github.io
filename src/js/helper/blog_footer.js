/* All rights reserved. 2022-2025 (c) Peter HU */


import FooterCommon from "./footerCommon"
export default function Blog_Footer(){
    return(
    <>
    <br/><br/><br/><br/><br/>
    <div class=" blog">
        <ul>
            <li><a href="/#">🔙 HOME 🏠</a></li>
            <li><a href="/#/Blog_Sorting">🔙 Blog 📝</a></li>
        </ul>
    </div>
    <hr width="50%" color="#C0C0C0" SIZE="1" />  
    {/* #987cb9 */}
        
        <table class="table_footer">
            <tbody>
                <td>
                    <div className="footerDisclaimer">
                    <button class="button button_blogs" onClick={() => {popup()}}>Blogs<i>3.0</i></button> - Artistic, Better, Convenient Platform
                    &nbsp;
                    <a href="/#/blog5"> 
                     <button class="button button_blogs">updatelog</button>  
                     </a> 
                    </div>
                    {/* Originally written in Markdown(.md) <br/>Convert Markdown to HTML via <a
                        href="https://showdownjs.com/">Showdown</a><br/> */}
                   <FooterCommon />
                </td>
            </tbody>
        </table>
    </>
)
}

function popup() {
    alert("Warm Welcome to my blogs!\n\
    \n- Version: Blogs3.0\n- Music: Town of Windmill\n \n ----------More Info----------\n \
    Originally written in Markdown(.md) \n \
    Convert to HTML via React-Markdown. \n \
    Please press the ⬇️below button to Exit. \n \
    \n \
    Thank you! ")

    // Showdown https://showdownjs.com/ \n  \n \
    
}

 