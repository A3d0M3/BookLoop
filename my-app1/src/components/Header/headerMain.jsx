import './header.css'
import { NavLink } from "react-router-dom";
import logo from './img/logo.svg'
import filter from './img/filter.png'
import login from './img/login.png'

function togglePanel() {
   var panel = document.getElementById('login');
   if (panel.style.display === 'flex') {
     panel.style.display = 'none'; // Якщо панель відображена, ховаємо її
   } else {
     panel.style.display = 'flex'; // Якщо панель прихована, показуємо її
   }
 }

function HeaderMain(){
   return(   
      <div className='header'>
         <a href=''><img  className='logo' src={logo} alt="logo" /></a>
         <div className="search">
            <a href="#" className="filter"><img src={filter} alt="filter" width={37} height={37}/></a>
            <div className='input'>
            <input type="text" className="text_input" placeholder="Знати свою книгу" />
            <button type="submit" className='submit'>Знайти</button>
            </div>
         </div>
         <a onClick={togglePanel}  className="login_button">
            <img src={login} alt="login" />
            <span>Увійти</span>
         </a>
         <button type="button" className='add_ad_but'>Додати оголошення</button>
      </div>
   );
}

export default HeaderMain