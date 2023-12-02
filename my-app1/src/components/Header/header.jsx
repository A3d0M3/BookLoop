import './header.css'
import logo from './img/logo.svg'
import filter from './img/filter.png'
import login from './img/login.png'



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
         <a href=""className="login_button ">
            <img src={login} alt="login" />
            <span>Увійти</span>
         </a>
         <button type="button" className='add_ad_but'>Додати оголошення</button>
      </div>
   );
}

export default Header