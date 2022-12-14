import './style.scss';
import {
  Form, Select, Dropdown, Button, Input,
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
  const {
    title, participationFees, feedBack, image,
  } = useSelector((state) => state.experiences.addExperience);
  const countryList = useSelector((state) => state.country.countryList);
  const experienceState = useSelector((state) => state.experiences.addExperience);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(experienceState);
  };
  // ----------- HANDLES ON CHANGE ------------
  const handleImageChange = (event) => {
    // const output = document.getElementById('output');
    // output.src = URL.createObjectURL(event.target.files[0]);
    dispatch(changeFieldValue(URL.createObjectURL(event.target.files[0]), 'image'));
  };
  const handleTitleChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'title'));
  };
  const handleVolunteeringChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'typeOfVolunteering'));
  };
  const handleOrganizationChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'hostOrganization'));
  };
  const handleThematicsChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'thematics'));
  };
  const handleCountryChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'country'));
  };
  const handleYearChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'year'));
  };
  const handleFirstLangChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'spokenLanguageFirst'));
  };
  const handleSecondLangChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'spokenLanguageSecond'));
  };
  const handleFeesChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'participationFees'));
  };
  const handleAccomodationChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'accomodation'));
  };
  const handleFoodChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'food'));
  };
  const handleFeedBackChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'feedBack'));
  };
  // --------------------------------------------
  return (
    <div className="experience__form">
      <h2 className="experience__form--title">Share your experience</h2>
      <div className="experience__form--content">
        <div className="experience__form--imgpreview">
          <img src={image} alt="" />
        </div>
        <div className="experience__form--fields">
          <Form onSubmit={handleSubmit} unstackable className="experience__form--main">
            <Input onChange={handleImageChange} type="file" label="Select an image" accept="image/png" className="experience__form--main__input" />
            <Form.Field>
              <label>Title</label>
              <input value={title} onChange={handleTitleChange} />
            </Form.Field>
            <Form.Field control={Select} onChange={handleVolunteeringChange} label="Volunteering Type" options={countryOptions} required />
            <Form.Field control={Select} onChange={handleOrganizationChange} label="Type of Host Organization" options={countryOptions} required />
            <Dropdown onChange={handleThematicsChange} placeholder="Thematics" fluid multiple selection options={countryOptions} />
            <Form.Field control={Select} onChange={handleCountryChange} label="Country" options={countryList} required />
            <Form.Field onChange={handleYearChange} control={Select} label="Year" options={countryOptions} required />
            <Form.Field onChange={handleFirstLangChange} control={Select} label="Spoken Languages" options={countryOptions} required />
            <Form.Field onChange={handleSecondLangChange} control={Select} label="Spoken Languages (optional)" options={countryOptions} />
            <Form.Field>
              <label>Participation fee</label>
              <input value={participationFees} onChange={handleFeesChange} />
            </Form.Field>
            <div className="experience__form--accomodation">
              <Form.Field onChange={handleAccomodationChange} control={Select} className="experience__form--accomodation__select" label="Accomodation" options={chosenOptions} required />
            </div>
            <div className="experience__form--food">
              <Form.Field onChange={handleFoodChange} control={Select} className="experience__form--food__select" label="Food" options={chosenOptions} required />
            </div>
            <Form.TextArea content={feedBack} onChange={handleFeedBackChange} label="Experience feedback" placeholder="Share your story.." />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ExperienceForm;
