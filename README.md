# Personal Home Page
Welcome to My Personal Home Page: https://peterhuistyping.github.io/ \
With Blogs, Projects, Files,etc updated from time to time.

## React Setup
```
npx create-react-app .
npm install gh-pages --save-dev
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
Go to dictionary with your package, in your case your xxx file
```
cd ../xxx
npm link
```
Next go to some other location and:
```
npm link <your_package>

ls -al $(npm root -g)

sudo npm rm --global asset 
In your parent project terminal, go ahead and run npm unlink fancy-button to unlink the dependency.
```
