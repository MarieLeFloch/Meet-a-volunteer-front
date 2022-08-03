// Imports
import './style.scss';
import {
  Form, Input, TextArea, Button, Icon, Message,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleExpSuccessMessage, toggleNewExpMessage, saveNewExpMessage, changeNewMessageExpContent,
} from '../../../../actions/message';

function NewExperienceMessage({ pseudo }) {
  // On récupère la propriété du store dans message settings
  const {
    isNewExpMessageOpened,
    hasANewExpMessageBeenSent,
  } = useSelector((state) => state.message.settings);
  // On récupère les infos du destinataire du nouveau message
  const { receiverPseudo, messageExpContent } = useSelector((state) => state.message.newExperienceMessage);

  const dispatch = useDispatch();

  const handleToggleNewMessage = () => {
    // console.log('je suis la');
    if (hasANewExpMessageBeenSent) {
      dispatch(toggleExpSuccessMessage());
    }
    dispatch(toggleNewExpMessage());
  };

  const handleToggleSuccessMessage = () => {
    dispatch(toggleExpSuccessMessage());
    dispatch(saveNewExpMessage());
    console.log('SAVE NEW MESSAGE');
  };

  const handleNewMessageContent = (event) => {
    dispatch(changeNewMessageExpContent(event.currentTarget.value));
    console.log(event.currentTarget.value)
  };

  const submitNewMessage = () => {
    console.log('SAVE NEW MESSAGE');
    dispatch(saveNewExpMessage());
  };

  return (
    <div className={(isNewExpMessageOpened) ? 'new__message--experience__display' : 'new__message--experience'}>
      <h3>Send a new message</h3>
      <div className="new__message--container__experience">
        <Button
          onClick={handleToggleNewMessage}
          icon
          className="message__close--button__experience"
          circular
        ><Icon
          name="close"
        />
        </Button>
        <Form className={(hasANewExpMessageBeenSent) ? 'new__message--experience__hidden' : 'new__message--experience__form'}>
          <Form.Field
            control={Input}
            label="Pseudo"
                // placeholder='Pseudo'
            value={pseudo || ''}
          />
          <Form.Field
            control={TextArea}
            label="Your message"
            onChange={handleNewMessageContent}
            placeholder="Hi ! I wanted to ask you ..."
            value={messageExpContent}
          />
          <Button
            className="send__button--experience"
            onClick={submitNewMessage, handleToggleSuccessMessage}
          >
            Send
          </Button>
        </Form>
        <Message className={(hasANewExpMessageBeenSent) ? 'new__message__success--display' : 'new__message__success'} positive>
          <Message.Header>Your message has been sent </Message.Header>
        </Message>
      </div>
    </div>
  );
}

export default NewExperienceMessage;
