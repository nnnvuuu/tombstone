import './Information.css';
import { TelephoneFill, GeoAltFill, EnvelopeFill, Clock } from 'react-bootstrap-icons';
import WeChatImg from './wechat.svg';

const Information = () =>{
    return(
        <div className="information-container">
            <div className="information-inner-left-container">
              <h1>CONTACT US</h1>
              <div className='phone_wrapper'>
                <TelephoneFill className='phone_img'/>
                <h5>Phone Number</h5>
              </div>
                <p>718-492-8959</p>
                <p>718-492-8959</p>
                <div className='location_wrapper'>
                 <GeoAltFill className='location_img'/>
                 <h5>Location</h5>
                </div>
                <p>5008 4th Ave</p>
                <p>Brooklyn NY, 11220</p>
                <div className='email_wrapper'>
                 <EnvelopeFill className='email_img'/>
                 <h5>Email</h5>
                </div>
                <p>dpeistone@gmail.com</p>
                <p>dpetrade@hotmail.com</p>
                <div className='wechat_wrapper'>
                 <img src = {WeChatImg} className='wechat_img'/>
                 <h5>WeChat</h5>
                </div>
                <p>@dpeiny</p>
            </div>


            <div className="information-inner-right-container">
              <h1>BUSINESS HOURS</h1>
              <div className='inner_wrapper'>
              <div className='monday_wrapper'>
                <h5>Monday</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='tuesday_wrapper'>
                <h5>Tuesday</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='wednesday_wrapper'>
                <h5>Wednesday</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='thursday_wrapper'>
                <h5>Thursday</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='friday_wrapper'>
                <h5>Friday</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='saturday_wrapper'>
                <h5>Saturday</h5>
                <p>Closed</p>
              </div>
              <div className='sunday_wrapper'>
                <h5>Sunday</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              </div>
            </div>



        </div>
    )
}



export default Information;