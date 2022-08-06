// == Import
import './style.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import des méthodes des librairies
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Import de nos méthodes (requêtes API)
import { fetchCountry } from '../../actions/country';
import { fetchThematics } from '../../actions/thematic';
import { fetchExperiencesHome } from '../../actions/experience';

// Import de nos composants
import Home from '../Home';
import Contacts from '../Contacts';
import LegalMentions from '../LegalMentions';
import About from '../About';
import Error from '../404';
import ExperiencePage from '../Experience';
import Volunteers from '../Volunteers';
import Profile from '../Profile';
import Conversation from '../Conversation';
import ExperienceAdd from '../ExperienceAdd';
import ThematicExperience from '../ThematicExperience';
import ProfileUpdate from '../ProfileUpdate';


// == Composant
function App() {
  // On récupère le statut de connexion dans le state, logged = true si la personne s'est connectée
  const { logged } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const location = useLocation();

  // On récupère dès le chargement de notre application 
  // -> la liste des pays pour les formulaires d'inscription
  // -> la liste des thématiques pour notre scroll bar
  // -> la liste aléatoire d'expériences à afficher sur la home
  useEffect(
    () => {
      dispatch(fetchCountry());
      dispatch(fetchThematics());
      dispatch(fetchExperiencesHome());
    },
    [],
  );

  // On remet la position au top de la page lors de chaque redirection (changement d'url)
  // location représente l'url actuelle
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location],
  );
  
  // On inclue dans app toutes les routes de notre application, et on associe le composant correspondant
  // Pour celles accessibles que lorsqu'on est connecté, on fourni le composant correspond si logged est true, sinon on redirige vers une 404
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences/:id/:slug" element={<ExperiencePage />} />
        <Route path="/experiences/thematics/:slug" element={<ThematicExperience />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/volunteers/:slug" element={<Profile />} />
        <Route path="/volunteers/:slug/update" element={<ProfileUpdate />} />
        <Route path="/legal-mentions" element={<LegalMentions />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        {(logged) ? <Route path="/experience/add" element={<ExperienceAdd />} /> : <Route path="*" element={<Error />} />}
        {(logged) ? <Route path="/conversation" element={<Conversation />} /> : <Route path="*" element={<Error />} />}
      </Routes>
    </div>
  );
}

// == Export
export default App;
