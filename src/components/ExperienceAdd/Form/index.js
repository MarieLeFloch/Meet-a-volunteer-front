import './style.scss';
import { Form, Select } from 'semantic-ui-react';

function ExperienceForm() {
  return (
    <div className="experience__form">
      <h2>Share your experience</h2>
      <div className="experience__form--content">
        <div className="experience__form--imgpreview">
          <img src="" alt="" />
        </div>
        <div className="experience__form--fields">
          <Form>
            <Form.Field>
              <label>User Input</label>
              <input />
            </Form.Field>
            <Select placeholder='Select your country' options={countryOptions} />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ExperienceForm;
