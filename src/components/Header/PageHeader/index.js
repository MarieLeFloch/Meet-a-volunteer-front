// == Import
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';
import NavBar from '../Nav';
import ProfileHeader from '../ProfileHeader';
// Import de useSelector pour récupérer la valeur de connexion
import { useSelector } from 'react-redux'

function PageHeader() {
  // Récupération de la valeur de connexion dans le state
  // Si logged = true => on affiche le logo du profil
  // Si false => on affiche les boutons sign in et login
  const {logged} = useSelector((state)=>state.user)
  
  return (
    <div className="PageHeader">
      {(logged) ? <ProfileHeader /> : <> < LogIn/> < SignIn/></> }
      <NavBar />
    </div>
  );
}

// == Export
export default PageHeader;
