// == Import
import './style.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavList({ isOpen }) {
  return (
    <div className={(isOpen) ? 'list' : 'list__off'}>

      <ul className="list__container">
        <Link to="/volunteers"><li className="list-item">Volunteers</li></Link>
        <Link to="/conversation"><li className="list-item">Messages</li></Link>
        <Link to="/experience/add"><li className="list-item">Share</li> </Link>
        <Link to="/about"><li className="list-mobil">About</li> </Link>
        <Link to="/contacts"><li className="list-mobil">Contacts</li> </Link>
        <Link to="/legal-mentions"><li className="list-mobil">Legal Mentions</li> </Link>
      </ul>

    </div>
  );
}

export default NavList;
