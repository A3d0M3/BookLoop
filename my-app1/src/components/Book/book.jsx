import './book.css'
import { NavLink } from "react-router-dom";
import like_img from './img/like.png'
import choice_img from './img/choice.png'
import redhat1 from './img/redhat1.png'

function Book() {
    return(
        <div className='book_container'>
            <div className='book_photos'>
                <div className='aside_box'>
                    <button className='but_like'><img src={like_img} width={30} height={30}/></button>
                    <button className='but_choice'><img src={choice_img} width={30} height={30}/></button>
                    <div className='box_of_photo'>
                        <img src={redhat1} alt='Зображення книги'/>
                    </div>
                    <div className='swap_img'>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
            <div className='book_describe'>
                <span>Категорії книг&gt;Жанри&gt;Дитячі казки</span>

                <h1 className='main_title'>Книга Червона шапочка</h1>
                <span for='main_title'>Шарль Перо</span>
                <div className='tags_of_book'>
                    <span >Мова книги</span>
                    <label >Українська</label>

                    <span>Видавництво</span>
                    <label >Казка укр.</label>

                    <span>Рік видання</span>
                    <label >2012</label>
                </div>
                <span className='for_box_categories' >Категорії</span>
                <div className='box_categories'>
                    <label>Дитячі казки</label>    
                </div>
                <p className='text_about'>  Казка Ш. Перро, яка розповідає дітям про дівчинку, яка несе гостинці для своєї бабусі.
                 За вказівкою мами йде через ліс і має строгий наказ нікуди не звертати зі своєї дороги, тому що в лісі живе Сірий Вовк.</p>
            </div>
        </div>
    )
}

export default Book