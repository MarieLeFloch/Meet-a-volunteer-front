// Imports
import './style.scss';
import Experience from './Experience';
import { useSelector } from 'react-redux';


function ExperienceList() {

  const { experiences } = useSelector((state) => state.profile.profileDetails);
  console.log(experiences);
  //console.log(useSelector((state) => state.profile.profileDetails.experiences).length);
  // Si le volontaire à au moins une expérience
  // if (experiences.length > 0) {

  //if (tab.length>0) {
  return (
    <div className='profile__experienceList'>
        {/* {
          experiences.map((experience) => (
            <Experience 
              key={experience.id} {...experience}/>
            )
          )
        }  */}
    </div>
  );
  // Si aucune expérience
  //}else{
  //   return(
  //     <div className='profile__experienceList profile__experienceList--null'>
  //       No experiences yet
  //     </div>
  //   )
  // }
}

export default ExperienceList;
