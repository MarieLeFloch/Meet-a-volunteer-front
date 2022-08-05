// == Imports
import './style.scss';
import { Button, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchExperienceById } from '../../../actions/experience';
import NewExperienceMessage from './NewMessage';
import { setReceiverId, toggleNewExpMessage } from '../../../actions/message';

function Experience() {
  // ----------------GatheredData--------------------
  const {
    detailedExperience,
    detailedExperienceThematics,
    detailedExperienceUser, detailedExperienceStructure, detailedExperienceVolunteering,
  } = useSelector((state) => state.experiences);
  const { logged } = useSelector((state) => state.user);
  //------------------------------------------------
  // ----------------Functions--------------------
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExperienceById());
  }, []);

  const handleClick = () => {
    dispatch(toggleNewExpMessage());
    dispatch(setReceiverId(detailedExperienceUser.id));
  };
  //---------------------------------------------
  return (
    <div className="experience">
      <div className="experience__title">
        <h1>{detailedExperience.title}</h1>
        <span>
          <ul className="experience__title--thematics">
            {detailedExperienceThematics.map((item) => (<li key={item.id}>{item.name}</li>))}
          </ul>
        </span>
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
          <span className="experience__date">{new Date(detailedExperience.createdAt).toDateString()}</span>
        </div>

        <div>
          <aside className="experience__aside">
            <div className="experience__profil">
              <div className="experience__profil--avatar">
                <img src={`http://romain2518-server.eddi.cloud/images/pp/${detailedExperienceUser.profilePicture}`} alt="" />
              </div>
              <div className="experience__profil--info" />
              <ul>
                <li className="experience__profil--bio"><p>{detailedExperienceUser.pseudo}</p></li>
                {logged && <li className="experience__profil--contact"><Button onClick={handleClick} className="footer__logo" circular icon="envelope" /></li> }
              </ul>
              <div><NewExperienceMessage
                pseudo={detailedExperienceUser.pseudo}
                id={detailedExperienceUser.id}
              />
              </div>
            </div>
            <div className="experience__item">
              <h3>Useful informations</h3>
              <div className="experience__item--list">
                <ul>
                  <li>
                    <div><Icon name="calendar" size="big" /></div>
                    <span className="experience__item__title--span">Mission Duration</span>
                    <span className="experience__item--span">{detailedExperience.duration}</span>
                  </li>
                  <li>
                    <div><Icon name="building" size="big" /></div>
                    <span className="experience__item__title--span">Volunteering Organization</span>
                    <span className="experience__item--span">{detailedExperienceVolunteering.name}</span>
                  </li>
                  <li>
                    <div><Icon name="building" size="big" /></div>
                    <span className="experience__item__title--span">Reception Structure</span>
                    <span className="experience__item--span">{detailedExperienceStructure.name}</span>
                  </li>
                  <li>
                    <div><Icon name="language" size="big" /></div>
                    <span className="experience__item__title--span">Language</span>
                    <span className="experience__item--span">{[detailedExperience.language].join()}</span>
                  </li>
                  <li>
                    <div><Icon name="flag" size="big" /></div>
                    <span className="experience__item__title--span">Country</span>
                    <span className="experience__item--span">{detailedExperience.country}</span>
                  </li>
                  <li>
                    <div><Icon name="home" size="big" /></div>
                    <span className="experience__item__title--span">Accomodation</span>
                    <span className="experience__item--span">{detailedExperience.isHosted}</span>
                  </li>
                  <li>
                    <div><Icon name="food" size="big" /></div>
                    <span className="experience__item__title--span">Food</span>
                    <span className="experience__item--span">{detailedExperience.isFed}</span>
                  </li>
                  <li>
                    <div><Icon name="money" size="big" /></div>
                    <span className="experience__item__title--span">Participation fee</span>
                    <span className="experience__item--span">{detailedExperience.participationFee} $</span>
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
