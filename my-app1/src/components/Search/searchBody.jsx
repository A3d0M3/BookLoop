import './searchBody.css'
import { NavLink } from "react-router-dom";
import readHat1 from './img/redHat1.png'
import readHat2 from './img/redHat2.png'
import readHat3 from './img/redHat3.png'
import book_rec1 from './img/book_rec1.png'
import book_rec2 from './img/book_rec2.png'
import book_rec3 from './img/book_rec3.png'

function SearchBody() {
    return(
        <div className='body'>
            <h1>Результати пошуку “червона шапочка”</h1>
            <div className='filterInSearch'>
                <span>Автори:</span>
                <label className='filterCapacity'>Шарль Перо</label>
                <label className='filterCapacity'>Брати Грімм </label>
            </div>
            <div className='book_add'>
                <img  src={readHat1} />
                <div className='tags'>
                    <span>Мова книги</span> <label>Українська</label> <br/>
                    <span>Видавництво</span> <label>Казка укр.</label> <br/>
                    <span>Категорія</span> <label>Дитячі казки</label>
                </div>
                <div className='description'>
                    <label>Книга Червона шапочка</label>
                    <div className='description_place'>
                        <span>   Казка Ш. Перро, яка розповідає дітям про
                            дівчинку, яка несе гостинці для своєї бабусі. За вказівкою мами йде
                              через ліс до і має строгий наказ нікуди не звертати зі
                               своєї дороги, тому що в лісі живе Сірий Вовк.</span>
                    </div>
                </div>
            </div>

            <div className='book_add'>
                <img  src={readHat2} />
                <div className='tags'>
                    <span>Мова книги</span> <label>Українська</label> <br/>
                    <span>Видавництво</span> <label>Септіма</label> <br/>
                    <span>Категорія</span> <label>Дитячі казки</label>
                </div>
                <div className='description'>
                    <label>Книга Червона шапочка</label>
                    <div className='description_place'>
                        <span>   Книга братів Грімм, які намагались передати усю
                             атмосферу та передати ті моменти, які відчувала 
                             дівчинка. За допомогою цієї книжечки діти зможуть 
                             навчитися читати по складах.</span>
                    </div>
                </div>
            </div>

             <div className='book_add'>
                <img  src={readHat3} />
                <div className='tags'>
                    <span>Мова книги</span> <label>Українська</label> <br/>
                    <span>Видавництво</span> <label>Пегас</label> <br/>
                    <span>Категорія</span> <label>Дитячі казки</label>
                </div>
                <div className='description'>
                    <label>Книга Червона шапочка</label>
                    <div className='description_place'>
                        <span>   Картонна книжка з яскравими ілюстраціями
                             розповідає історію про пригоди маленької
                              дівчинки за мотивами казки Ш. Перро.</span>
                    </div>
                </div>
            </div>
            <div className='rec_container'>
                <span>Рекомендовано для Вас</span>
                <div className='rec'>
                    <img src={book_rec1} alt='Назва книги' />
                </div>

                <div className='rec'>
                    <img src={book_rec2} alt='Назва книги' />
                </div>

                <div className='rec'>
                    <img src={book_rec3} alt='Назва книги' />
                </div>
            </div>

        </div>
    )
}

export default SearchBody