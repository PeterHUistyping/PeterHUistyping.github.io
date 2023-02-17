import "../index.css";
 
import Hr_Award from '../../public/asset/data/Hr_Award.json';
import Ongoing from '../../public/asset/data/Ongoing_PrAs.json';
import Past from '../../public/asset/data/Past_PrAs.json';
import Blog_Footer from "./helper/blog_footer";
import Blog_Top from "./helper/blog_top";
import $ from "jquery";
import ScrollToTop from "./helper/ScrollToTop";
var resource=Ongoing.concat(Hr_Award);
resource=resource.concat(Past); 
export function Blog_Sorting(){
    return(   
    <ScrollToTop> 
    <div>
     <Blog_Top/>
    <center>
   <p id="welcome"><strong><font size="+3"> Welcome to My Personal Blog📝</font></strong></p>
   </center>
   <br />  
   
   &ensp;&ensp;&ensp;
   {/* ⬇ <i>Sort Data on Header Click</i> */}
    <Table resource={resource}/>
 
   <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}
$(document).ready(function () {
    var tableObject = $('#tableSort');// get 
    var tbHead = tableObject.children('thead');// table-thead
    var tbHeadTh = tbHead.find('tr th');//thead-tr-th
    var tbBody = tableObject.children('tbody');// table-tbody
    var tbBodyTr = tbBody.find('tr');// tbody-tr
    var sortIndex = -1; //initialize
    tbHeadTh.each(function () {//for each thead tr th
        var thisIndex = tbHeadTh.index($(this));//获取th所在的列号
        //鼠标移除和聚焦的效果，不重要
        $(this).mouseover(function () { //remove the mouse
            tbBodyTr.each(function () {//编列tbody下的tr
                var tds = $(this).find("td");//获取列号为参数index的td对象集合
                $(tds[thisIndex]).addClass("hover");
            });
        }).mouseout(function () { //鼠标聚焦时间
            tbBodyTr.each(function () {
                var tds = $(this).find("td");
                $(tds[thisIndex]).removeClass("hover");
            });
        });

        $(this).click(function () {  //mouse
            var dataType = $(this).attr("type"); // type of this col
            checkColumnValue(thisIndex, dataType); //sorting function
        });
    });

    //display
    $("tbody tr").removeClass();// tbody tr css
    $("tbody tr").mouseover(function () {
        $(this).addClass("hover");
    }).mouseout(function () {
        $(this).removeClass("hover");
    });

    //Sorting the tbl
    function checkColumnValue(index, type) {
        var trsValue = new Array();  // Array
        tbBodyTr.each(function () { // for each tr
            var tds = $(this).find('td');//all td   

            // 当前索引的 值，和当前行的值
            trsValue.push(type + ".separator" + $(tds[index]).html() + ".separator" + $(this).html());
            $(this).html("");//empty current col
        });
        var len = trsValue.length;//all length
        if (index == sortIndex) {//sortIndex =-1
            trsValue.reverse();//???
        } else {
            
            for (var i = 0; i < len; i++) {
                type = trsValue[i].split(".separator")[0];// type
                for (var j = i + 1; j < len; j++) {
                    var value1,value2;
                    value1 = trsValue[i].split(".separator")[1];// current value
                    value2 = trsValue[j].split(".separator")[1];// the next value
                    if (type == "number") {
                        //js empty->0
                        value1 = value1 == "" ? 0 : value1;
                        value2 = value2 == "" ? 0 : value2;
                        //parseFloat()  return float
                        //the first char is not a num parseFloat() return NaN。
                        if (parseFloat(value1) > parseFloat(value2)) {
                            var temp = trsValue[j];
                            trsValue[j] = trsValue[i];
                            trsValue[i] = temp;
                        }
                    } else {
                        //JavaScript localeCompare()  
                        // if stringObject < target ->   < 0
                        if (value1.localeCompare(value2) > 0) {//Not suitable for Google Browser
                            var temp = trsValue[j];
                            trsValue[j] = trsValue[i];
                            trsValue[i] = temp;
                        }
                    }
                }
            }
        }
        for (var i = 0; i < len; i++) {
            //insert back to the table
            //:eq(index) 匹配一个给定索引值的元素
            $("tbody tr:eq(" + i + ")").html(trsValue[i].split(".separator")[2]);
            //console.log($("tbody tr:eq(" + i + ")").html())
        }
        sortIndex = index;
    }

})
function Table_content(props){
    if(props.resource.Blog){
    return (
        <>
        <tr class="hover">
          <td class="sequence">{props.id}</td>
          <td><a href={"/#/"+props.resource.Blog}><center>{props.resource.Title}</center></a></td>  
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
    var len=props.resource.length;
    var keys = [...Array(len).keys()];
    keys.sort((a,b)=>a-b);
   
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


 
 
