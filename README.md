# Porfolio
Welcome to My Personal Home Page: https://peterhuistyping.github.io/ \
With Blogs, Projects, Files,etc updated from time to time.

## React Setup
```
npx create-react-app .
npm install gh-pages --save-dev
npm install react-router-dom
npm install jquery
```
## React Usage
```
npm run eject
npm run start
npm run deploy
```   
## Trouble Shooting
```
You attempted to import d.json which falls outside of the project src/ directory. 
Relative imports outside of src/ are not supported.
You can either move it inside src/, or add a symlink to it from project's node_modules/.
```
Solution:
node_modules/react-scripts/config/webpack.config.js
```
plugins: [
// Prevents users from importing files from outside of src/ (or node_modules/).
// This often causes confusion because we only process files within src/ with babel.
// To fix this, we prevent you from importing files out of src/ -- if you'd like to,
// please link the files into your node_modules/ and let module-resolution kick in.
// Make sure your source files are compiled, as they will not be processed in any way.
// new ModuleScopePlugin(paths.appSrc, [
//   paths.appPackageJson,
//   reactRefreshRuntimeEntry,
//   reactRefreshWebpackPluginRuntimeEntry,
//   babelRuntimeEntry,
//   babelRuntimeEntryHelpers,
//   babelRuntimeRegenerator,
// ]),
 ```

 ```
 Can't resolve '../.png' in '/src/js'
 ```
 Solution:
 Same file
 ```
 include: paths.appSrc,
 ->
 include: [paths.appSrc,"./public/asset"],
 ```
Get the React app with Routing to work on GitHub pages.<br/>
Solution: Using HashRouter. <br/>
This is a solution to React Router's issue of not scrolling to #hash-fragments when using the < Link> component to navigate. <br/>
```
npm i react-router-hash-link
<HashLink to="/#about">About</HashLink> 
```
Or manually, change from /# to /#/# <br/>

Q: Why does my react-router link bring me to the middle of a page?
Solution: 
```
<ScrollToTop>
```

