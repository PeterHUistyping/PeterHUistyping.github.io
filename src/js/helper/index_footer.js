/* All rights reserved. 2022-2025 (c) Peter HU */

import FooterCommon from "./footerCommon"
import { NavigationNotice } from "./navigation_footer"

export default function Index_Footer(){
    return(
    <>
    <NavigationNotice />
    <br/>
    <hr width="50%" color="#C0C0C0" size="1" />  
    {/* #987cb9 */}
    <table class="table_footer">
    <tbody>
        <td >
            {/* <strong>Contact Details </strong>
            <img width= "12vw" src="/asset/photo/Logo/e-mail.png" alt="email"/><a href="mailto:zh369@cam.ac.uk" >Email</a>  &nbsp; 
             <img width= "12vw" src="/asset/photo/Logo/phone.png" alt="phone"/>
            <a href="tel:4407990719841">Tel</a> |  */}
                {/* (+44) 07990 719841 */}
             {/* <a href="https://github.com/PeterHUistyping"> <img width= "15vw" src="/asset/photo/Logo/github.svg" alt="github"/></a> |   */}
             {/* <a href="https://www.linkedin.com/in/peterhu2022/"> <img width= "16vw" src="/asset/photo/Logo/linkedin.svg" alt="linkedin"/></a> | */}
             {/* <a href="https://www.kaggle.com/peterhu2022"> <img width= "16vw" src="/asset/photo/Logo/kaggle.svg" alt="linkedin"/></a>  */}
                {/* | More*/ }
              {/* <br/>  */}

            <FooterCommon />   
            </td>
        </tbody>
    </table>
    </>
)}