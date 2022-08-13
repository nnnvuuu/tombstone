// import './Carousel.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
// import { Carousel } from 'react-responsive-carousel';  
// import cat from './cat.jpg';
// const Carousels = () => {
  
//   return (
//     <div className="carousel_container">
//          <Carousel
//     infiniteLoop
//     useKeyboardArrows
//     autoPlay 
//     showStatus={false}
//     // thumbWidth = {50}
//     centerMode
//     centerSlidePercentage={30}
//     transitionTime={1000}
//     showThumbs={false}
//     >  
//                 <div>  
//                     <img src={cat} />  
                    
//                 </div>  
//                 <div>  
//                     <img src={cat} />  
                  
//                 </div>  
//                 <div>  
//                     <img src={cat} />  
                   
//                 </div>  
//             </Carousel>  

//     </div>
//   );
// };





import InfiniteCarousel from 'react-leaf-carousel';
import cat from './cat.jpg';
import hihi from './hihi.png';
import img1 from '../Carousels/photos/1.webp';
import img2 from '../Carousels/photos/2.webp';
import img3 from '../Carousels/photos/3.webp';
import img4 from '../Carousels/photos/4.webp';
import img5 from '../Carousels/photos/5.webp';
import img6 from '../Carousels/photos/6.webp';
import img7 from '../Carousels/photos/7.webp';
import img8 from '../Carousels/photos/8.webp';
import img9 from '../Carousels/photos/9.webp';
import img10 from '../Carousels/photos/10.webp';
import img11 from '../Carousels/photos/11.webp';
import img12 from '../Carousels/photos/12.webp';
import './Carousel.css';

//https://codespots.com/library/item/2666
const Carousels = () => {
  return(
      <div style={{marginTop:"30px"}}>
         <InfiniteCarousel
         
         
    breakpoints={[
      // {
      //   breakpoint: 481,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

   
    ]}
    // dots={true}
    // showSides={true}
    // sidesOpacity={.5}
    // sideSize={.1}
    cycleInterval = {5000}
    arrows = {false}
    pauseOnHover = {true}
    autoCycle = {true}
    slidesToScroll={1}
    slidesToShow={4}
    scrollOnDevice={true}
    lazyLoad = {true}
    animationDuration = {1500}
    // paging = {true}
  >
    <div>
      <img
        alt=''
        src={img1}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img2}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img3}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img4}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img5}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img6}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img7}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img8}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img9}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img10}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img11}
        className="img_size"
      />
    </div>
    <div>
      <img
        alt=''
        src={img12}
        className="img_size"
      />
    </div>
   
  </InfiniteCarousel>
      </div>
  );
};


export default Carousels;