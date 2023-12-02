import './header.css'

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
         <img className='logo' src={logo} alt="logo" />
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

         <div id='login' className="login">
            <img src={user} alt="user" width={37} height={37} />
            <h1>Вхід до акаунту</h1>
            <h6>Щоб слідкувати за замовленнями та <br/> отримувати індивідуалізовані рекомендації</h6>
            <form className="form"action="">
               <label htmlFor="">Номер телефону або електронна пошта</label>
               <input type="email" placeholder='Введіть номер або email' />
               <label htmlFor="">Пароль</label>
               <input type="password" placeholder='Введіть пароль'/>
               <a href="" className='forgotpass alogin'>Забули пароль?</a>
               <input type="submit" value="Увійти" />
            </form>
            <div className='no_acc'>
               <span>Немає акаунту?</span>
               <a href='' className='signin alogin'>Зареєструватися</a>
            </div>
         </div>
      </div>
   );
}

export default Header