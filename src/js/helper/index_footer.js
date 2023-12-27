import FooterCommon from "./footerCommom"
export default function Index_Footer(){
    return(
    <>
    <hr width="50%" color="#987cb9" SIZE="1" /> 
    <table class="table_footer">
    <tbody>
        <td >
            <strong>Contact Details </strong>
            <img width= "18vw" src="/asset/photo/Logo/e-mail.png" alt="email"/><a href="mailto:zh369@cam.ac.uk" >Email</a>  &nbsp; 
             <img width= "12vw" src="/asset/photo/Logo/phone.png" alt="phone"/>
            <a href="tel:4407990719841">Tel</a> | 
             {/* (+44) 07990 719841 */}
             <a href="https://github.com/PeterHUistyping"> <img width= "18vw" src="/asset/photo/Logo/github.svg" alt="github"/></a> |  <a href="https://www.linkedin.com/in/peterhu2022/"> <img width= "16vw" src="/asset/photo/Logo/linkedin.svg" alt="linkedin"/></a> 
              {/* | More*/ }
              <br/> 

            <FooterCommon />   
            </td>
        </tbody>
    </table>
    </>
)}