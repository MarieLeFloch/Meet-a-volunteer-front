// Imports
import './style.scss';
import VolunteersList from './VolunteersList';

function VolunteersContent() {
  return (
    <div className='content__page__all content__page__home volunteers__content'>
        <h1 className="main__title home__content__title">Our volunteers</h1>
        <VolunteersList />
    </div>
  );
}

export default VolunteersContent;
