// Imports
import './style.scss';
import { useSelector } from 'react-redux';
import Experience from './Experience';

function ExperienceList() {
  const { experiences } = useSelector((state) => state.profile.profileDetails);
  console.log(typeof experiences); // object => array
  console.log(experiences);

  if (experiences) {
    return (
      <div className="profile__experienceList">
        {
            experiences.map((experience) => (
              <Experience
                key={experience.id}
                {...experience}
              />
            ))
          }
      </div>
    );
  }
  // {experiences &&
  //     <div className='profile__experienceList'>
  //       {console.log(experiences)}
  //         {
  //           experiences.map((experience) => (
  //             <Experience
  //               key={experience.id} {...experience}/>
  //             )
  //           )
  //         }
  //     </div>
  //   ;}
  //   {
  //     !experiences &&
  //       <div className='profile__experienceList profile__experienceList--null'>
  //         No experiences yet
  //       </div>

  //   }

  // Ne passe jamais par là car experiences est toujours défini même vide
  // Si aucune expérience
  // return(
  //   <div className='profile__experienceList profile__experienceList--null'>
  //     No experiences yet
  //   </div>
  // )
}

export default ExperienceList;
