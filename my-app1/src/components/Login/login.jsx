import './login.css'
import user from './img/user.png'
import hiden from './img/hiden.png'


function Login(){
   return(
      <div className="login">
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
         <div className=''>
         <span>Немає акаунту?</span>
            <a href="" className='signup alogin'>Зареєструватися</a>
         </div>
      </div>
   );
} 
export default Login
