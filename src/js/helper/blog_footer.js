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
                    Originally written in Markdown(.md). Convert Markdown to HTML via <a
                        href="https://showdownjs.com/">Showdown</a><br/>
                   <FooterCommon />
                </td>
            </tbody>
        </table>
    </>
)
}
 