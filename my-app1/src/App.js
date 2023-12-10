import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from '../src/pages/home.js'
import Registr from "./pages/registr.js";
import Second_Home from "./pages/secondhome.js";
import Search from "./pages/searchPage.js";
import Announcement from "./pages/add_announ.js";

function App() {
    return (
       <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/registr" element={<Registr/>}/>
          <Route path="/second_home" element={<Second_Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/announcement" element={<Announcement/>}/>
          </Routes>
       </BrowserRouter>
    );
 }
 
 export default App;