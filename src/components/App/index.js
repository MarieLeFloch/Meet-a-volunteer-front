// == Import
import './style.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../Home';
import Contacts from '../Contacts';
import LegalMentions from '../LegalMentions';
import Error from '../404';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/legal-mentions" element={<LegalMentions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
