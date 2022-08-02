// Imports
import './style.scss';
import Experience from './Experience';
import { useSelector } from 'react-redux';


function ExperienceList() {

   const { experiences } = useSelector((state) => state.profile.profileDetails);
   console.log(experiences);
   // const nbExp = experiences.length; // Uncaught TypeError: Cannot read property 'length' of undefined

  // Si le volontaire à au moins une expérience
  // if (experiences.length>0) { //ERREUR : undefined
   if (experiences) {
   return (
     <div className='profile__experienceList'>
         {
           experiences.map((experience) => (
             <Experience 
               key={experience.id} {...experience}/>
             )
           )
         } 
     </div>
   );
   // Ne passe jamais par là car experiences est toujours défini même vide
   // Si aucune expérience
   }else{
      return(
        <div className='profile__experienceList profile__experienceList--null'>
          No experiences yet
        </div>
      )
    }
 }


export default ExperienceList;
