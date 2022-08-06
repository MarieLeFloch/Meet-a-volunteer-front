// == Import
import './style.scss';
import Sliders from './Sliders';
import Description from './Description';
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import NavBar from '../Nav';
import ProfileHeader from '../ProfileHeader';
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
