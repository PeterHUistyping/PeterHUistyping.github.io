import { HashLink } from 'react-router-hash-link';
import React from "react";
import { useRef } from "react";
import { useState } from "react";
export default function Blog_Top(){
    return (
        <>
        <body_>
        <div class="top">
        <ul>
            <li>
              <HashLink  style={{ color: 'black' }} to="/Blog_Sorting/#welcome" ><i >Peter </i>HU's Blogs&nbsp; &nbsp;</HashLink> 
            </li>
            <li>
                <a href="/#">🏠HOME</a>
            </li>

            <li>  <HashLink to="/project">📊Project</HashLink>   
                <ul>
                    {/* <li><HashLink to="/project/#ongoing_project">🆕Ongoing</HashLink> </li> */}
                    <li><HashLink to="/project/#previous_project">📖Previous</HashLink> </li>
                </ul>
            </li>

            <li><a href="https://github.com/PeterHUistyping">🖥️Github</a></li>
            <li><a href="/#/Blog_Sorting/#welcome">📝Blog</a> 
                <ul>
                    <li> <a href="/#/ref">📚Ref</a></li>
                    <li> <a href="/#/blog5">⛵Update</a></li>
                </ul>
            </li>
            <li><HashLink to="/#contact">📬Contact </HashLink> </li>
            {/* <li><a href="#">⬆️Top</a></li> */}
            <li><a href={window.location.href+"/#"}>🔝Top</a></li>
            {/* <li><a href="/asset/blog/blog.html">🎶Music</a>
                <ul>
                <li><a href="#">🚫 on 👉</a></li>
                </ul>
                <ul>
                <li><a href="#">Frame</a></li>
                </ul>
            </li> */}
            {/* <li>
                <Button onClick={sayHello}>Settings</Button>
            </li>      */}
            <li><a href={window.location.href}>⚙️Settings🛠️</a>
                <ul>
                    <li><Bg_color /></li>
                    <li>    
                        {/* <a href="/asset/blog/blog.html">   
                        <button class="button button_settings" onClick={() => setDisable(true)}>🎶</button>      
                        </a> */}
                        <DisableAfterClick />
                    </li>
                </ul>
            </li>
           
        </ul>
    </div>
    </body_>
    <br /><br /><br /><br /><br /><br />
    </>
    )
}
let audio = new Audio("/asset/audio/Town_of_Windmill.mp3");
let music_state=true
function DisableAfterClick() {
    const [btnState, setBtnState] = React.useState(false);
    let btnRef = useRef();
    const onBtnClick = (e) => {
    if (btnRef.current) {
        // window.location.href="/asset/blog/blog.html"
        if(music_state){
            audio.play();
        }
        else{
            audio.pause();
        }
        music_state=!music_state;
        setBtnState(btnState => !btnState);
        // btnRef.current.setAttribute("disabled", "disabled");
    }
  };
  return (
        <button  className={`button ${btnState ? "button_musicon" : "button_musicoff"}`} ref={btnRef} onClick={onBtnClick}>🎶</button>      
  );

};
function ChangeBodyColor(c){
  document.body.style.backgroundColor = c;
};
const colors = ["#f9e5f7", "#eedcd0","#d9f2d9", "#ddd9f5","#def5f1" ];
function Bg_color() {
  const [backgroundColor, setBackgroundColor] = React.useState("");
  return (
    <div
      style={{
        backgroundColor
      }}
    >
      <style>
        {`
        .circle {
          border-radius: 50%;
          width: 15px;
          height: 15px;
          border: 1px solid black;
          display: inline-block;
          cursor: pointer;
        }
      `}
      </style>
      {colors.map((c) => {
        return (
          <div
            key={c}
            style={{
              backgroundColor: c
            }}
            class="circle"
            onClick={() =>{setBackgroundColor(c);ChangeBodyColor(c)} }
          >
            
          </div>
          
        );
      })}
    </div>
  );
};
