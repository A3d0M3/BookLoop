import './reg.css'
import main_img from '../Registration/img/dog.png'

function Registration(){
    return(
        <div className='box'>
            <div className='reg_image'>
                <img src={main_img} alt='dog img' />
            </div>
            
            <div className='reg_form'>
                <h1 className='reg_title'>Create an Account!</h1>
                <form>
                    <input required='required' className='first_column_input' type='text' placeholder='First name'/>
                    <input required='required' className='second_column_input' type='text' placeholder='Second name'/>
                    <input required='required' className='big_input' type='email' placeholder='Email address'/>
                    <input required='required' className='first_column_input' type='text' placeholder='Region'/>
                    <input required='required' className='second_column_input' type='text' placeholder='Settlement'/>
                    <input required='required' className='first_column_input' type='password' placeholder='Password' minLength={8} maxLength={40}/>
                    <input required='required' className='second_column_input' type='password' placeholder='Repeat password' minLength={8} maxLength={40}/>
                    <input className='reg_button' type='submit' value='Register account' />
                </form>
            </div>
        </div>
    );
}

export default Registration