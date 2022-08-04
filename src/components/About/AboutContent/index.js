// == Import
import './style.scss';
import { Image } from 'semantic-ui-react';
import avatar_m from '../../../assets/image/avatar_m.png';
import avatar_l from '../../../assets/image/avatar_l.png';
import avatar_rg from '../../../assets/image/avatar_rg.png';
import avatar_rl from '../../../assets/image/avatar_rl.png';
import avatar_a from '../../../assets/image/avatar_a.png';





function AboutContent() {
  return (
    <div className="about">

<h1 className="page__title__about">About</h1>

      <div className='about__content'>

      <div className='about__content--presentation'>
      <h2>Why Meet a volunteer ?</h2>
        <p>
        Pastry cake topping bonbon lemon drops lemon drops. Sweet sweet roll toffee cotton candy jujubes toffee pie. Jelly beans cotton candy cake fruitcake gummies croissant jujubes icing. Sesame snaps donut lemon drops muffin croissant. Jelly-o candy tiramisu sugar plum powder donut tiramisu. Fruitcake chupa chups gummies cake candy canes. Marzipan chocolate bar danish toffee cupcake cotton candy. Macaroon cookie muffin sweet roll shortbread soufflé gummies tootsie roll jelly-o. Carrot cake sweet lemon drops wafer lollipop pie oat cake soufflé. Danish lemon drops pastry carrot cake jelly-o tiramisu.
        </p>
      </div>

      <div className='about__content--team'>
      <h2>Meet the team</h2>
        <div className='team__cards'>
          <div className='team__card'>
            <Image src={avatar_a} avatar size="tiny" />
            <div>
              <span className="team__name">Arslane</span><br/>
              <span className="team__role1">Web Developer / Front-end</span><br/>
              <span className="team__role2">Leach Tech Front</span>
            </div>
          </div>
          <div className='team__card'>
            <Image src={avatar_l} avatar size="tiny" />
            <div>
              <span className="team__name">Lukas</span><br/>
              <span className="team__role1">Web Developer / Back-end</span><br/>
              <span className="team__role2">Scrum master</span>
            </div>
          </div>
          <div className='team__card'>
            <Image src={avatar_m} avatar size="tiny" />
            <div>
              <span className="team__name">Marie</span><br/>
              <span className="team__role1">Web Developer / Front-end</span><br/>
              <span className="team__role2">Product Owner</span>
            </div>
          </div>
          <div className='team__card'>
            <Image src={avatar_rg} avatar size="tiny" />
            <div>
              <span className="team__name">Romain.G</span><br/>
              <span className="team__role1">Web Developer / Back-end</span><br/>
              <span className="team__role2">Git Technical Referent</span>
            </div>
          </div>
          <div className='team__card'>
            <Image src={avatar_rl} avatar size="tiny" />
            <div>
              <span className="team__name">Romain.L</span><br/>
              <span className="team__role1">Web Developer / Back-end</span><br/>
              <span className="team__role2">Lead Teach Back</span>
            </div>
          </div>
        </div>
      
      </div>

    </div>

    </div>
  )
}

export default AboutContent;
