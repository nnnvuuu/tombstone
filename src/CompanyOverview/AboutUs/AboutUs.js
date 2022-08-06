import './AboutUs.css';
import AboutUsImage from './DPEI.png';
import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const AboutUs = () =>{
    return(
        <>
        <Header/>
        <Navbar/>
        <div className='AboutUs_container'>
            <div className='AboutUs_upper_container'>
                <div className='AboutUs_upper_left_container'>
                    <img src ={AboutUsImage}/>
                </div>
                <div className='AboutUs_upper_right_container'>
                    <h2 className='AboutUs_upper_right_title'>About us</h2>
                    <h4 className='AboutUs_upper_right_subTitle1'>Yonglong Stone Stele
                        <h4 className='AboutUs_upper_right_subTitle2'>Company Profile</h4>
                    </h4>
                   
                    <p className='AboutUs_upper_right_text'>Yonglong Stone Tablet Company is a professional company that manufactures tombstones. Founded in New York in 2000, the factory is located in mainland China. After ten years of cold and summer, Yonglong Stone Tablet Company has sharpened its sword for ten years. Now Yonglong Stone Tablet Factory is a large tombstone factory with 50,000 square feet of modern workshops and advanced industrial equipment. Conventional tombstones, family monuments, clan arches, stone houses, and stone statues designed and produced by Yonglong have spread to more than 50 cemeteries in the eastern United States</p>
                </div>
            </div>
            <div className='AboutUs_lower_container'>
                <div className='AboutUs_lower_left_container'>
                   
                    <h4 className='AboutUs_lower_left_Title'>Yonglong Stone Stele</h4>
                    <p className='AboutUs_lower_left_text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <div  className='AboutUs_lower_right_container'>
                    <img src ={AboutUsImage}/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default AboutUs;