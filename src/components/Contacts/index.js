import './style.scss';
import PageHeader from '../Header/PageHeader';
import ContactsContent from '../Contacts/ContactContent';
import Footer from './../Footer';

function Contacts() {
  return (
    <div className="container__page__all">
      <div className="container__page__others">
        <PageHeader />
        <ContactsContent />
        <Footer />
      </div>
  </div>
  )
}
      
export default Contacts;