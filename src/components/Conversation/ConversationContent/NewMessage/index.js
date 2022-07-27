// Imports
import './style.scss';
import { Form, Input, TextArea, Button, Icon, Message } from 'semantic-ui-react'
import { toggleNewMessageSettings, toggleSuccessMessage } from '../../../../actions/message';
import { useDispatch, useSelector } from 'react-redux';


function NewMessage() {
  // On récupère la propriété du store dans message settings
  const { isNewMessageOpened, hasANewMessageBeenSent } = useSelector((state)=>state.message.settings);
  
  const dispatch = useDispatch();
  
  const handleToggleNewMessage = () => {
    console.log('je suis la');
    if(hasANewMessageBeenSent){
      dispatch(toggleSuccessMessage());
    }
    dispatch(toggleNewMessageSettings());
  }

  const handleToggleSuccessMessage = () => {
    dispatch(toggleSuccessMessage());
  }


  return (
    <div className={(isNewMessageOpened) ? 'new__message--display' : 'new__message'}>
        <h3>Send a new message  <Icon name="edit"/></h3>
        <div className='new__message__container'>
        <Button
            onClick={handleToggleNewMessage}
            icon
            className="message__close__button"
            circular
            ><Icon
            name="close"
            />
        </Button>
        <Form className={(hasANewMessageBeenSent) ? 'new__message__form--hidden' : 'new__message__form'} >
            <Form.Field
                control={Input}
                label='Pseudo'
                placeholder='Pseudo'
            />
            <Form.Field
            control={TextArea}
            label='Your message'
            placeholder='Hi ! I wanted to ask you ...'
            />
            <Button 
              className="send__button" 
              onClick={handleToggleSuccessMessage}>
              Send
            </Button>
          </Form>
          <Message className={(hasANewMessageBeenSent) ? 'new__message__success--display' : 'new__message__success'} positive>
              <Message.Header>Your message has been sent </Message.Header>
            </Message>
          </div>
    </div>
  );
}

export default NewMessage;
