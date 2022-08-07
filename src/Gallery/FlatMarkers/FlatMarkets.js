import './FlatMarkets.css';

import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { photos } from '../Photos/Photos';
import Carousel, { Modal, ModalGateway } from "react-images";
import Navbarr from '../../NavBar/Navbarr';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Paginations from '../../Paginations/Paginations';


 //http://neptunian.github.io/react-photo-gallery/examples/basic-rows.html
const FlatMarkers = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(9);
  const [totalImages, setTotalImages] = useState(17);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


    //Get current posts
    const indexOfLastPost = currentPage * imagesPerPage;
    const indexOfFirstPost = indexOfLastPost - imagesPerPage;
    const currentPhotos = photos.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return(
      
    <div >
      <Header/>
      <Navbarr/>
      <div className="gallery_container grow img">
     <Gallery
      photos={currentPhotos}
      margin={20}
      targetRowHeight = {300}  
      onClick={openLightbox} 
     />
     <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>

      <Paginations 
        postsPerPage={imagesPerPage} 
        totalPosts = {totalImages}
        paginate ={paginate}
        currentPage = {currentPage}
      />         

      <Footer/>
   </div>
);
    }



export default FlatMarkers;