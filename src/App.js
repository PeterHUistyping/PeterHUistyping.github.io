import {Route,Routes} from "react-router-dom"
import {Home} from "./js/Home"
import {Blog_Sorting} from "./js/Blog_Sorting"

function App() {
  return (
  <>
 
  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Blog_Sorting" element={<Blog_Sorting />}/>
      </Routes>
      </>
  );
}

export default App;
