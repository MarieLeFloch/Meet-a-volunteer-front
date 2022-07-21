// == Import
import './style.scss';

function NavList(isOpen) {
  return (
    <div className="list">
      {isOpen && (
      <ul>
        <li className="list-item"><a href=''>Experiences</a></li>
        <li className="list-item"><a href=''>Volunteers</a></li>
        <li className="list-item"><a href=''>Thematics</a></li>
        <li className="list-item"><a href=''>Thematics</a></li>
        <li className="list-item"><a href=''>Thematics</a></li>
      </ul>
      ) }

    </div>
  );
}

export default NavList
