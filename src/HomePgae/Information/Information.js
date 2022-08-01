import './Information.css';
import { TelephoneFill, GeoAltFill, EnvelopeFill, Clock } from 'react-bootstrap-icons';
import WeChatImg from './wechat.svg';

const Information = () =>{
    return(
        <div className="information-container">
            <div className='left-inner-container'>
                 <h1>CONTACT US</h1>
                 <div className='flex-inner-container-left'>
                   <TelephoneFill className='image-Fill'
                    size={25}/>
                   <h5>Phone Number</h5>
                 </div>
                 <p>718-492-8959</p>
                 <p>718-492-5111</p>
                 <div className='flex-inner-container-left'>
                   <GeoAltFill className='image-Fill'
                    size={25}/>
                   <h5>Location</h5>
                 </div>
                 <p>5008 4th Ave</p>
                 <p>Brooklyn NY, 11220</p>
                <div className='flex-inner-container-left'>
                   <EnvelopeFill className='image-Fill'
                    size={25}/>
                   <h5>Email</h5>
                 </div>
                 <p>dpeistone@gmail.com</p>
                 <p>dpetrade@hotmail.com</p>

                 <div className='flex-inner-container-left'>
                   <img src={WeChatImg} className='wechat-image-Fill'
                    />
                   <h5>WeChat</h5>
                 </div>
                 <p>@dpeiny</p>
             
                
            </div>
            <div className='right-inner-container'>
                <h1>BUSINESS HOURS</h1>
                <div className='flex-inner-container-right-first-item'>
                   <h5>Monday</h5>
                 </div>
                 <p>10:00AM – 6:00PM </p>

                 <div className='flex-inner-container-right'>
                   <h5>Tuesday</h5>
                 </div>
                 <p>10:00AM – 6:00PM </p>


                 <div className='flex-inner-container-right'>
                   <h5>Wednesday</h5>
                 </div>
                 <p>10:00AM – 6:00PM </p>



                 <div className='flex-inner-container-right'>
                   <h5>Thursday</h5>
                 </div>
                 <p>10:00AM – 6:00PM </p>


                 <div className='flex-inner-container-right'>
                   <h5>Friday</h5>
                 </div>
                 <p>10:00AM – 6:00PM </p>



                 <div className='flex-inner-container-right'>
                   <h5>Saturday</h5>
                 </div>
                 <p>Closed</p>



                 <div className='flex-inner-container-right'>
                   <h5>Sunday</h5>
                 </div>
                 <p>11:00AM – 5:00PM</p>
              
            </div>
        </div>
    )
}


// const Information = () =>{
//     return(
//         <div className="information-container">
//             <div className='left-inner-container'>
//                  <h1>CONTACT US</h1>
//                  <div className='flex-inner-container-left'>
//                    <TelephoneFill className='image-Fill'
//                     size={25}/>
//                    <h5>Phone Number</h5>
//                  </div>
//                  <p>718-492-8959</p>
//                  <p>718-492-5111</p>
//                  <div className='flex-inner-container-left'>
//                    <GeoAltFill className='image-Fill'
//                     size={25}/>
//                    <h5>Location</h5>
//                  </div>
//                  <p>5008 4th Ave</p>
//                  <p>Brooklyn NY, 11220</p>
//                 <div className='flex-inner-container-left'>
//                    <EnvelopeFill className='image-Fill'
//                     size={25}/>
//                    <h5>Email</h5>
//                  </div>
//                  <p>dpeistone@gmail.com</p>
//                  <p>dpetrade@hotmail.com</p>

//                  <div className='flex-inner-container-left'>
//                    <img src={WeChatImg} className='wechat-image-Fill'
//                     />
//                    <h5>WeChat</h5>
//                  </div>
//                  <p>@dpeiny</p>
             
                
//             </div>
//             <div className='right-inner-container'>
//                 <h1>BUSINESS HOURS</h1>
//                 <div className='flex-inner-container-right'>
//                    <Clock className='image-Fill'
//                     size={25}/>
//                    <h5>Monday</h5>
//                  </div>
//                  <p>10:00AM – 6:00PM </p>

//                  <div className='flex-inner-container-right'>
//                    <Clock className='image-Fill'
//                     size={25}/>
//                    <h5>Tuesday</h5>
//                  </div>
//                  <p>10:00AM – 6:00PM </p>


//                  <div className='flex-inner-container-right'>
//                    <Clock className='image-Fill'
//                     size={25}/>
//                    <h5>Wednesday</h5>
//                  </div>
//                  <p>10:00AM – 6:00PM </p>



//                  <div className='flex-inner-container-right'>
//                    <Clock className='image-Fill'
//                     size={25}/>
//                    <h5>Thursday</h5>
//                  </div>
//                  <p>10:00AM – 6:00PM </p>


//                  <div className='flex-inner-container-right'>
//                    <Clock className='image-Fill'
//                     size={25}/>
//                    <h5>Friday</h5>
//                  </div>
//                  <p>10:00AM – 6:00PM </p>



//                  <div className='flex-inner-container-right'>
//                    <Clock className='image-Fill'
//                     size={25}/>
//                    <h5>Saturday</h5>
//                  </div>
//                  <p>Closed</p>



//                  <div className='flex-inner-container-right'>
//                    <Clock className='image-Fill'
//                     size={25}/>
//                    <h5>Sunday</h5>
//                  </div>
//                  <p>11:00AM – 5:00PM</p>
              
//             </div>
//         </div>
//     )
// }

export default Information;