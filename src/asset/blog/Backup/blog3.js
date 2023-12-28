import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
export function Blog3(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>

            <h1 id="mit6837cgfall2004assignment">MIT6.837 Computer Graphics Assignment</h1>
    <div class="h2_center">About this Assignment</div>
    <div class="container">
        <p>With the help of the Open Course, I have the experience of writing a ray tracer using C++, including ray
            casting, rendering, normal visualization, supersampling and 3D OpenGL visualization. It is also a part of
            MIT6.837 assignment.<br />
            Throughout the process, I implement two kinds of cameras, orthonormal and perspective camera respectively.
            In addition, several types of primitive objectives are built, e.g. sphere, triangle, plane, triangle mesh,
            just to name a few. On top of that, Composite design pattern is used for creating 3D objects hierarchy with transformation.
            Even though there is plenty of obstacle finishing the task (like the use of depreciated
            GLUT library), lots of interesting things are learnt.<br />
            Folder .vscode(i.e., settings.json,launch.json,tasks,json and c<em>cpp</em>properties.json) helps build and
            compile the C++ program. What's special is that it also keeps Vscode occupying tiny amount of space on PC
            compared with other IDE. Command-line could help build the project efficiently. </p>
    </div>

    <p><img width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment0_Barnsley%20fern/Self-similar%20fractals.png"
            alt="Self-similar fractals" title="Self-similar fractals"/></p>
    <h2 id="lessonmaterial">Lesson Material</h2>
    <p>Course Calendar:
        https://groups.csail.mit.edu/graphics/classes/6.837/F04/calendar.html</p>
    <p>The folder includes the following, which are downloaded from the Course website\
        <em>1.Lecture Note</em>\
        <em>2.Original Assignments, including PDF task requirement and supporting code.</em>
    </p>
    <h2 id="projectintroduction">Project Introduction</h2>
    <h4 id="assignment0veryinteresting">Assignment0: [<strong>Very Interesting!</strong>]</h4>
    <pre><code>
    Self-similar fractals (a subpart of the object is similar to the whole) <br/>
    Barnsley fern\dargon\X\Triangle\Levy<br/>
    IFS Function
    </code></pre>
    <p>A glimpse of it ⬇<br />
        <img width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment0_Barnsley%20fern/Self-similar%20fractals.png"
            alt="Self-similar fractals"  title="Self-similar fractals" />
    </p>
    <h4 id="assignment1raycasting">Assignment1: [Ray Casting]</h4>
    <pre><code>Sphere-Ray Intersection-(Geometric/Algebraic)  <br/>
    Orthonormal Basis - from Linear Algebra<br/>
    C++ Object Oriented Programming
    </code></pre>
    <p>A glimpse of it ⬇<br />
        <img width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment1_Sphere-Ray/Sphere.png" alt="Sphere" />
    </p>
    <p><img width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment1_Sphere-Ray/Sphere-depth.png" alt="Depth" /></p>
    <p><em>scene1<em>07.txt sample output is wrong</em> \
            （Use scene1</em>08.txt，camera center 0,0,2 instead）\
        Proved by linking two sphere functions, which turn out to be an oval on plane XOY.</p>
    <h4 id="assignment2raytracing">Assignment2: [Ray Tracing]</h4>
    <pre><code>
    NormalVisualization/ DiffuseShading<br/>
    Perspective Camera<br/>
    New primitives- Planes &amp; Triangles<br/>
    Affine Transformations 
    </code></pre>
    <p>A glimpse of it ⬇<br />
        <img  width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment2_Tri-Ray/Raytracing1.png"
            alt="Sphere with Normal Visualization & Diffuse Coloring" />
        <img  width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment2_Tri-Ray/Raytracing2.png" alt="Planes & Triangles" />
        <img  width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment2_Tri-Ray/Raytracing3.png" alt="TriangleMesh" />
        <img  width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment2_Tri-Ray/Raytracing4.png" alt="Transformations" />
    </p>
    <p>"-shade_back" to be updated. ✅ Done on Assignment4</p>
    <h4 id="assignment3opengl">Assignment3: [Open GL]</h4>
    <pre><code>
    OpenGL API - 3D Simulation<br/>
    Sphere Tessellation &amp; Gouraud interpolation<br/>
    DirectionalLight<br/>
    Specular Color
    </code></pre>
    <p>A glimpse of it ⬇<br />
        <img   width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment3_Open-GL/OpenGL1.png" alt="OpenGL Display 1" />
        <img   width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment3_Open-GL/OpenGL2.png" alt="OpenGL Display 2" />
        <img   width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment3_Open-GL/OpenGL3.png" alt="OpenGL Display 3" />
    </p>
    <p>Guidance:
        <em>Within the real-time interface</em>\
        Calling the render function by pressing 'r'.\
        The application can be terminated by pressing 'q' or calling exit().*
    </p>
    <p>*Adjustment
        Some head files in ray folder is being cut to Object3D folder.\
        Codes have been revised.</p>
    <p>Command Line Argument: in/… out/…\
        Set the vertex normal before specifying each vertex position\
        Blinn-Phong Model the exponent-&gt;100 (nonlinear relationship)</p>
    <h4 id="assignment4raytracer">Assignment4: [Ray Tracer]</h4>
    <pre><code>
    Shadows Reflection &amp; Refraction<br/>
    OpenGL API Representation<br/>
    PointLight
    </code></pre>
    <p>A glimpse of it ⬇<br />
        <img  width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment4_Ray-Tracer/RayTracer.png" alt="Ray Tracer" />
        <img  width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment4_Ray-Tracer/RayTracerBUG.png" alt="Ray Tracer BUG" />
    </p>
    <p>*Adjustment
        Tessellation args can be controlled by Command Line Arguments.
        On Main.C
        a new pointer to SceneParser -&gt; no need for function arg
        -&gt; openGL rendering enabled. (camera adjusted)
        On raytrace.h<br />
        main loop raycasting has been transferred here.</p>
    <h4 id="assignment5voxelrendering">Assignment5: [Voxel Rendering]</h4>
    <pre><code>
    Bounding boxes for Primitives<br/>
    Sphere voxelization<br/>
    Regular grid data structure<br/>
    Grid::paint()-Two Ways to previsualize<br/>
    Fast ray-grid intersection<br/>
    Transformation:Flatten the Transformation Hierarchy
    </code></pre>
    <p>A glimpse of it ⬇<br />
        <img   width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment5_Voxel-Rendering/5_1.png" alt="Sphere" />
        <img   width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment5_Voxel-Rendering/5_2.png" alt="Sphere+" />
        <img   width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment5_Voxel-Rendering/5_3.png" alt="Visualization" />
        <img   width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment5_Voxel-Rendering/5_4.png" alt="Stanford Rabbit" />
    </p>
    <p>Updated: extern.h</p>
    <p>Using Ray-Box Intersection From Ray Casting II</p>
    <p>Guidance: a single ray is traced by pressing the 't' key. \
        Then the 'g' key will toggle between\
        (1) visualizing all occupied grid cells
        (2) visualizing the cells traversed while walking along the ray
        &amp; (3) the faces crossed to enter each cell along the ray.</p>
    <h4 id="assignment6gridaccelerationsolidtextures">Assignment6: [Grid Acceleration &amp; Solid Textures]</h4>
    <pre><code>
    RAY TRACING STATISTICS<br/>
    Grid Acceleration <br/>
    Solid Textures <br/>
    CheckerBoard, Perlin Noise, Wood, etc
    </code></pre>
    <p>A glimpse of it ⬇<br />
        <img  width= "300vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment6_Grid-Acceleration+Solid-Textures/Texture.png"
            alt="Texture" />
    </p>
    <p>Tips: All related line-arguments should be declared
        *Adjustment:
        delete box; //no []
        pixel-&gt;width, height</p>

    <h4 id="assignment7supersamplingantialiasing">Assignment7: [Supersampling &amp; Antialiasing]</h4>
    <pre><code>Several new base and derived Class  <br/>
        Class Film, Sample  <br/>
        Class Sampler: - random/uniform/jittered samples  <br/>
        Class Filter: -box/tent/gaussian filter  <br/>
        Reference: Fundamentals of computer graphics-(2009)  Ch9 SignalProcessing  
        </code></pre>
    <p>A glimpse of it ⬇<br />
        <img   width= "100vw" src="/asset/photo/Assignment/blog3/MyProject/assignment7_Supersampling+Antialiasing/Antialiasing.png"
            alt="Antialiasing" title="Antialiasing"/>
        <img   width= "400vw"
            src="/asset/photo/Assignment/blog3/MyProject/assignment7_Supersampling+Antialiasing/Supersampling.png"
            alt="Supersampling" title="Supersampling"/>

    </p>
    <p>*Adjustment:<br />
        Revise use of grid and visualize_grid<br />
        Tips: All related line-arguments should be declared<br />
        (No longer in Assignment 7 Fixed by removing ~ delete m on Grid and Object3D class) </p>




    <h2 id="setupthemyproject">Setup the MyProject</h2>
    <p>*Notice that .C = .cpp (at least in VScode)</p>
    <p>From Assignment3 onwards, include the below header Files on Mac instead.</p>
    <pre><code>
    #define GL_SILENCE_DEPRECATION<br/>
    // Defined before OpenGL and GLUT includes to avoid deprecation messages <br/>
    #include &lt;OpenGL/gl.h&gt; <br/>
    #include &lt;OpenGL/glu.h&gt; <br/>
    #include &lt;GLUT/glut.h&gt; <br/>
    
    In task.json<br/>
        "-framework" ,"GLUT"," -framework", "OpenGL"<br/>
    
    Add glutInit(&amp;argc, argv); in main<br/>
        change glEnable() etc after glutCreateWindow("OpenGL Viewer");<br/>
    
    *Adjustment<br/>
    In addition, some head files in ray folder is being cut to Object3D folder.<br/>
    Codes have been revised.
    </code></pre>
    <h3 id="usingvscodec">Using VSCode C++</h3>
    <p>Using my code (on Mac Clang++) 
        Note that you should open the Myproject folder, 
        /lib contains vector-matrix-image header files or .C 
        /ray contains the other.</p>
    <p>You should replace four files in .vscode (in Myproject folder) with those from each corresponding
        .vscode-assignment<em>(0-9) (in assignment folder). 
            .vscode-assignment</em>(0-9) is used for coding via the Myproject folder.</p>
    <p>*In assignment 0, there are two ".vscode" folders 
        .vscode-assignment0 is used for coding via the Myproject folder.
        .vscode-inside is used for coding via the assignment0_Barnsley fern folder. 
        DO NEED to include everything from lib folder.</p>
    <h3 id="usingVisualstudio">Using Visual Studio</h3>
    <p>Try doing it yourself.</p>

    <a href="https://github.com/PeterHUistyping/MIT6.837-CG-Fall2004-Assignment">See More on GitHub
    </a>
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}