import FooterCommon from "./footerCommom"
export default function Blog_Footer(){
    return(
    <>
    <br/><br/><br/><br/><br/>
    <div class=" blog">
        <ul>
            <li><a href="../">⬅️Back to HOME🏠</a></li>
        </ul>
    </div>
    <hr width="50%" color="#987cb9" SIZE="1" />
        
        <table class="table_footer">
            <tbody>
                <td>
                    Blogs<i>3.0</i> - Artistic, Better, Convenient Platform  &nbsp;
                    <button class="button button_blogs" onClick={() => alert("Originally written in Markdown(.md) \nConvert Markdown to HTML via Showdown https://showdownjs.com/.")}> Details </button>
                    &nbsp;
                    <a href="/#/blog5"> 
                     <button class="button button_blogs">Update Log</button>  
                     </a> 
                     <br/>
                    {/* Originally written in Markdown(.md) <br/>Convert Markdown to HTML via <a
                        href="https://showdownjs.com/">Showdown</a><br/> */}
                   <FooterCommon />
                </td>
            </tbody>
        </table>
    </>
)
}
function myFunction() {
  alert("I am an alert box!");
}

 