// == Import
import './style.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Route, Routes, useLocation } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../Home';
import Contacts from '../Contacts';
import LegalMentions from '../LegalMentions';
import About from '../About';
import Error from '../404';
import ExperiencePage from '../Experience';
import { fetchCountry } from '../../actions/country';
import { fetchThematics } from '../../actions/thematic';
import Volunteers from '../Volunteers';
import Profile from '../Profile';
import Conversation from '../Conversation';
import ExperienceAdd from '../ExperienceAdd';
import ThematicExperience from '../ThematicExperience';

// == Composant
function App() {
  const { logged } = useSelector((state) => state.user);
  console.log(logged);

  const dispatch = useDispatch();
  // On récupère dès le chargement de notre application la liste des pays pour le formulaire d'inscription
  useEffect(
    () => {
      dispatch(fetchCountry());
    },
    [],
  );

  // On récupère dès le chargement de notre application la liste des thématiques
  useEffect(
    () => {
      dispatch(fetchThematics());
    },
    [],
  );


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experiences/thematics/:slug" element={<ThematicExperience />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/volunteers/pseudo" element={<Profile />} />
        <Route path="/legal-mentions" element={<LegalMentions />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        {(logged) ? <Route path="/experience/add" element={<ExperienceAdd />} /> : <Route path="*" element={<Error />} />}
        <Route path="/conversation" element={<Conversation />} />

      </Routes>
    </div>
  );
}

// == Export
export default App;
