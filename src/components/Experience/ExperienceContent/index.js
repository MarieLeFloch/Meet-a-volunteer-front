// == Imports
import './style.scss';
import { Button, Icon } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from '../../../assets/image/5.jpg';
import Avatar from '../../../assets/image/user-default.png';
import { fetchExperienceById, saveExperienceId } from '../../../actions/experience';

function Experience({user}) {
  // ----------------GatheredData--------------------
  const { detailedExperience } = useSelector((state) => state.experiences);
  console.log(detailedExperience);
  console.log(user)
  //------------------------------------------------
  // ----------------Functions--------------------
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExperienceById());
  }, []);
  //---------------------------------------------
  return (
    <div className="experience">
      <div className="experience__title">
        <h1>{detailedExperience.title}</h1>
      </div>

      <div className="experience__main">

        <div className="experience__content">

          <div className="experience__image">
            <img src={`http://romain2518-server.eddi.cloud/images/experiencePicture/${detailedExperience.picture}`} alt="" />
          </div>

          <div className="experience__text">
            <p>"{detailedExperience.feedback}"
            </p>
          </div>
        </div>

        <div>
          <aside className="experience__aside">
            <div className="experience__profil">
              <div className="experience__profil--avatar">
                <img src={Image} alt="" />
              </div>
              <div className="experience__profil--info" />
              <ul>
                <li className="experience__profil--bio"><p>Oui</p></li>
                <li className="experience__profil--contact"><Button className="footer__logo" circular icon="envelope" /></li>
              </ul>
            </div>
            <div className="experience__item">
              <h3>Useful informations</h3>
              <div className="experience__item--list">
                <ul>
                  <li>
                    <div><Icon name="calendar" size="big" /></div>
                    <span>Mission Duration</span>
                    <span>{detailedExperience.duration}</span>
                  </li>
                  <li>
                    <div><Icon name="building" size="big" /></div>
                    <span>Volunteering Organization</span>
                    <span>oui</span>
                  </li>
                  <li>
                    <div><Icon name="language" size="big" /></div>
                    <span>Language</span>
                    <span>{detailedExperience.language} / Info</span>
                  </li>
                  <li>
                    <div><Icon name="flag" size="big" /></div>
                    <span>Country</span>
                    <span>{detailedExperience.country}</span>
                  </li>
                  <li>
                    <div><Icon name="home" size="big" /></div>
                    <span>Accomodation</span>
                    <span>{detailedExperience.isHosted}</span>
                  </li>
                  <li>
                    <div><Icon name="food" size="big" /></div>
                    <span>Food</span>
                    <span>{detailedExperience.isFed}</span>
                  </li>
                  <li>
                    <div><Icon name="money" size="big" /></div>
                    <span>Participation fee</span>
                    <span>{detailedExperience.participationFee}</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

    </div>
  );
}

export default Experience;
