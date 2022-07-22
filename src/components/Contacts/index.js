// == Import
import './style.scss';
import HomeHeader from '../Header/HomeHeader';
import phoneIcon from '../../assets/image/phone-solid.png';
import mailIcon from '../../assets/image/mail-solid.png';
import locIcon from '../../assets/image/loc-solid.png';

function Contacts() {
  return (
    <div className="contact__container">
      <div className="caroussel">
        <HomeHeader />
      </div>

      <div className="bloc__contact">
        
        <h1>Contact Us</h1>

        <div className="item__container">

          <div className="phone__bloc">

            <div className="phone__picto">
              <img src={phoneIcon} alt="" className="phone__img" />
            </div>
            

            <div className="phone__number">

              <h1>CALL US</h1>
              <p> <strong>France:</strong>+33 245897831 </p>
              <p> <strong>International:</strong> +1 385-954-6666 </p>

            </div>

          </div>

          <div className="mail__bloc">
            <div className="mail__picto">
              <img src={mailIcon} alt="" className="mail__img" />
            </div>
            
            <div className="mail__adress">
              <h1>MAIL US</h1>
              <p> <strong>Mail adress: </strong>admin@gmail.com </p>

            </div>



          </div>


          <div className="location__bloc">
            <div className="location__picto">
              <img src={locIcon} alt="" className="location__img" />
            </div>
            
            <div className="location__adress">
              <h1>FIND US</h1>
              <p> <strong>Postal adress: </strong>fake adress, </p>

            </div>



          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacts;
