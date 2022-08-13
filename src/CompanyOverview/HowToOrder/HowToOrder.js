import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useTranslation } from "react-i18next";
import "./HowToOrder.css";
const HowToOrder = () => {
    const {t} = useTranslation();
    return(
        <div>
            <Header/>
            <Navbar/>
                <div style={{marginTop:"40px"}}>
                  <div className="howToOrder_container">
                  <h5>{t("HowToOrder.item1")}</h5>
                  <h5>{t("HowToOrder.item2")}</h5>
                  <h5>{t("HowToOrder.item3")}</h5>
                  <h5>{t("HowToOrder.item4")}</h5>
                  <h5>{t("HowToOrder.item5.item5")}</h5>
                  <ul >
                     <li>{t("HowToOrder.item5.subitem1")}</li>
                     <li>{t("HowToOrder.item5.subitem2")}</li>
                     <li>{t("HowToOrder.item5.subitem3")}</li>
                  </ul>
                  <h5>{t("HowToOrder.item6")}</h5>
                  <h5>{t("HowToOrder.item7")}</h5>
                  <h5>{t("HowToOrder.item8")}</h5>
                  <h5>{t("HowToOrder.item9.item9")}</h5>
                  <ul >
                     <li>{t("HowToOrder.item9.subitem1")}</li>
                     <li>{t("HowToOrder.item9.subitem2")}</li>
                     <li>{t("HowToOrder.item9.subitem3")}</li>
                  </ul>
                  <h5>{t("HowToOrder.item10.item10")}</h5>
                  <ul >
                     <li>{t("HowToOrder.item10.subitem1")}</li>
                     <li>{t("HowToOrder.item10.subitem2")}</li>
                     <li>{t("HowToOrder.item10.subitem3")}</li>
                     <li>{t("HowToOrder.item10.subitem4")}</li>
                  </ul>
                  <h5>{t("HowToOrder.item11")}</h5>
                  <h5>{t("HowToOrder.item12")}</h5>
                  <h5>{t("HowToOrder.item13")}</h5>
            </div>
                </div>
            <Footer/>
        </div>
    );
}

export default HowToOrder;