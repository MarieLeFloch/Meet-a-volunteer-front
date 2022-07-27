// Imports
import './style.scss';
import { Form, Input, TextArea, Button, Icon } from 'semantic-ui-react'


function NewMessage() {
  return (
    <div className='new__message'>
        <h3>Send a new message  <Icon name="edit"/></h3>
        <Form className='new__message__form'>
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
            <Form.Field control={Button}>Send</Form.Field>
        </Form>
    </div>
  );
}

export default NewMessage;
