// == Import
import './style.scss';
import phoneIcon from '../../../assets/image/phone-solid.png';
import mailIcon from '../../../assets/image/mail-solid.png';
import snIcon from '../../../assets/image/sn-solid.png';

function ContactContent() {
  return (

    <div className="content__page__all content__page__others bloc__contact">

      <h1 className='main__title'>Contact Us</h1>

      <div className="contact-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec aliquam ligula, convallis pulvinar turpis. Cras mattis quam at nunc vehicula, ac tincidunt purus volutpat. Morbi pellentesque vehicula pulvinar. Ut efficitur lorem a porta tincidunt. Cras pharetra risus sit amet neque fermentum, id ultricies sapien tristique. Cras ut posuere elit. Donec nec velit mauris. Cras quis rutrum ante, at consequat est. Aenean non blandit felis, non faucibus urna. In sem quam, tristique id aliquet lobortis, tristique id erat. Fusce quis metus at arcu vehicula consectetur. Quisque finibus iaculis eu.
      </div>

      <div className="item__container">

        <div className="phone__bloc">

          <div className="phone__picto">
            <img src={phoneIcon} alt="" className="phone__img" />
          </div>

          <div className="phone__number">

            <h1>CALL US</h1>
            <p> <strong>France:</strong>+33 245897831 </p>
            {/* <p> <strong>International:</strong> +1 385-954-6666 </p> */}

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

        <div className="sn__bloc">
          <div className="sn__picto">
            <img src={snIcon} alt="" className="sn__img" />
          </div>

          <div className="sn__adress">
            <h1>FOLLOW US</h1>
            <p> <strong>Facebook: </strong>meetavolunteer </p>
            <p> <strong>Instagram: </strong>@meetavolunteer </p>

          </div>

        </div>

      </div>
    </div>

  );
}

export default ContactContent;
