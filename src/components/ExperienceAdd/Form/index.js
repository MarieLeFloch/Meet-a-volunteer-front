// == Imports

import './style.scss';
import {
  Form, Select, Dropdown, Button, Input,
} from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { addExperience, changeFieldValue } from '../../../actions/experience';
import {
  chosenOptions, yearsOptions, languageOptions, durationOptions,
} from '../../../data/formOptions';

function ExperienceForm() {
  // -----------------RECUPERATION DES DONNEES DU STATE------------------
  const {
    title, participationFees, feedBack, image, 
  } = useSelector((state) => state.experiences.addExperience);

  const { thematicList } = useSelector((state) => state.thematic);
  const { volunteeringType, receptionStructure } = useSelector((state) => state.categories);
  const countryList = useSelector((state) => state.country.countryList);
  const experienceState = useSelector((state) => state.experiences.addExperience);
  //---------------------------------------------------------------------
  // ------------------ Create Thematic Options -------------------------
  const thematicOptions = [];
  let i = 0;
  thematicList.forEach((item) => {
    thematicOptions.push({
      key: i += 1,
      text: item.name,
      value: item.id,
    });
  });
  // --------------------------------------------------------------------

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addExperience());
  };
  // ----------- HANDLES ON CHANGE ------------
  const handleImageChange = (event) => {
    // const output = document.getElementById('output');
    // output.src = URL.createObjectURL(event.target.files[0]);
    dispatch(changeFieldValue((event.target.files[0]), 'image'));
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
    console.log(value.value);
  };
  const handleCountryChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'country'));
  };
  const handleYearChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'year'));
  };
  const handleDurationChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'duration'));
  };
  const handleFirstLangChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'spokenLanguageFirst'));
  };
  const handleSecondLangChange = (event, value) => {
    dispatch(changeFieldValue(value.value, 'spokenLanguageSecond'));
  };
  const handleFeesChange = (event) => {
    dispatch(changeFieldValue((event.currentTarget.value), 'participationFees'));
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
          <img src={(image !== '') ? URL.createObjectURL(image) : image} alt="" />
        </div>
        <div className="experience__form--fields">
          <Form onSubmit={handleSubmit} unstackable className="experience__form--main">
            <Input onChange={handleImageChange} type="file" label="Select an image" accept="image/png" className="experience__form--main__input" />
            <Form.Field>
              <label>Title</label>
              <input value={title} onChange={handleTitleChange} />
            </Form.Field>
            <Form.Field control={Select} onChange={handleVolunteeringChange} label="Volunteering Type" options={volunteeringType} required />
            <Form.Field control={Select} onChange={handleOrganizationChange} label="Type of Host Organization" options={receptionStructure} required />
            <Dropdown onChange={handleThematicsChange} placeholder="Thematics" fluid multiple selection options={thematicOptions} />
            <Form.Field control={Select} onChange={handleCountryChange} label="Country" options={countryList} required />
            <Form.Field onChange={handleYearChange} control={Select} label="Year" options={yearsOptions} required />
            <Form.Field onChange={handleDurationChange} control={Select} label="Duration" options={durationOptions} required />
            <Form.Field onChange={handleFirstLangChange} control={Select} label="Spoken Languages" options={languageOptions} required />
            <Form.Field onChange={handleSecondLangChange} control={Select} label="Spoken Languages (optional)" options={languageOptions} />
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
