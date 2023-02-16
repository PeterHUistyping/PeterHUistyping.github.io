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
                    © Copyright 2022-2023 PeterHU. Hosted by <a href="https://pages.github.com/">GitHub Pages</a> and <a href="https://reactjs.org">React App</a>.<br/>
                    Last updated:
                    <script>
                        document.write(document.lastModified);
                    </script>
                </td>
            </tbody>
        </table>
    </>
)
}
 