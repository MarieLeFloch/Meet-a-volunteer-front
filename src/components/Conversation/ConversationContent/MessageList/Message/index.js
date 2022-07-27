// Imports
import './style.scss';
import { Image, Icon } from 'semantic-ui-react';
import Avatar from '../../../../../assets/image/user-default.png';
import { functions } from 'lodash';


function Message() {
    function test (event) {
        console.log("ça marche");
        const p = event.currentTarget;
        p.classList.toggle('preview');
    }

  return (
    <div className='received__message'>

        <div className='received__message__topBar'>
            <div className='received__message__topBar--left'>
                <Image src={Avatar} avatar size="mini" />
                <span className='pseudo'>Pseudo</span>
            </div>
            <div className='received__message__topBar--right'>
                <span className='date'>Janv 01, 2022</span>
                <div className='received__message__topBar--icon'>
                    <Icon name="edit" />
                    <Icon name="trash" />
                </div>
            </div>
        </div>

        <div className='received__message__content'>
            <p className ='preview' onClick={test}>Tart ice cream gummies jelly-o cheesecake. Fruitcake tart halvah jelly bear claw. Chocolate dessert wafer bonbon ice cream jujubes tiramisu jelly-o sugar plum. Oat cake candy canes caramels lemon drops croissant halvah marzipan.</p>
        </div>

    </div>
  );
}

export default Message;
