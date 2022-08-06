// Imports
import './style.scss';
import AuthorCard from '../../../Home/HomeContent/AuthorList/AuthorCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolunteers } from '../../../../actions/volunteers';
import { useEffect } from 'react';


function VolunteersList() {
    const dispatch = useDispatch();
  // On récupère dès le chargement de notre page
  // la liste des volontaires
  useEffect(
    () => {
      dispatch(fetchVolunteers());
    },
    [],
  );

  // Récupération de l'objet du state contenant la liste des volontaires
  const volunteersList = useSelector((state) => state.volunteers.volunteersList);

    return (
    <div className='volunteers__list'>
        {
          volunteersList.map((volunteer) => (
            <AuthorCard 
              key={volunteer.id} {...volunteer}/>
            )
          )
        }
    </div>
  );
}

export default VolunteersList;
