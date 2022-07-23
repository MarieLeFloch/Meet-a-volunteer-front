// Composant qui gère l'affichage du slider
// Spécifique à la page Home
// == Import
import { Carousel } from 'react-responsive-carousel';
import './style.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../../../assets/image/1.jpg';
import image2 from '../../../../assets/image/4.jpg';
import image3 from '../../../../assets/image/7.jpg';
import image4 from '../../../../assets/image/8.jpg';
import image5 from '../../../../assets/image/6.jpg';


function Sliders() {
  return (
    <div className="Sliders">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
        <div>
          <img src={image5} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

// == Export
export default Sliders;
