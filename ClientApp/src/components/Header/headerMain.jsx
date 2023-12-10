import './headerMain.css'
import { NavLink } from "react-router-dom";
import logo from './img/logo.svg'
import filter from './img/filter.png'
import profile1 from './img/profile1.png'
import profile_back from './img/profile_back.png'
import my_library_img from './img/my_library.png'
import book_i_want_img from './img/book_i_want.png'
import settings_img from './img/settings_img.png'
import exit_img from './img/exit.png'

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
            <NavLink to="/search" ><button type="submit" className='submit'>Знайти</button></NavLink>
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
               <a>380-***-***-**-**</a>
            </div>
            <hr className='hr_1'/>
            <div className='functions'>
               <a><img className='functions_img' src={my_library_img} /> Моя бібліотека</a>
               <a><img className='functions_img' src={book_i_want_img} /> Бажані книги</a>
            </div>
            <hr className='hr_1'/>
            <a className='settings'><img className='settings_img' src={settings_img} /> Налаштування</a>
            <hr className='hr_1'/>
            <a href='/' className='exit'><img className='exit_img' src={exit_img} /> Вихід</a>
            <hr className='hr_1'/>
            <div className='profile_footer'>
               <span>Виникли запитання?</span>
               <a href='tel:0-***-***-***'>0-***-***-***</a>
            </div>
         </div>
      </div>
   );
}

export default HeaderMain