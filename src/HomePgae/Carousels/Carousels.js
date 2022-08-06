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




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Slider from "react-slick";
import InfiniteCarousel from 'react-leaf-carousel';
import cat from './cat.jpg';

//https://codespots.com/library/item/2666
const Carousels = () => {
  return(
      <div style={{marginTop:"30px"}}>
         <InfiniteCarousel
    breakpoints={[
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
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
    <div>
      <img
        alt=''
        src={cat}
      />
    </div>
  </InfiniteCarousel>
      </div>
  );
};


export default Carousels;