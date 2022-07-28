// Imports
import './style.scss';
import { Image, Icon } from 'semantic-ui-react';
import Avatar from '../../../../../assets/image/user-default.png';
import { toggleNewMessageSettings } from '../../../../../actions/message';
import { useDispatch, useSelector } from 'react-redux';

function Message() {

    const { isNewMessageOpened } = useSelector((state)=>state.message.settings);
  
    const dispatch = useDispatch();
    
    const handleToggleNewMessage = () => {
      dispatch(toggleNewMessageSettings());
      const newMessage = document.querySelector('.new__message');
      newMessage.classList.toggle('new__message--display')
    }
  
    function showEntireMessage (event) {
        const p = event.currentTarget;
        p.classList.toggle('preview');
    }

    // function handleNewMessage (event) {
    //    console.log("ça marche");
    //    setIsNewMessageOpened(!isNewMessageOpened);
    //    const newMessage = document.querySelector('.new__message');
    //     newMessage.classList.toggle('new__message--display')
    // }

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
                    <Icon name="edit" onClick={handleToggleNewMessage} />
                    <Icon name="trash" />
                </div>
            </div>
        </div>

        <div className='received__message__content'>
            <p className ='preview' onClick={showEntireMessage}>Tart ice cream gummies jelly-o cheesecake. Fruitcake tart halvah jelly bear claw. Chocolate dessert wafer bonbon ice cream jujubes tiramisu jelly-o sugar plum. Oat cake candy canes caramels lemon drops croissant halvah marzipan.</p>
        </div>

    </div>
  );
}

export default Message;
