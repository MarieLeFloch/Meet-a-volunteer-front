// == Import
import './style.scss';
import HomeHeader from '../Header/HomeHeader';
import phoneIcon from '../../assets/image/phone-solid.png';

function Contacts() {
  return (
    <div className="contact__container">
      <div className="caroussel">
        <HomeHeader />
      </div>
      <div className="bloc__contact">
        
        <h1>Contact Us</h1>

        <div className="item__container">

          <div className="phone__contact">

            <div className="phone__icon">

              <img src={phoneIcon} alt="" className="phone__icon" />

            </div>

            <div className="phone__number">

              <h1>CALL US</h1>
              <p> France: +33 245897831 </p>
              <br/>
              <p> International: +1 385-954-6666 </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacts;
