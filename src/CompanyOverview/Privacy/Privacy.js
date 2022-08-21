import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Privacy.css';
import { useTranslation } from "react-i18next";

const Privacy = () => {
    const { t } = useTranslation();
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className='privacy_container'>
                <div>
                    <p className='privacy_text'>{t("Privacy.item1")}</p>
                    <p className='privacy_text'>{t("Privacy.item2")}</p>
                
                
                
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Privacy;