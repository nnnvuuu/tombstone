import Navbar from '../NavBar/Navbarr';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GoogleMap from '../Map/Map';
import { Input } from 'antd';
import Button from 'react-bootstrap/Button';
import { TelephoneFill, GeoAltFill, EnvelopeFill, Clock } from 'react-bootstrap-icons';
import WeChatImg from '../HomePgae/Information/wechat.svg';


import './ContactUs.css';
const { TextArea } = Input;


const ContactUs = () => {
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className = "ContactUs_container">
                <div  className = "ContactUs_inner_container">
                   <div className = "ContactUs_inner_left_container">
                       <h1 className='left_title'>給我們留言</h1>
                       <div className='ContactUs_inner_left_flexFirrstRow_container'>
                       <TextArea className ="name_field"  placeholder={"Name"}/>
                       <TextArea className ="email_field"  placeholder={"Email"}/>
                       </div>
                       <div className='ContactUs_inner_left_flexSecondRow_container'>
                       <TextArea rows={2} cols={10} className ="phone_field"  placeholder={"Phone"}/>
                       </div>
                       <div className='ContactUs_inner_left_flexThirdRow_container'>
                       <TextArea rows={2} cols={10} className ="message_field"  placeholder={"Message"}/>
                       </div>
                       <Button variant="primary" className='submit_button'>Send</Button>{' '}
                   </div>
                   
                   <div className = "ContactUs_inner_right_container">
                       <h1 className='right_title'>聯繫我們</h1>
                        <div className = "inner_wrapper" style={{marginTop:"5px"}}>
                             <div className='right_firstRow'>
                                <TelephoneFill className='telephone'/>
                                <h5 className='h5'>Phone Number</h5>
                            </div>
                            <a href="tel:+1-718-492-8959" className='remove_a_tag_css' ><p className='p'>718-492-8959</p></a>
                            <a href="tel:+1-718-492-8959" className='remove_a_tag_css' ><p className='p'>718-492-5111</p></a>
                      
                             <div className='right_firstRow'>
                                <GeoAltFill className='address'/>
                                <h5 className='h5'>Location</h5>
                            </div>
                                <p className='p'>5008 4th Ave</p>
                                <p className='p'>Brooklyn NY, 11220</p>
                         
                
                            <div className='right_firstRow'>
                                <EnvelopeFill className='email'/>
                                <h5 className='h5'>Email</h5>
                            </div>
                                <p className='p'>dpeistone@gmail.com</p>
                                <p className='p'>dpetrade@hotmail.com</p>
                   
                            <div className='right_firstRow'>
                                <img src={WeChatImg} className="wechat_img"/>
                                <h5 className='h5'>WeChat</h5>
                            </div>
                                <p className='p' >@dpeiny</p>
                        </div>
                   </div>     
                </div>
                
            </div>
            <GoogleMap />
            <Footer/>
        </div>
        
    );
}

export default ContactUs;