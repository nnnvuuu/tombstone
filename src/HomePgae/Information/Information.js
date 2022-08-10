import './Information.css';
import { TelephoneFill, GeoAltFill, EnvelopeFill, Clock } from 'react-bootstrap-icons';
import WeChatImg from './wechat.svg';
import { useTranslation } from "react-i18next";
import i18n from "../../text/i18n";
const Information = () =>{
  const { t } = useTranslation();
    return(
        <div className="information-container">
            <div className="information-inner-left-container">
              <h1>{t("information.item1.item1")}</h1>
              <div className='phone_wrapper'>
                <TelephoneFill className='phone_img'/>
                <h5>{t("information.item1.subitem1")}</h5>
              </div>
              <a href="tel:+1-718-492-8959" className='remove_a_tag_css' ><p>718-492-8959</p></a>
              <a href="tel:+1-718-492-5111" className='remove_a_tag_css'> <p>718-492-5111</p> </a>
                <div className='location_wrapper'>
                 <GeoAltFill className='location_img'/>
                 <h5>{t("information.item1.subitem2")}</h5>
                </div>
                <p>5008 4th Ave</p>
                <p>Brooklyn NY, 11220</p>
                <div className='email_wrapper'>
                 <EnvelopeFill className='email_img'/>
                 <h5>{t("information.item1.subitem3")}</h5>
                </div>
                <p>dpeistone@gmail.com</p>
                <p>dpetrade@hotmail.com</p>
                <div className='wechat_wrapper'>
                 <img src = {WeChatImg} className='wechat_img'/>
                 <h5>{t("information.item1.subitem4")}</h5>
                </div>
                <p>@dpeiny</p>
            </div>


            <div className="information-inner-right-container">
              <h1>{t("information.item2.item2")}</h1>
              <div className='inner_wrapper'>
              <div className='monday_wrapper'>
                <h5>{t("information.item2.subitem1")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='tuesday_wrapper'>
                <h5>{t("information.item2.subitem2")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='wednesday_wrapper'>
                <h5>{t("information.item2.subitem3")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='thursday_wrapper'>
                <h5>{t("information.item2.subitem4")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='friday_wrapper'>
                <h5>{t("information.item2.subitem5")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='saturday_wrapper'>
                <h5>{t("information.item2.subitem6")}</h5>
                <p>Closed</p>
              </div>
              <div className='sunday_wrapper'>
                <h5>{t("information.item2.subitem7")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              </div>
            </div>



        </div>
    )
}



export default Information;