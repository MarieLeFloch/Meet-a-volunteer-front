// == Import
import { Image } from 'semantic-ui-react';
import Sliders from './Sliders';
import Description from './Description';
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';
import NavBar from '../Nav';
import ProfileHeader from '../ProfileHeader';
// Import de useSelector pour récupérer la valeur de connexion
import { useSelector } from 'react-redux'

function HomeHeader() {
  // Récupération de la valeur de connexion dans le state
  // Si logged = true => on affiche le logo du profil
  // Si false => on affiche les boutons sign in et login
  const {logged} = useSelector((state)=>state.user)

  return (
    <div className="HomeHeader">
      <Sliders />
      {(logged) ? <ProfileHeader /> : <> < LogIn/> < SignIn/></> }
      <Description />
      <NavBar />
    </div>
  );
}

// == Export
export default HomeHeader;
