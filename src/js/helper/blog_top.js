// /* All rights reserved. 2022-2025 (c) Peter HU */

// // legacy code, merged to index_top
// import { NavLink } from "react-router-dom"; 
// import { HashLink } from 'react-router-hash-link';
// import React from "react";
// import { useRef } from "react";

// function Blog_top(){
//     return (
//       <>
//       <body_>
//       <div class="top" >
//       <ul>
//           <li>
//               <HashLink style={{ color: 'black' }} to="/Blog_Sorting/" ><b style={{"font-family":"BrushScriptMT-embed"}}>Peter </b>HU's Blogs&nbsp; &nbsp;</HashLink> 
//           </li>
//           <li>
//               <NavLink id="top_home" exact activeClassName='is-active' to="/">🏠HOME▾</NavLink>  
//               {/* <a href="/#">🏠HOME</a> */}
//               <ul>
//                   <li>
//                       <NavLink id="top_bio" exact activeClassName='is-active' to="/aboutme">👨‍💼Bio. </NavLink>
//                   </li>
//               </ul>
//           </li>
//           <li>
//               <NavLink id="top_res" exact activeClassName='is-active' to="/research">💭Research▾</NavLink>  
//               <ul>
//                   <li>
//                       <HashLink id="top_academia" exact activeClassName='is-active' to="/research/#academicResearch">academia </HashLink>
//                   </li>
//                   <li>
//                       <HashLink id="top_industry" exact activeClassName='is-active' to="/research/#industryResearch">industry</HashLink>
//                   </li>
//               </ul>
//           </li>
//           <li>  
//             <NavLink id="top_project" exact activeClassName='is-active' to="/project">🧑‍💻Projects▾</NavLink>  
//             {/* <HashLink to="/project/" >🧑‍💻Project▾</HashLink> */}
//               <ul>
//                   <li> 
//                       <NavLink id="top_award" exact activeClassName='is-active' to="/award">Awards</NavLink>  
//                       {/* <HashLink to="/award/">Awards</HashLink> */}
//                   </li>
//                   <li>
//                       <NavLink id="top_experience" exact activeClassName='is-active' to="/experience">Experience</NavLink>
//                       {/* <HashLink to="/experience">Experience</HashLink>  */}
//                   </li>
//               </ul>
//               {/* <ul>
//                   <li><HashLink to="/project/#ongoing_project">🆕Ongoing</HashLink> </li>
//                   <li><HashLink to="/project/#previous_project">📖Previous</HashLink> </li>
//               </ul> */}
//           </li>

//           {/* <li><a href="https://github.com/PeterHUistyping">🖥️Github</a></li> */}
//           <li>
//             <NavLink id="top_blog" exact activeClassName='is-active' to="/Blog_Sorting">📝Blogs▾</NavLink>  
//             {/* <a href="/#/Blog_Sorting/">📝Blogs▾</a>  */}
//               <ul>
//                   <li> 
//                     <NavLink id="top_ref" exact activeClassName='is-active' to="/ref">📚ref</NavLink>  
//                     {/* <a href="/#/ref">📚Ref</a> */}
//                   </li>
//                   <li> 
//                     <NavLink id="top_blog5" exact activeClassName='is-active' to="/blog5">⛵log</NavLink>  
//                     {/* <a href="/#/blog5">⛵Update</a> */}
//                   </li>
//               </ul>
//           </li>
//           <li>
//             {/* <HashLink to="/#contact">📬Contact▾</HashLink> */}
//             <NavLink id="top_contact" exact activeClassName='is-active' to="/contact">📬Contact▾</NavLink>
//           <ul>
//               <li><a href="./asset/doc/CV_PeterHU.pdf"><img width= "20vw" src="/asset/photo/Logo/cv-blue.png" alt="cv" title="CV"/></a></li>
//               <li><a href="https://github.com/PeterHUistyping"> <img width= "22vw" src="/asset/photo/Logo/github.svg" alt="github" title="Github"/></a></li>
//               {/* <li><a href="https://www.linkedin.com/in/peterhu2022/"> <img width= "22vw" src="/asset/photo/Logo/linkedin.svg" alt="linkedin"/></a></li> */}
//           </ul>
//           </li>
//           {/* <li><a href="#">⬆️Top</a></li> */}
//           {/* <li><a href={window.location.href+"/#"}>🔝</a></li> */}
//           {/* <li><a href="/asset/blog/blog.html">🎶Music</a>
//               <ul>
//               <li><a href="#">🚫 on 👉</a></li>
//               </ul>
//               <ul>
//               <li><a href="#">Frame</a></li>
//               </ul>
//           </li> */}
//           {/* <li>
//               <Button onClick={sayHello}>Settings</Button>
//           </li>      */}
//           <li><a href={window.location.href}>🏷️Settings▾</a>
//           {/* 🛠️<large>⚙️</large> */}
//               <ul>
//                   <li><Bg_color /></li>
//                   <li>    
//                       {/* <a href="/asset/blog/blog.html">   
//                       <button class="button button_settings" onClick={() => setDisable(true)}>🎶</button>      
//                       </a> */}
//                       <DisableAfterClick />
//                   </li>
//               </ul>
//           </li>
        
//       </ul>
//   </div>
//   </body_>
//   <br /><br /> 
//   </>
//   )
// }
// export default function Blog_Top(){
//   var w = window.innerWidth;
//   if( w>800 ){
//     return(
//       <Blog_top />
//     )}
//   else{
//     return(
//         <>
//           <Blog_top />
//           <br/> 
//           <br/> 
//         </>
//     )}
// }
// let audio = new Audio("/asset/audio/Town_of_Windmill.mp3");
// let music_state=true
// function DisableAfterClick() {
//     const [btnState, setBtnState] = React.useState(false);
//     let btnRef = useRef();
//     const onBtnClick = (e) => {
//     if (btnRef.current) {
//         // window.location.href="/asset/blog/blog.html"
//         if(music_state){
//             audio.play();
//         }
//         else{
//             audio.pause();
//         }
//         music_state=!music_state;
//         setBtnState(btnState => !btnState);
//         // btnRef.current.setAttribute("disabled", "disabled");
//     }
//   };
//   return (
//         <button  className={`button ${btnState ? "button_musicon" : "button_musicoff"}`} ref={btnRef} onClick={onBtnClick}>🎶</button>      
//   );

// };
// const colors = ["#f9e5f7", "#eedcd0","#d9f2d9", "#ddd9f5","#def5f1" ];

// export function ChangeBodyColor(c){
//   document.body.style.backgroundColor = c;
// };

// function Bg_color() {
//   const [backgroundColor, setBackgroundColor] = React.useState("");
//   return (
//     <div
//       style={{
//         backgroundColor
//       }}
//     >
//       <style>
//         {`
//         .circle {
//           border-radius: 50%;
//           width: 15px;
//           height: 15px;
//           border: 1px solid black;
//           display: inline-block;
//           cursor: pointer;
//         }
//       `}
//       </style>
//       {colors.map((c) => {
//         return (
//           <div
//             key={c}
//             style={{
//               backgroundColor: c
//             }}
//             class="circle"
//             onClick={() =>{setBackgroundColor(c);ChangeBodyColor(c)} }
//           >
            
//           </div>
          
//         );
//       })}
//     </div>
//   );
// };
