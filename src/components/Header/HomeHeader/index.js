// == Import
import { Image } from 'semantic-ui-react';
import Sliders from './Sliders';
import Description from './Description';
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';
import NavBar from '../Nav';
import Logo from '../../../assets/image/logo.png'


function HomeHeader() {
  return (
    <div className="HomeHeader">
      <Sliders />
      <Image src={Logo} size='small'/>
      <LogIn />
      <SignIn />
      <Description />
      <NavBar />

    </div>
  );
}

// == Export
export default HomeHeader;
