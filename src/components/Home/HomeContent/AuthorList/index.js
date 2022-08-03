// == Import
import './style.scss';
import AuthorCard from './AuthorCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProlificsVolunteers } from '../../../../actions/volunteers';
import { useEffect } from 'react';


function AuthorList() {
  const dispatch = useDispatch();
  // On récupère dès le chargement de notre composant
  // la liste des volontaires les plus prolifiques
  useEffect(
    () => {
      dispatch(fetchProlificsVolunteers());
    },
    [],
  );

  // Récupération de l'objet du state contenant la liste des volontaires
  const volunteersProlificsList = useSelector((state) => state.volunteers.volunteersProlificsList);
  console.log(volunteersProlificsList);
  

  return (
    <div className="prolific__container">
      <h2 className="prolific__user--title">Our most prolific user</h2>
      <div className='prolific__user__container'>
        <div className='volunteers__list'>
        {
          volunteersProlificsList.map((volunteer) => (
            <AuthorCard 
              key={volunteer.id} {...volunteer}/>
            )
          )
        }
    </div>
      </div>
    </div>
  );
}

export default AuthorList;
