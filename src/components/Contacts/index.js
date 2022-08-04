// == Import
import './style.scss';
import HomeHeader from '../Header/HomeHeader';
import ContactContent from './ContactContent';
import Footer from '../Footer';


function Contacts() {
  return (
    <div className="contact__container">
      <HomeHeader />
      <ContactContent />
      <Footer />
    </div>
  );
}

export default Contacts;
