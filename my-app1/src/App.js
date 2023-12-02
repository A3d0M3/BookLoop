import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from '../src/pages/home.js'
import Registr from "./pages/registr.js";

function App() {
    return (
       <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/registr" element={<Registr/>}/>
          </Routes>
       </BrowserRouter>
    );
 }
 
 export default App;