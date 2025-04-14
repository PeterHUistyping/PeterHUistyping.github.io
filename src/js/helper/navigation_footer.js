import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';

export function NavigationNotice(){
    const [emojiIndex, setEmojiIndex] = useState(0);
    const emoji_arr = ["ಠ_ಠ", "(•‿•)", "(¬‿¬)", "(╯°□°)╯", "\\(°□°)/"];

    useEffect(() => {
        const interval = setInterval(() => {
          setEmojiIndex((prevIndex) => (prevIndex + 1) % emoji_arr.length); // Loop through emojis
        }, 8000); // Change every 8 seconds
    
        return () => clearInterval(interval); // Clean up interval on component unmount
      }, []);
    
    return(
        <div style={{width: "80%", margin: "auto", textAlign: "center"}}>
        <div class ="announcement">
        | <HashLink   to="/" 
            className="project-link"
        >Home🏠</HashLink>   /      <HashLink to="/aboutme"
            className="project-link"
        >Bio.👨‍💻</HashLink> /  <HashLink    to="/research"
            className="project-link"
        >Research💭</HashLink> \       <HashLink  to="/award"
            className="project-link"
        >Awards🥇</HashLink> \ <HashLink to="/project"
            className="project-link"
        >Projects🧑‍💻</HashLink> | <br/>
        {/* font change to gray */}
        <div style={{ color: 'gray' }}>
        👈 Alternatively, please navigate via the left sidebar.
        ᥫ᭡ {emoji_arr[emojiIndex]} ᥫ᭡ 
        </div>
        {/* <HashLink to="/experience"><i>Experience</i></HashLink><br/> */}
        </div>
        </div>  
    )
}