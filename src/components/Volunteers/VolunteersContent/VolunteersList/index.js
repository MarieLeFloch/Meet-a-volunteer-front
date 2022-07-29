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
    return (
    <div className='volunteers__content'>
        <AuthorCard />
    </div>
  );
}

export default VolunteersList;
