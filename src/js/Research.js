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
import resource from '../asset/data/Pub.json';
// react-markdown is used to render markdown content
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'; 


export function FetchJourneyMainText(props){
    return  (  
        <ReactMarkdown 
            remarkPlugins={[remarkMath, remarkGfm]} 
            rehypePlugins={[rehypeKatex, rehypeRaw]} 
            children={props.Journey}
            components={{
            img:({node,...props})=><img style={{maxWidth:'80%', maxHeight:'60vh'}}{...props}/>,
            p: ({ node, ...props }) => <p style={{ margin: 0 }} {...props} />,
            }}
        />)
}


export function Publication(){
    return (
        <>
            <small style={{ display: 'block', textAlign: 'center'}}>| under the supervision of <i style={{color: "#1E90FF"}}>italic</i> ; <b>†</b> indicates equal contribution |</small> 

            <Pub_table />
            <br/>
        </>
    )
}


export function ResearchStory(){
    return(
        <>
        <h2 id="researchStory" style={{"font-family":"BrushScriptMT-embed", textAlign: 'center' }}><b>Journey Behind the Research</b></h2>

         {resource.map((item, index) => (
            item.Journey && (
        <div>
          <StoryDescriptionButton
            title={
              <>
                <b>About {item.JourneyCategory}</b> <i>{item.ShortTitle || item.Title}</i>.
              </>
            }
            mainText={<FetchJourneyMainText Journey={item.Journey} />}
          />
            <br />
        </div>
        )
        ))}

        {/* <StoryDescriptionButton 
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
            title = {<><b>ABOUT my paper</b> <i>FreNBRDF: A Frequency-Rectified Neural Material Representation.</i></>}
            mainText = {<>
              Supervised by my supervisor <a href="https://chenliang-zhou.github.io/">Chenliang Zhou</a>, I investigate the frequency information of materials, i.e. BRDF, and how to utilize it in the material fitting, reconstruction and editing.  The first task is derived from a <a href="https://doi.org/10.48550/arXiv.1703.06114">set encoder</a> with permutation invariance and flexibility of input size. Then, we measure its capability in material linear interpolation editing. 
              <br/>
              
              We observe that the naive NBRDF autoencoder pipeline described above lacks the frequency information between the two NBRDFs, which might aid NBRDF weight distribution learning. I propose different methods to decompose BRDF three-dimensional inputs into those in unit sphere. Spherical harmonics is leveraged to express per-channel BRDF as a linear combination of orthonormal base functions, which captures the frequency information of BRDF. 
             
              <br/>
              This framework enhances fidelity, adaptability, and efficiency. Extensive experiments demonstrate that FreNBRDF improves the accuracy and robustness of material appearance reconstruction and editing compared to state-of-the-art baselines, enabling more structured and interpretable downstream tasks and applications.
              </>
              }
        ></StoryDescriptionButton>

        <StoryDescriptionButton 
            title = {<><b>ABOUT collaborative </b> <i>CHOrD: Generation of Collision-Free, ..., Digital Twins for 3D Indoor Scenes.</i></>}
            mainText = {<>
              Mentored by Dr <a href="https://www.cl.cam.ac.uk/~fz261/">Fangcheng Zhong</a>, we investigated how 2D floor plans generation can be integrated with 3D indoor scene synthesis, for lower collision rate and higher fidelity. 
              In addition, a new real-world indoor scenes dataset will be released.
              <br/>

              I am responsible for reproducing the prior art <a href="https://tangjiapeng.github.io/projects/DiffuScene/">DiffuScene, CVPR24</a> and <a href="https://chenguolin.github.io/projects/InstructScene/"> InstructScene, ICLR24 Spotlight</a>. Meanwhile, I investigated the YOLO-v8 Oriented Bounding Box (OBB) <a href="https://github.com/ultralytics/ultralytics/issues/15805">detection error</a> and proposed alternative methods. 
              <br/>

              The former <a href="https://tangjiapeng.github.io/projects/DiffuScene/">DiffuScene</a> is based on applying diffusion model for parametrized objects (location, size, orientation, class, shape code). For greater instruction control, the latter <a href="https://chenguolin.github.io/projects/InstructScene/"> InstructScene</a> follows a two-stage procedure. A semantic graph, with class label, (additional) pairwise spatial relationship and quantized features, is constructed from the prior semantic input. After that, a separate 3D decoder determines the exact layout (location, size, orientation). For details, please refer to <a href="asset/photo/pub/2/InstructScene_CF_GISS.pdf" alt="InstructScene_CF_GISS">retraining InstructScene on our CF-GISS dataset</a>.
              <br/>

            </>}
        ></StoryDescriptionButton>
        <br/>   */}


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
     
    <h2 id="research"><b>RESEARCH</b></h2>
    {/* EXPERIENCE */}
    <div class="content">
        <>
        {/* Honors_and_awards */}
        <h2 id="academicResearch"><b>Academia research</b></h2> 
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
        <h2 style={{"font-family":"BrushScriptMT-embed", textAlign: 'center' }}>List of Publications</h2>
        <Publication/>

        <br/>

        <ResearchStory />
        
        <br/>  
        
        <h2 id="talk" style={{"font-family":"BrushScriptMT-embed", textAlign: 'center' }}><b>Talk</b></h2>
        <TalkRayTracing showall={true}/>
        <br/> <br/> 

        <h2 id="industryResearch"><b>Industry research</b></h2>
        </>
    </div>
    <ExperienceContents showall={false}/>

    {/* <div class="content">
    </div> */}

    <Index_Footer />
    </motion.div>)
}

