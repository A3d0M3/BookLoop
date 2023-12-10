import './announ.css'
import { NavLink } from "react-router-dom";
import camera_img from './img/camera.png'

// function countCharacters() {
//     var textareaValue = document.getElementById("myTextarea").value;
//     var characterCount = textareaValue.length;
//     var label = document.getElementById("charCountLabel");
//     label.textContent = characterCount + '/9000';
// }

function Announcement(){
    return(
        <div className='announ_body'>
            <h1 className='title_announ'>Створити оголошення</h1>
            
            <div className='detail'>
                <h4 className='title'>Опишіть у подробицях</h4>
                <form className='detail_form'>
                    <span for='nazva'>Вкажіть назву*</span>
                    <input required='required' type='text' className='nazva' placeholder='Наприклад, Червона шапочка 2008р.'/>
                    <span className='undertitle'>Заголовок відіграє важливу роль, не забудьте додати його</span>
                    <span for='genre_select' >Категорії*</span>
                    <div className='categor_div'>
                    <select required='required' className='genre_select' id="вибір">
                        <option value="" disabled selected hidden>Жанри</option>
                        <option value="option1">Роман</option>
                        <option value="option2">Дитячі казки</option>
                        <option value="option3">Наукова фантастика</option>
                    </select>

                    <select required='required' className='author_select' id="вибір2">
                        <option value="" disabled selected hidden>Автори</option>
                        <option value="option1">Дж. К. Роулінг</option>
                        <option value="option2">Ліна Костенко</option>
                        <option value="option3">Андрій Кокотюха</option>
                    </select>
                    </div>
                </form>
            </div>

            <div className='photo_div'>
                <h4 className='title'>Фото</h4>
                <span className='photo_span'>Перше фото буде на обкладинці оголошення.</span>
                <div className='photo_container'>
                    <div className='photo'>
                        <label>Добавити фото</label>
                    </div>

                    <div className='photo'>
                        <img src={camera_img} alt='add_photo'/>
                    </div>

                    <div className='photo'>
                        <img src={camera_img} alt='add_photo'/>
                    </div>

                    <div className='photo'>
                        <img src={camera_img} alt='add_photo'/>
                    </div>
                </div>
            </div>
            
            <div className='description'>
                <h4 className='title'>Опис*</h4>
                <textarea required='required' className='enter_descr' id='myTextarea' placeholder='Подумайте ,що хотіли б ви дізнатись про книгу, можливо щось розповісти. І додайте це в опис' minLength={40} maxLength={9000}   />
                <p className='undertitle'>Опис повинен бути не коротшим за 40 знаків</p>
                {/* <label className='charCountLabel' id="charCountLabel">0 / 9000</label> */}
            </div>
            
            <div className='city'>
                <h4 className='title'>Місцезнаходження*</h4>
                <input required='required' className='city_enter' type='text' placeholder='Область та населений пункт' />
            </div>

            <div className='your_contact'>
                <h4 className='title'>Ваші контактні дані</h4>
                <form className='contacts_form'>
                    <span>Контактна особа*</span>
                    <input required='required' type='text' placeholder="Ім(')я та прізвище"/>

                    <span>Email-адреса</span>
                    <input required='required' type='text' />

                    <span>Номер телефону</span>
                    <input required='required' type='text'/>
                </form>
            </div>

            <button className='publish_button' type='submit'>Опублікувати</button>
           

        </div>
    );
}

export default Announcement