import './style.scss';
import {
  Form, Select, Dropdown, Button, Radio,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFieldValue } from '../../../actions/experience';

const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'en', value: 'en', text: 'England' },
];

const chosenOptions = [
  { key: 'Yes', value: 'Yes', text: 'Yes' },
  { key: 'No', value: 'No', text: 'No' },
  { key: 'Partially', value: 'Partially', text: 'Partially' },
];

function ExperienceForm() {
  const { title, typeOfVolunteering } = useSelector((state) => state.experiences.addExperience);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(title);
    console.log(typeOfVolunteering)
  }
  // ----------- HANDLES ON CHANGE ------------
  const handleTitleChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'title'));
  }
  const handleVolunteeringChange = (value) => {
    console.log(value.value);
    dispatch(changeFieldValue(value.value, 'typeOfVolunteering'));
  }
  const handleOrganizationChange = (value) => {
    console.log(value.value);
    dispatch(changeFieldValue(value.value, 'hostOrganization'));
  }
  // --------------------------------------------
  return (
    <div className="experience__form">
      <h2 className="experience__form--title">Share your experience</h2>
      <div className="experience__form--content">
        <div className="experience__form--imgpreview">
          <img src="" alt="" />
        </div>
        <div className="experience__form--fields">
          <Form onSubmit={handleSubmit} unstackable className="experience__form--main">
            <Form.Field>
              <label>Title</label>
              <input value={title} onChange={handleTitleChange} />
            </Form.Field>
            <Form.Field control={Select} onChange={handleVolunteeringChange} label="Volunteering Type" options={countryOptions} required />
            <Form.Field control={Select} onChange={handleOrganizationChange} label="Type of Host Organization" options={countryOptions} required />
            <Dropdown placeholder="Thematics" fluid multiple selection options={countryOptions} />
            <Form.Field control={Select} label="Country" options={countryOptions} required />
            <Form.Field control={Select} label="Year" options={countryOptions} required />
            <Form.Field control={Select} label="Spoken Languages" options={countryOptions} required />
            <Form.Field control={Select} label="Spoken Languages (optional)" options={countryOptions} />
            <Form.Field>
              <label>Participation fee</label>
              <input />
            </Form.Field>
            <div className="experience__form--accomodation">
              <Form.Field control={Select}   className="experience__form--accomodation__select" label="Accomodation" options={chosenOptions} required />
            </div>
            <div className="experience__form--food">
              <Form.Field control={Select}  className="experience__form--food__select" label="Food" options={chosenOptions} required />
            </div>
            <Form.TextArea label="Experience feedback" placeholder="Share your story.." />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ExperienceForm;