## Folder layout
```
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── 404.html
    │   ├── asset
    │   │   ├── audio
    │   │   │   └── Town_of_Windmill.mp3
    │   │   ├── blog
    │   │   │   ├── blog.html
    │   │   │   ├── blog_directory.html
    │   │   │   ├── blog_directory_Storting.html
    │   │   │   └── music.html
    │   │   ├── doc
    │   │   │   ├── CV_PeterHU.pdf
    │   │   │   ├── Crazy_Thursday.pdf
    │   │   │   └── Jardine_Certificate.jpg
    │   │   └── photo
    │   │       ├── Assignment
    │   │       │   ├── 1
    │   │       │   │   ├── Interface.png
    │   │       │   │   └── KEYBOARD-RAINBOW.png
    │   │       │   ├── 2
    │   │       │   │   ├── Order.png
    │   │       │   │   └── Order_txt.png
    │   │       │   ├── 3
    │   │       │   │   ├── DB1.png
    │   │       │   │   └── DB2.png
    │   │       │   ├── 5
    │   │       │   │   ├── React_js.png
    │   │       │   │   ├── blog.png
    │   │       │   │   ├── blog2.0.png
    │   │       │   │   └── page.png
    │   │       │   ├── 6
    │   │       │   │   ├── 1.JPG
    │   │       │   │   ├── 2.JPG
    │   │       │   │   ├── 3.JPG
    │   │       │   │   └── cf.png
    │   │       │   ├── 7
    │   │       │   │   ├── Compare_AIS.png
    │   │       │   │   ├── Compare_Report.png
    │   │       │   │   ├── Formula.jpg
    │   │       │   │   ├── HTTP.png
    │   │       │   │   ├── Intro.png
    │   │       │   │   ├── Intro_Ch.png
    │   │       │   │   ├── Intro_Sea.png
    │   │       │   │   ├── Map.png
    │   │       │   │   ├── Members.JPG
    │   │       │   │   ├── Port.png
    │   │       │   │   └── Team_Member.png
    │   │       │   ├── 8
    │   │       │   │   ├── Estimation of log-log.png
    │   │       │   │   └── Numbers of Words.png
    │   │       │   ├── 9
    │   │       │   │   ├── Frozen.png
    │   │       │   │   └── Web.png
    │   │       │   └── blog3
    │   │       │       ├── Antialiasing.png
    │   │       │       ├── MyProject
    │   │       │       │   ├── assignment0_Barnsley fern
    │   │       │       │   │   └── Self-similar fractals.png
    │   │       │       │   ├── assignment1_Sphere-Ray
    │   │       │       │   │   ├── Sphere-depth.png
    │   │       │       │   │   └── Sphere.png
    │   │       │       │   ├── assignment2_Tri-Ray
    │   │       │       │   │   ├── Raytracing1.png
    │   │       │       │   │   ├── Raytracing2.png
    │   │       │       │   │   ├── Raytracing3.png
    │   │       │       │   │   └── Raytracing4.png
    │   │       │       │   ├── assignment3_Open-GL
    │   │       │       │   │   ├── OpenGL1.png
    │   │       │       │   │   ├── OpenGL2.png
    │   │       │       │   │   └── OpenGL3.png
    │   │       │       │   ├── assignment4_Ray-Tracer
    │   │       │       │   │   ├── RayTracer.png
    │   │       │       │   │   └── RayTracerBUG.png
    │   │       │       │   ├── assignment5_Voxel-Rendering
    │   │       │       │   │   ├── 5_1.png
    │   │       │       │   │   ├── 5_2.png
    │   │       │       │   │   ├── 5_3.png
    │   │       │       │   │   └── 5_4.png
    │   │       │       │   ├── assignment6_Grid-Acceleration+Solid-Textures
    │   │       │       │   │   ├── 6.837.png
    │   │       │       │   │   └── Texture.png
    │   │       │       │   └── assignment7_Supersampling+Antialiasing
    │   │       │       │       ├── Antialiasing.png
    │   │       │       │       └── Supersampling.png
    │   │       │       └── Self-similar_fractals.png
    │   │       ├── IMG_0813.JPG
    │   │       ├── Logo
    │   │       │   ├── Cam.png
    │   │       │   ├── Huawei.png
    │   │       │   ├── xmu-logo.jpg
    │   │       │   └── xmu.png
    │   │       ├── Peter_Hu.jpg
    │   │       └── Pic.jpg
    │   ├── css
    │   │   └── style.css
    │   ├── index.html
    │   └── manifest.json
    └── src
        ├── App.js
        ├── App.test.js
        ├── asset
        │   ├── blog
        │   │   ├── blog1.js
        │   │   ├── blog2.js
        │   │   ├── blog3.js
        │   │   ├── blog4.js
        │   │   ├── blog5.js
        │   │   ├── blog6.js
        │   │   ├── blog7.js
        │   │   ├── blog8.js
        │   │   ├── blog9.js
        │   │   ├── jquery.js
        │   │   └── new.js
        │   └── data
        │       ├── Hr_Award.json
        │       ├── Ongoing_PrAs.json
        │       ├── Past_PrAs.json
        │       └── test.json
        ├── css
        │   └── style.css
        ├── index.css
        ├── index.js
        ├── js
        │   ├── 404.js
        │   ├── Blog_Sorting.js
        │   ├── Home.js
        │   ├── HrAw_Re.js
        │   ├── HrAw_Table.js
        │   ├── PrAs_Table.js
        │   ├── helper
        │   │   ├── ScrollToTop.jsx
        │   │   ├── blog_footer.js
        │   │   ├── blog_top.js
        │   │   ├── footerCommom.js
        │   │   ├── index_footer.js
        │   │   ├── index_top.js
        │   │   ├── readJson.js
        │   │   └── tableCommon.js
        │   └── test.html
        ├── react-app
        │   ├── README.md
        │   └── create-react-app React.pdf
        ├── reportWebVitals.js
        ├── setupTests.js
        └── style.css

    36 directories, 113 files
 
```