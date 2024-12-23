/* All rights reserved. 2022-2025 (c) Peter HU */

import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
export function Blog1(){
    return(
    <ScrollToTop> 
    <div>
    <Blog_Top/>
        <>
        <h1>Typing-Game</h1>
    C Project Super Programmer Game Development<br/>
    <img width= "300vw" src="/asset/photo/Assignment/1/Interface.png" alt="Interface"/>
    <br/>

    <a href="https://github.com/PeterHUistyping/Typing-Game">Project
        (Github) </a>

    <h2><strong>Environment Configuration
        </strong></h2>
    Using easyX https://easyx.cn/

    <h2>Requirement</h2>
    Draws a standard keyboard layout in the game window.<br/>

    <h2>Interface<br/></h2>
    The gamer presses a key in the keyboard when prompted, such as highlighting a key in the window above. Pressing the
    right one prompts the next letter, and pressing the wrong button, the program waits for the right one to be
    pressed.<br/>

    The key hints in the game should be a meaningful C program. For example, outputing hello world, solving Pi and so
    on.<br/>
    There should be an interface for the player to choose which program to practice.<br/>

    Regarding the game, it is designed to contain:<br/>
    Speed mode: The character falls from the sky, if you do not press the key in time, the character will fall to the
    ground, smashing a gap. When there are too much gaps, it is considered a failure.<br/>
    You can design a character with a reward, and pressing this one will automatically fill in some gaps.
    Scoring rules can be designed.<br/>
    <img width= "300vw" src="/asset/photo/Assignment/1/KEYBOARD-RAINBOW.png" alt="KEYBOARD-RAINBOW" title="KEYBOARD-RAINBOW"/>
    <br/><a href="https://github.com/PeterHUistyping/Typing-Game">See More on GitHub </a>
    </>
     
    <Blog_Footer />
     </div> 
    </ScrollToTop>
    )
}