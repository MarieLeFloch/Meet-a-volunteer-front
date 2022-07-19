// == Import
import { Carousel } from 'react-responsive-carousel';
import reactLogo from './react-logo.svg';
import './style.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/image/1.jpg';
import image2 from '../../assets/image/2.jpg';
import image3 from '../../assets/image/3.jpg';

// == Composant
function App() {
  return (
    <div className="app">
      <Carousel>
        <div>
          <img src={image1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={image2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={image3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

// == Export
export default App;
