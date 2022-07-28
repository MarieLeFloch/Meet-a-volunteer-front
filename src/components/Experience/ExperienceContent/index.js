// == Imports
import './style.scss';
import { Button, Icon } from 'semantic-ui-react';
import Image from '../../../assets/image/5.jpg';
import Avatar from '../../../assets/image/user-default.png';


function Experience() {
  return (
    <div className="experience">
      <div className="experience__title">
        <h1>Experience</h1>
      </div>

      <div className="experience__main">

        <div className="experience__content">

          <div className="experience__image">
            <img src={Image} alt="" />
          </div>

          <div className="experience__text">
            <p>"
              Lorem ipsum dolor sit amet. Eum mollitia quia et quasi laudantium non quis exercitationem sed quibusdam quos quo illum totam sit sint quam. Ut alias harum in numquam voluptates non similique maiores et alias galisum! Est quisquam reprehenderit sit nobis omnis et velit eaque in magni placeat sed corrupti iste ut possimus expedita? In nemo voluptate est voluptas quia ut sapiente voluptatem! Aut maiores commodi sed nobis illum quo voluptate voluptatem aut architecto temporibus et voluptatem modi. Vel nihil aperiam non distinctio iste et odit iure qui dolorem fuga et cumque maiores est soluta recusandae ut consequatur vitae? Et sint laudantium et recusandae eaque et officia architecto quo quos provident nam dignissimos cupiditate. Non optio praesentium est laudantium fugiat non maiores officiis. Et reprehenderit debitis qui exercitationem cupiditate ut autem quod.
              Et reprehenderit debitis qui exercitationem cupiditate ut autem quod. Et reprehenderit debitis qui exercitationem cupiditate ut autem quod. Et reprehenderit debitis qui exercitationem cupiditate ut autem quod."
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
                <li className="experience__profil--country">From : Country</li>
                <li className="experience__profil--bio"><p>"Author bio"</p></li>
                <li className="experience__profil--contact"><Button className="footer__logo" circular icon="envelope" /></li>
              </ul>
            </div>
            <div className="experience__item">
              <h3>Useful informations</h3>
              <div className="experience__item--list">
                <ul>
                  <li>
                    <div><Icon name="calendar" size='big' /></div>
                    <span>Mission Duration</span>
                    <span>Info</span>
                  </li>
                  <li>
                    <div><Icon name="building" size='big' /></div>
                    <span>Volunteering Organization</span>
                    <span>Info</span>
                  </li>
                  <li>
                    <div><Icon name="language" size='big' /></div>
                    <span>Language</span>
                    <span>Info / Info</span>
                  </li>
                  <li>
                    <div><Icon name="flag" size='big' /></div>
                    <span>Mission Duration</span>
                    <span>Info</span>
                  </li>
                  <li>
                    <div><Icon name="home" size='big' /></div>
                    <span>Accomodation</span>
                    <span>Info</span>
                  </li>
                  <li>
                    <div><Icon name="food" size='big' /></div>
                    <span>Food</span>
                    <span>Info</span>
                  </li>
                  <li>
                    <div><Icon name="money" size='big' /></div>
                    <span>Participation fee</span>
                    <span>Info</span>
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
