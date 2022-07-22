// == Import
import Sliders from '../Header/HomeHeader/Sliders';
import './style.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Home from '../Home';
import Contacts from '../Contacts';
import LegalMentions from '../LegalMentions';
import Error from '../404';


// == Composant
function App() {
  return (
    <div className="app">
      <Home />
      <Contacts />
      <LegalMentions />
      <Error />
    </div>
  );
}

// == Export
export default App;
