import './headerMain.css'
import { NavLink } from "react-router-dom";
import logo from './img/logo.svg'
import filter from './img/filter.png'
import profile1 from './img/profile1.png'
import profile_back from './img/profile_back.png'

function toggleProfilePanel() {
   var panel = document.getElementById('profile_pannel');
   if (panel.style.display === 'flex') {
     panel.style.display = 'none'; // Якщо панель відображена, ховаємо її
   } else {
     panel.style.display = 'flex'; // Якщо панель прихована, показуємо її
   }
 }

function HeaderMain(){
   return(   
      <div className='header'>
         <a href='/second_home'><img  className='logo' src={logo} alt="logo" /></a>
         <div className="search">
            <a href="#" className="filter"><img src={filter} alt="filter" width={37} height={37}/></a>
            <div className='input'>
            <input type="text" className="text_input" placeholder="Знати свою книгу" />
            <button type="submit" className='submit'>Знайти</button>
            </div>
         </div>
         <a onClick={toggleProfilePanel}  className="profile_button">
            <img src={profile1} alt="avatar" width={49} height={49} />
         </a>
         <button type="button" className='add_ad_but'>Додати оголошення</button>

         <div class='profile_pannel' id='profile_pannel'>
            <img onClick={toggleProfilePanel} src={profile_back} alt='button back' width={32} height={32}/>
            <h2>Профіль</h2>
            <div className='profileName'>
               <img src={profile1} alt="avatar" width={49} height={49} />
               <span className='Name'>Ім'я та Прізвище</span>
               <a href='tel:0-***-***-***'>0-***-***-***</a>
            </div>
            <hr className='hr_1'/>

         </div>
      </div>
   );
}

export default HeaderMain