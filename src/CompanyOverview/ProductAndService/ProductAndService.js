
import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useTranslation } from "react-i18next";
import './ProductAndService.css';

const ProductAndService = () => {
    const  {t} = useTranslation();
    return(
        <div>
            <Header/>
            <Navbar/>
            <div style={{marginTop:"40px"}}> 
                <div  className="ProductAndService_container">
                    <h1>{t("ProductAndService.title")}</h1>
                    <p>{t("ProductAndService.summary1")}</p>
                    <p>{t("ProductAndService.summary2")}</p>
                    <h3>{t("ProductAndService.item1.item1")}</h3>
                    <ul >
                     <li>{t("ProductAndService.item1.subitem1")}</li>
                     <li>{t("ProductAndService.item1.subitem2")}</li>
                  </ul>
                  <h3>{t("ProductAndService.item2.item2")}</h3>
                    <ul >
                     <li>{t("ProductAndService.item2.subitem1")}</li>
                     <li>{t("ProductAndService.item2.subitem2")}</li>
                  </ul>
                  <h3>{t("ProductAndService.item3.item3")}</h3>
                    <ul >
                     <li>{t("ProductAndService.item3.subitem1")}</li>
                     <li>{t("ProductAndService.item3.subitem2")}</li>
                     <li>{t("ProductAndService.item3.subitem3")}</li>
                  </ul>
                  <h3>{t("ProductAndService.item4")}</h3>
                  <h3>{t("ProductAndService.item5.item5")}</h3>
                  <ul >
                     <li><h5>{t("ProductAndService.item5.subitem1")}</h5></li>
                  </ul>
                  <p>{t("ProductAndService.item5.subtext1")}</p>
                  
                  <ul >
                     <li><h5>{t("ProductAndService.item5.subitem2")}</h5></li>
                  </ul>
                  <p>{t("ProductAndService.item5.subtext2")}</p>

                  <ul >
                     <li><h5>{t("ProductAndService.item5.subitem3")}</h5></li>
                  </ul>
                  <p>{t("ProductAndService.item5.subtext3")}</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductAndService;