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
                  <li><button className='but' type='button' href=""><img src={genre} alt="filter" /><span className='text2'>Жанри</span></button></li>
                  <li><button className='but' type='button' href=""><img src={author} alt="book" /><span className='text2'>Автори</span></button></li>
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
                  <img src={book1}/>
               </div>

               <div class="book_place2">
                  <img src={book2}/>
               </div>

               <div class="book_place3">
                  <img src={book3}/>
               </div>

               <div class="book_place4">
               <img src={book4}/>
               </div>
            
               <div class="book_place5">
               <img src={book5}/> 
               </div>

               <div class="book_place6">
                  <img src={book6}/>
               </div>
            </div>

            <div class="advert_place">
               <img src={advert} alt='pol'/>
            </div>
         </div>
      </div>
      
      
   );
}

export default Main