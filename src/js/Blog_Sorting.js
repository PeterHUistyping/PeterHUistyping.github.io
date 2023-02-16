import "../index.css";
import Hr_Award from '../../public/asset/data/Hr_Award.json';
import Ongoing from '../../public/asset/data/Ongoing_PrAs.json';
import Past from '../../public/asset/data/Past_PrAs.json';
var resource=Ongoing.concat(Hr_Award);
resource=resource.concat(Past); 
export function Blog_Sorting(){
    return(
    <div>
        {/* <script src="/blog_top.js"></script>
    */}
    <center>
   <p><strong><font size="+3"> Welcome to My Personal Blog📝</font></strong></p>
   </center>
   <br /> <br />
   
   &ensp;&ensp;&ensp;⬇ <i>Sort Data on Header Click</i>
    <Table resource={resource}/>
   {/* <script type="text/javascript" src="./Sorting.js"></script> */}
   {/* <script src="./blog_footer.js"></script> */}
    </div> )
}
function Table_content(props){
    if(props.resource.Blog){
    return (
        <>
        <tr class="hover">
          <td class="sequence">{props.id}</td>
          <td><a href={"/asset/blog/"+props.resource.Blog}><center>{props.resource.Title}</center></a></td>  
          <td>{props.resource.Time}</td>
          <td>{props.resource.Category}</td>  
        </tr>
        </>
    )
    }
    else {
        return (
            <>
            <tr>
              <td class="sequence">{props.id}</td>
              <td class="sequence">{props.resource.Title}</td>  
              <td> {props.resource.Time}</td>
              <td>{props.resource.Category}</td>  
            </tr>
            </>
        )     
    }
}

function Table(props){
    const keys = [...Array(props.resource.length).keys()];
    return(
    <div class="blog_sorting">
    <table id="tableSort">
        <thead>
            <tr>
                <th type="number">No.</th>
                <th type="string">Blog 🔗 </th>
                <th type="number">Date 🗓️ </th>
                <th type="string">Category 📚 </th>
            </tr>
        </thead>
        <tbody>
        {keys.map((item)=>(
            <Table_content id={item} resource={props.resource[item]}/>
        ))}  
        </tbody>
        </table>
    </div>
    )
}


 
 
