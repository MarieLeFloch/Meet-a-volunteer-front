// Imports
import './style.scss';
import VolunteersList from './VolunteersList';

function VolunteersContent() {
  return (
    <div className='volunteers__content'>
        <h1 className="volunteers__content--title">Our volunteers</h1>
        <VolunteersList />
    </div>
  );
}

export default VolunteersContent;
