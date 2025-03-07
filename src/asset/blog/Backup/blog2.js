/* All rights reserved. 2022-2025 (c) Peter HU */

import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
// import Blog_Top from "../../js/helper/blog_top";
import Index_Top from "../../../js/helper/index_top";

export function Blog2(){
    return(
    <ScrollToTop> 
    <div>
        {/* <Blog_Top/> */}
        <Index_Top type="blog"/>
            <>
    <h1>Supermarket-Management-System</h1>
    C++ OOP Project<br/>
    <a href="https://github.com/PeterHUistyping/Supermarket-Management-System">Project (Github) </a>


    <h2>OS</h2>
    Windows

    <h2>Environment</h2>
    Dev C++ & Visual Studio

    <h2>Module Division</h2>
    The functions of each class and their relationship.

    <h3>Class Supermarket</h3>

    Member Object: Cash, Goods, just to name a few.<br/>
    Name: XMUMarket<br/>
    Cash: 100<br/>
    Class Goods<br/>

    ·Includes name of the good, its production_date, its price and its quantity left.<br/>
    [Implemented by virtual function.]<br/>
    Subclasses includes:<br/>
    <h3>Class DailyGoods</h3>
    ·Class Food<br/>
    Includes guarantee_period( day ).<br/>
    ·Class Electrical_Appliance<br/>
    Includes its color and maintenance_period.<br/>
    <h3>Class Order</h3>
    <img width= "300vw" src="asset/photo/Assignment/2/Order_txt.png" alt="Order_txt"/> <br/>
    ·Includes the date of the order, lists of goods and relevant information.<br/>
    After each order is completed, the order information should be printed on the screen and saved locally in txt.
    Subclasses includes:<br/>
    ·Class out decrease in numbers of goods and increase in revenue.<br/>
    ·Class in the opposite.<br/>
    Includes the corresponding ID number and the reason for returning.<br/>
    <h3>The function of each part of the program.</h3>

    input(); menu();<br/>
    Inside menu();<br/>
    case 1:sell();<br/>
    void Selling_substract(int choice)<br/>
    case 2:return_fun();<br/>
    void Return_add(int choice)<br/>
    case 3:display();<br/>
    display(0);display(1);display(2);<br/>
    case 4:revenue_fun();<br/>
    case 5:output();<br/>

    <h3>txt File</h3>

    market_in.txt
    return_out.txt
    order_out.txt
    market_out.txt

    <h3>Friend</h3>
 
    friend istream & operator &#62; &#62; (istream & in,Goods & A);<br/>
    friend ostream & operator &#60; &#60;(ostream & out, Goods & A); <br/>
        friend Goods operator + (Goods& g1,const Goods& g2); <br/>
        friend Goods operator - (Goods& g1,const Goods& g2); <br/>
        friend Goods operator * =(Goods& g1,const Goods& g2);<br/>
        <h3>(Pure) Virtual Function </h3>
        Using virtual int get_type() to classify the type of the child.<br/>
        virtual int get_type()=0; //0 Daily //1 Food //2 <br/>
        EAppliance Dynamic Binding virtual int get_type()=0; //0 Daily //1
        Food //2 EAppliance
        <h3>Operator Overloading </h3>
        friend Goods operator + (Goods& g1,const Goods& g2); <br/>
        friend Goods operator
        - (Goods& g1,const Goods& g2); <br/>
        friend Goods operator * (int n, const Goods& g2); <br/>
        friend Goods operator=(Goods&
        g1,const Goods& g2); <br/>
        <img width= "300vw" src="asset/photo/Assignment/2/Order.png" alt="Order" title="Order"/><br/>
        <a href="https://github.com/PeterHUistyping/Supermarket-Management-System">See More on GitHub
        </a>
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}