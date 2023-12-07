import React, { useState } from 'react';
import './main.css'
import filter from './img/filter.png'
import book from './img/book.png'
import genre from './img/genre.png'
import author from './img/author.png'
import telegram from './img/telegram.png'
import phone from './img/phone.png'
import slide1 from './img/slides/slide1.svg'
import slide2 from './img/slides/slide2.svg'
import next from './img/next.png'
import prev from './img/prev.png'
import book1 from './img/book1.png'
import book2 from './img/book2.png'
import book3 from './img/book3.png'
import book4 from './img/book4.png'
import book5 from './img/book5.png'
import book6 from './img/book6.png'
import advert from './img/slides/advert1.svg'

const Slider = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
 
   const images = [
      slide1,
      slide2
   ];
 
   const handlePrev = () => {
     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
   };
 
   const handleNext = () => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   };
 
   return (
     <div className="slideshow-container">
       <button className='prev' onClick={handlePrev}> <img src={prev}/> </button>
       <img classname='slide_img' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
       <button className='next' onClick={handleNext}> <img src={next}/> </button>
     </div>
   );
 };

 function toggle1Panel() {
   var panel1 = document.getElementById('genre_div');
   var panel2 = document.getElementById('author_div');
   if (panel1.style.display === 'flex') {
     panel1.style.display = 'none';
     panel2.style.display = 'none';
   } else {
     panel1.style.display = 'flex';
     panel2.style.display = 'none';
   }
 }

 function toggle2Panel() {
   var panel1 = document.getElementById('genre_div');
   var panel2 = document.getElementById('author_div');
   if (panel2.style.display === 'flex') {
     panel2.style.display = 'none';
     panel1.style.display = 'none';
   } else {
     panel2.style.display = 'flex';
     panel1.style.display = 'none';
   }
 }

function Main() {
   return (
      <div className='main'>
         <h1> Обмінюйтесь знаннями!</h1>
         <div className="hero1">
            <nav className='nav_items1'>
               <ul>
                  <li><img src={filter} alt="filter" /><span className='text1'>Категорії книг</span></li>
                  <li><button className='but' type='button' href=""><img src={book} alt="book" /><span className='text2'>Друковані книги</span></button></li>
               </ul>
            </nav>

            <nav className='nav_items2'>
               <ul>
                  <li><div onClick={toggle1Panel} className='but1' href=""><img src={genre} alt="filter" /><span className='text2'>Жанри</span>
                  
                     <div className='genre_div' id='genre_div'>
                        <ul>
                           <li className='diff_li'>Роман</li>
                           <li className='diff_li'>Дитячі казки</li>
                           <li className='diff_li'>Наукова фантастика</li>
                           <li className='diff_li'>Детектив та трилер</li>
                           <li className='diff_li'>Жахи</li>
                           <li className='diff_li'>Історична література</li>
                        </ul>

                     </div>
                  
                  </div></li>
                  <li><div onClick={toggle2Panel} className='but2' href=""><img src={author} alt="book" /><span className='text2'>Автори</span>
                  
                  <div className='author_div' id='author_div'>
                        <ul>
                           <li className='diff_li'>Дж. К. Роулінг</li>
                           <li className='diff_li'>Ліна Костенко</li>
                           <li className='diff_li'>Андрій Кокотюха</li>
                           <li className='diff_li'>Джоан Роулінг</li>
                           <li className='diff_li'>Пауло Коельйо</li>
                           <li className='diff_li'>Іван Нечуй-Левицький</li>
                           <li className='diff_li'>Ден Браун</li>
                           <li className='diff_li'>Стефані Майер</li>
                           <li className='diff_li'>Дж. Р. Р. Толкін</li>
                        </ul>

                     </div>
                  
                  </div></li>
               </ul>
            </nav>

            <nav className='nav_items3'>
               <ul>
                  <li><span className='text1'>Контакти</span></li>
                  <li><a href='tel:0-***-***-***'><img className='phone_img' src={phone} alt='phone'/>0-***-***-***</a></li>
                  <li><span className='text2'>Ми в соціальних <br/> мережах</span></li>
                  <li><a href='https://t.me/+j46Go9PjJXAzOTky'><img className='telegram_img' src={telegram} alt='telegram'/></a></li>
               </ul>
            </nav>
         </div>

         <div className='hero2'>
            <Slider />
         </div>

         <div className='hero3'>
            <div class="book_rec">
               <div class="book_place1">
                  <img src={book1} alt='photo of book'/>
               </div>

               <div class="book_place2">
                  <img src={book2} alt='photo of book'/>
               </div>

               <div class="book_place3">
                  <img src={book3} alt='photo of book'/>
               </div>

               <div class="book_place4">
               <img src={book4} alt='photo of book'/>
               </div>
            
               <div class="book_place5">
               <img src={book5} alt='photo of book'/> 
               </div>

               <div class="book_place6">
                  <img src={book6} alt='photo of book'/>
               </div>
            </div>

            <div class="advert_place">
               <img src={advert} alt='addvert'/>
            </div>
         </div>
      </div>
      
      
   );
}

export default Main