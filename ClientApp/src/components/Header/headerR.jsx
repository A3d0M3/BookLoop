import './header.css'
import { NavLink } from "react-router-dom";
import logo from './img/logo.svg'

function HeaderR(){
   return(   
      <div className='header'>
         <a href='/'><img  className='logo' src={logo} alt="logo" /></a>
      </div>
   );
}

export default HeaderR