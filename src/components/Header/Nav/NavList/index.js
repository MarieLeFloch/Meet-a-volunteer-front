// == Import
import './style.scss';
import { useState } from 'react';

function NavList({ isOpen }) {
  return (
    <div className={(isOpen) ? 'list' : 'list__off'}>

      <ul className="list__container">
        <li className="list-item"><a href="">Experiences</a></li>
        <li className="list-item"><a href="">Volunteers</a></li>
        <li className="list-item"><a href="">Messages</a></li>
      </ul>

    </div>
  );
}

export default NavList;
