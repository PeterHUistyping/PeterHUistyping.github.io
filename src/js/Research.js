/* All rights reserved. 2022-2025 (c) Peter HU */

import Pub_table from "./Pub_Table";
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"
import React, {useState, useEffect } from "react";
import {ExperienceContents} from "./Experience";
import {TalkList} from "./Talk";
import { HashLink } from 'react-router-hash-link';
import research_json from '../asset/data/Pub.json';
import academia_json from '../asset/data/Academia.json';
import { LargeExpandablePanel } from "./helper/uiBasicElements";


export function Publication(props){
    return (
        <>
            <small style={{ display: 'block', textAlign: 'center'}}>| under the supervision of <i style={{color: "#1E90FF"}}>italic</i> ; <b>†</b> indicates equal contribution |</small> 

            <Pub_table displayNum={props.displayNum}/>
        </>
    )
}


function Review(){
    return(
        <div>
            <h2 id="review" style={{"font-family":"BrushScriptMT-embed", textAlign: 'center' }}><b>Reviewing Experience</b></h2>
            With thanks to the nomination and invitation, I have served as the <br/>
            <div style={{width: "75%", margin: "10px auto", textAlign: "left"}}>

                <i>Peer Reviewer in the <a href="https://unireps.org/2025/">UniReps Workshop</a>, 39th Conference on Neural Information Processing Systems (NeurIPS'25). </i>
                
            </div>

        </div>

    )

}


function LegacyAcademicDescription(){
    /* University of Cambridge */
    return(
        <>
        {/* <a href="https://www.cam.ac.uk/"><img width="27" height="24" src="./asset/photo/Logo/Cam.png" alt="Cambridge" /></a> <a href="https://core-lab.io/">Cambridge Open Reality and Visual AI (CORE) Lab</a> (<a href="https://www.cl.cam.ac.uk/~aco41/">Prof Cengiz Öztireli</a>), <a href="https://www.cst.cam.ac.uk/">Dept. of Computer Science and Technology</a> | <i>May, 2024 - Present</i>   <br/>
        <br/>
        <div style={{width: "90%", margin: "auto"}}>
        I am privileged to undertake some interesting academic research explorations @<a href="https://core-lab.io/">Core Lab</a> at the intersection of Computer Graphics, Computer Vision and Machine Learning. During this period, I explore the neural representations of materials, physical accuracy, generative models with evaluation, real-world material synthesis, and many other. 
        <br/>     
        Supported by <a href="#/award">several grants and scholarships</a> from both my college and department, my undergraduate research is supervised by <a href="https://chenliang-zhou.github.io/">Chenliang Zhou</a> on generative machine learning and Dr <a href="https://asztr.github.io/">Alejandro Sztrajman</a> on real-world captured <a href="https://en.wikipedia.org/wiki/Bidirectional_reflectance_distribution_function">BRDF (Bidirectional Reflectance Distribution Function)</a>. Besides, I am mentored by
        Dr <a href="https://www.cl.cam.ac.uk/~fz261/">Fangcheng Zhong</a> on Graphics (geometry representations and rendering), indoor layout synthesis, neural PDE solver.
        <br/> */}
        {/* I am honored to be the recipient of <a href="#/award">several grants and scholarships</a> from both my college and department. */}
        {/* <a href="asset/doc/HuResearch20250327.pdf">2025 Cambridge Summer Internship and Research Award</a>. */}
        {/* <br/>
        </div>         */}
        </>
    )
}


export default function Research(){
    useEffect(() => {
            document.title = 'Research - Peter HU';
    }, []);

    // create a const json 

    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />
     
    <h2 id="research"><b>RESEARCH</b></h2>
    <div class="content">
        <>
        This section is divided into academic and industry research, including list of publications, talks, and other research-related activities.
        {/* Honors_and_awards */}
        <div style={{textAlign: "center"}}>
            <h2 id="academicResearch"><b>Academia</b></h2> 
        </div>

        <LargeExpandablePanel resource={academia_json} />
        
        <br/> 
        <h2 id="publications" style={{"font-family":"BrushScriptMT-embed", textAlign: 'center' }}>List of Publications</h2>

        <Publication/>

        {/* <h2 id="researchStory" style={{"font-family":"BrushScriptMT-embed", textAlign: 'center' }}><b>Journey Behind the Research</b></h2> */}
        {/* <LargeExpandablePanel resource={research_json} />  */}

        <br/>
        
        <h2 id="talk" style={{"font-family":"BrushScriptMT-embed", textAlign: 'center' }}><b>Talk</b> 
        <HashLink to="/talk" className="project-link">》View More</HashLink></h2>

        <TalkList showall={true} showslides={false} />

        <br/> 

        <Review />

        <br/> 

        <div style={{textAlign: "center"}}>
            <h2 id="industryResearch"><b>Industry</b>
            <HashLink to="/experience" className="project-link">》View More</HashLink></h2>
        </div>

        </>
    </div>
    <ExperienceContents showall={false}/>

    {/* <div class="content">
    </div> */}

    <Index_Footer />
    </motion.div>)
}

