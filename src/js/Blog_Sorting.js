/* All rights reserved. 2022-2026 (c) Peter HU */

import { useEffect, useState } from "react";
import "../index.css";
import Hr_Award from '../asset/data/Hr_Award.json';
import Ongoing from '../asset/data/Ongoing_PrAs.json';
import Past from '../asset/data/Past_PrAs.json';
import Computer_System from '../asset/data/Computer_System.json';
import Machine_Learning from '../asset/data/Machine_Learning.json';
import Visual_Computing from '../asset/data/Visual_Computing.json';
import { HashLink } from 'react-router-hash-link';
// import Blog_Footer from "./helper/blog_footer";
import FooterCommon from "./helper/footerCommon"
import { Processed_blog_link } from "./helper/tableCommon";
// import Blog_Top from "./helper/blog_top";
import Index_Top from "./helper/index_top";
// import $ from "jquery";
import ScrollToTop from "./helper/ScrollToTop";
import { motion } from 'framer-motion';
import {ChangeBodyColor} from "./helper/index_top";
var resource=Ongoing.concat(Hr_Award);
resource=resource.concat(Computer_System); 
resource=resource.concat(Machine_Learning); 
resource=resource.concat(Visual_Computing); 
resource=resource.concat(Past); 

export default function Blog_Sorting(){
    useEffect(() => {
            document.title = 'Blogs - Peter HU';
    }, []);
    return(   
        <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }} 
        // initial="initialState"
        // animate="animateState"
        
        // transition={{ duration: 1 }} 
        // variants={{
        //     initialState: {
        //       opacity: 0,
          
        //       clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        //     },
        //     animateState: {
        //       opacity: 1,
        //       clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        //     }  
        //   }}
        > 
    <ScrollToTop> 
        <div>
        {/* <Blog_Top/> */}
        <Index_Top type="blog"/>
        <div class="blogHeader">
         <br />  
            <center>
            <p id="welcome" >
                <strong>
                <font size="+3" color="white" style={{"font-family":"BrushScriptMT-embed"}}>Welcome to My Blogs🌟</font>
                <font size="+0" color="white"><i>3.0</i></font>
                </strong>
            </p> 
            </center>
        </div>
        {/* 
        <center>
            <p id="welcome"><strong><font size="+3"></font></strong></p>
        </center>
        <br />  
        <img  width= "100%"  src="/asset/photo/bg/Magic.jpg" alt="Magic"/> */}
        {/*  &ensp;&ensp;&ensp;
        ⬇ <i>Sort Data on Header Click</i> */}
        <Table resource={resource}/>
        <center>
        <p><strong>More to Discover</strong></p> 
        Useful  <a className="project-link"
        href="/#/ref">Resource and Reference📚</a> | <HashLink 
        className="project-link"
        to="/PhotoDisplay">Photographs Of Moments</HashLink>
        </center>
      
        {/* <img  width= "100%"  src="/asset/photo/bg/Magic2.jpg" alt="Magic"/> <br/> */}
       
        <div class="blogFooter">
         <br />  
            <center>
            {/* <Blog_Footer /> */}
            <FooterCommon/>   

            </center>
        </div>
       
    </div> 
    </ScrollToTop>
    </motion.div>
    )
}

 
// TableContent Component for rendering each row
function TableContent(props) {
    const { resource, id } = props;
    const processed_link = Processed_blog_link({link:resource.Blog});
    if (resource.Blog) {
      return (
        <tr className="hover">
          <td className="sequence">{id}</td>
          <td>
            <a className="project-link"
            href={processed_link}
            // target="_blank"
            // rel="noopener noreferrer"
            >
              <center>{resource.Title}</center>
            </a>
          </td>
          <td>{resource.Time}</td>
          <td>{resource.Category}</td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td className="sequence">{id}</td>
          <td className="sequence">{resource.Title}</td>
          <td>{resource.Time}</td>
          <td>{resource.Category}</td>
        </tr>
      );
    }
  }
  

function Table(props){

    ChangeBodyColor("#ddd9f5");

    // State to hold sorted data and the current sort order
    const [sortIndex, setSortIndex] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc'); // ascending or descending
    const [sortedData, setSortedData] = useState([...props.resource]);
    
    useEffect(() => {
        setSortedData([...props.resource]);
      }, [props.resource]);

      
    // var len=props.resource.length;
    // var keys = [...Array(len).keys()];
    // keys.sort((a,b)=>a-b);
    // initialize the header name 0: id, 1: Title, 2: Time, 3: Category
    const header = ["No.", "Title", "Time", "Category"];
    const handleSort = (columnIndex, type) => {
        if (columnIndex === 0) return;
        // alert
        console.log('Sorting column:', columnIndex, type);

        const newSortOrder = sortIndex === columnIndex && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortIndex(columnIndex);
        setSortOrder(newSortOrder);

        sortedData.sort((a, b) => {
            let value1 = a[header[columnIndex]];
            let value2 = b[header[columnIndex]];
            
            // console.log(sortedData);
            // console.log('value1:', value1, 'value2:', value2);


            if (type === 'number') {
                value1 = value1 === "" ? 0 : value1;
                value2 = value2 === "" ? 0 : value2;
                return newSortOrder === 'asc' ? value1 - value2 : value2 - value1;
            } else {
                // convert to string
                value1 = value1 != null ? String(value1) : "";
                value2 = value2 != null ? String(value2) : "";
                return newSortOrder === 'asc' ? value1.localeCompare(value2) : value2.localeCompare(value1);
            }
        });

        // Update the sorted data state
        setSortedData(sortedData);
    }

    const renderSortTriangle = (columnIndex) => {
        if (sortIndex !== columnIndex) return null; // No triangle if the column is not sorted
        return sortOrder === 'asc' ? '▲' : '▼'; // Show ▲ for ascending and ▼ for descending
    };

    return(
    <div class="blog_sorting">
    <table id="tableSort">
        <thead>
            <tr>
                <th  
                onClick={() => handleSort(0, 'number')}
                >No. {renderSortTriangle(0)}</th>
                <th  
                onClick={() => handleSort(1, 'string')}
                > 🔗Blog  {renderSortTriangle(1)}</th>
                <th  
                onClick={() => handleSort(2, 'string')}
                >🗓️Date  {renderSortTriangle(2)}</th>
                <th 
                onClick={() => handleSort(3, 'string')}
                >🏷️Tags {renderSortTriangle(3)} </th>
            </tr>
        </thead>
        <tbody>
        {/* {keys.map((item)=>(
            <Table_content id={item} resource={props.resource[item]}/> 
        ))}   */}
        {sortedData.map((item, index) => (
            <TableContent id={index + 1} resource={item} />
        ))}
        </tbody>
        </table>
    </div>
    )
}


// legacy jQuery code for sorting table
{/* <script type="text/javascript">
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
</script> */}
