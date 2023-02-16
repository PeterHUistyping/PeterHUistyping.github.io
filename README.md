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
