import Carousel from 'nuka-carousel';
import Cat from './hihi.png';

const Carousels = () => {
    return(
      <Carousel
    wrapAround={true}
    slidesToShow={4}
    autoplay={true}
    autoplayInterval={3000}
    cellAlign={'center'}
    adaptiveHeight={true}
    initialSlideHeight={5}
  >
      <img src={Cat} />
      <img src={Cat} />
      <img src={Cat} />
      <img src={Cat} />
      <img src={Cat} />
      <img src={Cat} />
   
  </Carousel> 
    )
}

export default Carousels;