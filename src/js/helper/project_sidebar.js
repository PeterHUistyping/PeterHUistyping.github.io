import { HashLink } from 'react-router-hash-link';

 

export default function Sidebar_Project(){
    return (
    <div class="sidebar_main">
        Navigation ☰<i>Sidebar</i>☰ <br></br> 
           <HashLink to="/">HOME</HashLink>  
           <HashLink to="/award">AWARD</HashLink>  
            <HashLink to="/project">PROJECT</HashLink> 
                <center><HashLink to="/project/#Computer_System">&nbsp;&nbsp;&nbsp;System</HashLink> </center>
                <center><HashLink to="/project/#Machine_Learning">&nbsp;&nbsp;&nbsp;ML</HashLink> </center>
                <center><HashLink to="/project_others">&nbsp;&nbsp;&nbsp;Others</HashLink></center>  
            <small><HashLink to="/experience">EXPERIENCE</HashLink></small>   
    </div>     
    )
}