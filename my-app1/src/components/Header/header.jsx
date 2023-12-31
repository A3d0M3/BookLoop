import './header.css'
import { NavLink } from "react-router-dom";
import logo from './img/logo.svg'
import filter from './img/filter.png'
import login from './img/login.png'
import user from  './img/user.png'

function togglePanel() {
   var panel = document.getElementById('login');
   if (panel.style.display === 'flex') {
     panel.style.display = 'none'; // Якщо панель відображена, ховаємо її
   } else {
     panel.style.display = 'flex'; // Якщо панель прихована, показуємо її
   }
 }

function Header(){
   return(   
      <div className='header'>
         <a href=''><img  className='logo' src={logo} alt="logo" /></a>
         <div className="search">
            <a href="#" className="filter"><img src={filter} alt="filter" width={37} height={37}/></a>
            <div className='input'>
            <input type="text" className="text_input" placeholder="Знати свою книгу" />
            <NavLink to="/search" ><button type="submit" className='submit'>Знайти</button></NavLink>
            </div>
         </div>
         <a onClick={togglePanel}  className="login_button">
            <img src={login} alt="login" />
            <span>Увійти</span>
         </a>
         <NavLink to='/announcement' ><button type="button" className='add_ad_but'>Додати оголошення</button> </NavLink>

         <div id='login' className="login">
            <img src={user} alt="user" width={37} height={37} />
            <h1>Вхід до акаунту</h1>
            <h6>Щоб слідкувати за замовленнями та <br/> отримувати індивідуалізовані рекомендації</h6>
            <form className="form"action="">
               <label htmlFor="">Номер телефону або електронна пошта</label>
               <input className='form_input' type="email" required='required' placeholder='Введіть номер або email' />
               <label htmlFor="">Пароль</label>
               <input className='form_input' type="password" required='required' minLength={8} maxLength={40} placeholder='Введіть пароль'/>
               <a href="" className='forgotpass alogin'>Забули пароль?</a>
               <NavLink to='/second_home'><input className='SignIn' type="submit" value="Увійти" /></NavLink>
            </form>
            <div className='no_acc'>
               <span>Немає акаунту?</span>
               <NavLink to="/registr"> <a href='' className='signin alogin'>Зареєструватися</a></NavLink>
            </div>
         </div>
      </div>
   );
}

export default Header