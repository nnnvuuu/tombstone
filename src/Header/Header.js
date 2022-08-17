import './Header.css';
import LogoImage from './logo.png';
const Header = () => {
    return (
        <div className="header-container">
               <div className='header_inner_left_container'>
                 <img className='header_image' src = {LogoImage}/>
                 <h5 className='left_subtitle'>EST. 2003</h5>
               </div>
               <div className='header_inner_right_container'>
                  <h1 className='header_title'>纽约永龙石碑公司</h1>
                  <h5 className='right_subtitle'>New York Dragon Peace Enterprise Inc. (DPEINY)</h5>    
                </div>
        </div>
    );
  };




  export default Header;