import Navbar from '../NavBar/Navbarr';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GoogleMap from '../Map/Map';
import './ContactUs.css';
const ContactUs = () => {
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className = "ContactUs_container">
                <div  className = "ContactUs_inner_container">
                   <div className = "ContactUs_inner_left_container">
                       <h2>获取报价</h2>
                       <textarea row="4" cols="2">
                         你好， 这是在 text area 里的文本
                       </textarea>
                   </div>
                   <div className = "ContactUs_inner_right_container">
                       <h1>聯繫我們</h1>
                   </div>
                </div>
            </div>
            <GoogleMap />
            <Footer/>
        </div>
        
    );
}

export default ContactUs;