/* All rights reserved. 2022-2025 (c) Peter HU */

import Pub_table from "./Pub_Table";
import Index_Footer from "./helper/index_footer";
import Index_Top from "./helper/index_top";
import { motion } from 'framer-motion'
import Sidebar_Project from "./helper/project_sidebar"
import React, {useState, useEffect } from "react";
import {ExperienceContents, TalkRayTracing} from "./Experience";
import { StoryDescriptionButton } from "./helper/uiBasicElements";
import { HashLink } from 'react-router-hash-link';


export function Publication(){
    return (
        <>
            <Pub_table />
            <small>† indicates equal contribution.</small> <br/>
        </>
    )
}


export function ResearchStory(){
    return(
        <>
        <h3 id="researchStory"><b>Journey Behind the Research</b></h3>

        <StoryDescriptionButton 
            title={<><b>ABOUT my first paper</b> <i>NeuMaDiff: Neural Material Synthesis via Hyperdiffusion.</i></>}

            mainText={ <>
            Coauthored with my supervisors <a href="https://chenliang-zhou.github.io/">Chenliang Zhou</a> and Dr <a href="https://asztr.github.io/">Alejandro Sztrajman</a>, we together propose different aspects to the novel architecture, where I draw the network architecture via LaTeX <a href="https://github.com/pgf-tikz/pgf">TikZ</a>. Our methods support the unconditional, statistically constrained and multi-modal generation of materials. With my experiments on PCA, VAE taking in either original or neural materials, we found out that hyperdiffusion has superiority in generating materials with high fidelity and diversity. <br/>

            Team up with Dr <a href="https://asztr.github.io/">Alejandro Sztrajman</a>, we further explore and finalize the statistical constraints for each type of material, e.g. plastic, fabric, metallic, mirror-like, etc, based on observation and experiments. It serves as a classical, as well as ML-free way to classify the material. <br/>
        
            In particular, there is a lack of effective BRDF-space metrics in generation tasks, where we fill the gap through my experiments, targeting the diversity and fidelity with various underlying distance functions tried. Through literature review, I raise the idea of adapting point cloud based metrics to the field of materials. With further discussions with <a href="https://chenliang-zhou.github.io/">Chenliang Zhou</a>, we finalize on which pairwise distance measurements to use. To further illustrate its effectiveness, I utilize the confusion matrix to demonstrate the evaluation process. With help of my plotted graph, it's clear that our methods are able to identify the relationship between reference and synthetic material sets. <br/>
        
            Finally, as a proof of concept, I setup some typical scenes using the proposed materials and render them with the physically-based renderer <a href="http://www.mitsuba-renderer.org/">Mitsuba3</a>, which I writeup the BSDF class taking in the required binary format with proper importance sampling strategies (since there's no such public error-free implementation for Python version Mitsuba3).<br/> 
        </>}
        ></StoryDescriptionButton>
        <br/>  

        <StoryDescriptionButton 
            title = {<><b>ABOUT collaborative </b> <i>CHOrD: Generation of Collision-Free, ..., Digital Twins for 3D Indoor Scenes.</i></>}
            mainText = {<>
              Mentored by Dr <a href="https://www.cl.cam.ac.uk/~fz261/">Fangcheng Zhong</a>, we investigated how 2D floor plans generation can be integrated with 3D indoor scene synthesis, for lower collision rate and higher fidelity. 
              In addition, a new real-world indoor scenes dataset will be released.
              <br/>

              I am responsible for reproducing the prior art <a href="https://tangjiapeng.github.io/projects/DiffuScene/">DiffuScene, CVPR24</a> and <a href="https://chenguolin.github.io/projects/InstructScene/"> InstructScene, ICLR24 Spotlight</a>. Meanwhile, I investigated the YOLO-v8 Oriented Bounding Box (OBB) <a href="https://github.com/ultralytics/ultralytics/issues/15805">detection error</a> and proposed alternative methods. 
              <br/>

              The former <a href="https://tangjiapeng.github.io/projects/DiffuScene/">DiffuScene</a> is based on applying diffusion model for parametrized objects (location, size, orientation, class, shape code). For greater instruction control, the latter <a href="https://chenguolin.github.io/projects/InstructScene/"> InstructScene</a> follows a two-stage procedure. A semantic graph, with class label, (additional) pairwise spatial relationship and quantized features, is constructed from the prior semantic input. After that, a separate 3D decoder determines the exact layout (location, size, orientation).
              <br/>

            </>}
        ></StoryDescriptionButton>
        <br/>  


        </>
    )
}


export function Research(){
    useEffect(() => {
            document.title = 'Research - Peter HU';
    }, []);

    return (
    <motion.div> 
    <Index_Top/> 
    
    <Sidebar_Project />
     
    <h2 id="research"><b>RESEARCH EXPERIENCE</b></h2>
    <div class="content">
        <>
        {/* Honors_and_awards */}
        <h2 id="academicResearch"><b>Academic Research</b></h2> 
        {/* University of Cambridge */}
        <i>May, 2024 - Present</i> | <a href="https://www.cam.ac.uk/"><img width="27" height="24" src="./asset/photo/Logo/Cam.png" alt="Cambridge" /></a> <a href="https://core-lab.io/">Cambridge Open Reality and Visual AI (CORE) Lab</a> (<a href="https://www.cl.cam.ac.uk/~aco41/">Prof Cengiz Öztireli</a>), <a href="https://www.cst.cam.ac.uk/">Dept. of Computer Science and Technology</a>  <br/>
        <br/>
        <div style={{width: "90%", margin: "auto"}}>
        I am privileged to undertake some interesting academic research explorations @<a href="https://core-lab.io/">Core Lab</a> at the intersection of Computer Graphics, Computer Vision and Machine Learning. During this period, I explore the neural representations of materials, physical accuracy, generative models with evaluation, real-world material synthesis, and many other. 
        <br/>     
        My undergraduate research is supervised by <a href="https://chenliang-zhou.github.io/">Chenliang Zhou</a> on generative machine learning and Dr <a href="https://asztr.github.io/">Alejandro Sztrajman</a> on real-world materials and <a href="https://en.wikipedia.org/wiki/Bidirectional_reflectance_distribution_function">Bidirectional Reflectance Distribution Function (BRDF)</a>; mentored by
        Dr <a href="https://www.cl.cam.ac.uk/~fz261/">Fangcheng Zhong</a> on Graphics (geometry representations and rendering), indoor layout synthesis.
        <br/>
        I am honored to be the recipient of <a href="asset/doc/HuResearch20250327.pdf">2025 Cambridge Summer Internship and Research Award</a>.
        <br/>
        </div>        
        <br/> <br/>
        
        <br/> 
        <h3 id="pub"><b>List of Publications</b></h3>
        <Publication/>

        <br/>

        <ResearchStory />
        
        <br/>  
        
        <h3 id="talk"><b>Talk</b></h3>
        <TalkRayTracing showall={true}/>
        <br/> <br/> 

        <h2 id="industryResearch"><b>Industry Research</b></h2>
        </>
    </div>
    <ExperienceContents showall={false}/>

    {/* <div class="content">
    </div> */}

    <Index_Footer />
    </motion.div>)
}

