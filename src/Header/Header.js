import './Header.css';
import LogoImage from './logo.png';
const Header = () => {
    return (
        <div className="header-container">
                <img src={LogoImage} alt="Logo" />
                <h3>EST. 2003</h3>
                <div>组 约 永 龙 石 碑 公 司</div>
                <div>New York Dragon Peace Enterprise Inc. (DPEINY)</div>
        </div>
    );
  };


  export default Header;