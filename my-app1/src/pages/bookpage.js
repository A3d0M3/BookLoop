import Book from "../components/Book/book";
import HeaderSearch from "../components/Header/headerSearch.jsx";
import Footer from '../components/Footer/footer'

function BookPage(){
    return(
        <>
        <HeaderSearch/>
        <Book/>
        <Footer/>
        </>
    )
}

export default BookPage