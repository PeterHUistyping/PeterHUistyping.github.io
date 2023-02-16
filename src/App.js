import {Route,Routes} from "react-router-dom"
import {Home} from "./js/Home"
import {Blog_Sorting} from "./js/Blog_Sorting"
import {NotFound} from "./js/404"
function App() {
  return (
  <> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Blog_Sorting" element={<Blog_Sorting />}/>
        <Route element={<NotFound />}/>
      </Routes>
      </>
  );
}

export default App;
