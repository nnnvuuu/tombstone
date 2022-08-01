import Navbar from '../NavBar/Navbar';
import Carousels from './Carousels/Carousels';
import Information from './Information/Information'
import Footer from '../Footer/Footer';
const HomePage = () =>{
    return(
       <div>
         <Navbar/>
         {/* <Carousels/> */}
         <Information/>
         <Footer/>
       </div>

    )
}

export default HomePage;