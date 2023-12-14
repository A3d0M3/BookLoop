import './footer.css'
import { NavLink } from "react-router-dom";
import inst_img from './img/instagram_img.png'
import teleg_img from './img/telegram_img.png'
import gmail_img from './img/gmail_img.png'
import phone from './img/phone.png'

function Footer() {
    return(
        <footer>
            <hr/>
            <div className='footer_box'>
                <a className='footer_a' href='https://instagram.com/book__loop?igshid=MmVlMjlkMTBhMg=='><img src={inst_img} alt='instagram icon' width={32} height={32} /> <span>book__loop</span></a>
                <a className='footer_a' href='https://t.me/+j46Go9PjJXAzOTky'><img src={teleg_img} alt='telegram icon' width={32} height={32} /> <span>BookLoop</span></a>
                <a className='footer_a' href='mailto:bookloop0@gmail.com'><img src={gmail_img} alt='gmail icon' width={32} height={32} /> <span>bookloop0@gmail.com</span></a>
                <a className='footer_a' href='tel:0-***-***-***'><img src={phone} alt='phone icon' width={32} height={32} /> <span>0-***-***-***</span></a>
            </div>
            <p className='footer_p'>&copy; 2023 BookLoop. Сайт для обміну знаннями!</p>
        </footer>
    )
}

export default Footer