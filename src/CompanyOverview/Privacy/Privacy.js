import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Privacy.css';
const Privacy = () => {
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className='privacy_container'>
                <div>
                    <p>在永龍石碑的網站上，有許多永龍墓碑供訪客瀏覽。每個墓碑，都是一件藝術作品，每座墓碑背後，都有一個不平凡的故事。</p>
                    <p>為了保護家人的隱私，永龍對在網上展示的石碑作品，已經做過模糊處理。但這會影響墓碑的完整觀瞻。永龍尊重家人的意願，如果家人不同意模糊處理，或是不同意墓碑圖片上網，請來電知會，永龍將按家人的意見處理。</p>
                
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Privacy;