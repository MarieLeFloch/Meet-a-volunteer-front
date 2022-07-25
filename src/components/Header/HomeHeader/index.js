// == Import
import { Image } from 'semantic-ui-react';
import Sliders from './Sliders';
import Description from './Description';
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';
import NavBar from '../Nav';

function HomeHeader() {
  return (
    <div className="HomeHeader">
      <Sliders />
      <LogIn />
      <SignIn />
      <Description />
      <NavBar />

    </div>
  );
}

// == Export
export default HomeHeader;
