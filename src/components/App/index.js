// == Import
import './style.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../Home';
import Contacts from '../Contacts';
import LegalMentions from '../LegalMentions';
import About from '../About';
import Error from '../404';
import ExperiencePage from '../Experience';
import { fetchCountry } from '../../actions/country';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

// == Composant
function App() {
  const dispatch = useDispatch();
  useEffect(
    ()=> {
      dispatch(fetchCountry());
    },
    [],
  )
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/legal-mentions" element={<LegalMentions />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
