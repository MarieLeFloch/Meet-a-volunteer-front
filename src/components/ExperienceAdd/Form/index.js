// == Imports
import './style.scss';
import {
  Form, Select, Dropdown, Button, Input, Message,
} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  chosenOptions, yearsOptions, languageOptions, durationOptions,
} from '../../../data/formOptions';
import { saveIdProfile } from '../../../actions/profile';
import {
  addExperience, changeFieldValue, toggleFormError, toggleFormSuccess,
} from '../../../actions/experience';

function ExperienceForm() {
  // -----------------RECUPERATION DES DONNEES DU STATE------------------
  const {
    title, participationFees, feedBack, image, typeOfVolunteering, hostOrganization,
    thematics, country, year, duration, spokenLanguageFirst, spokenLanguageSecond, accomodation, food,
    formError, formSuccess,
  } = useSelector((state) => state.experiences.addExperience);

  const { userPseudo, id } = useSelector((state) => state.user.login);

  const { thematicList } = useSelector((state) => state.thematic);

  const { volunteeringType, receptionStructure } = useSelector((state) => state.categories);
  
  const countryList = useSelector((state) => state.country.countryList);

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
  const navigate = useNavigate();
  useEffect(() => {
    if (formSuccess) {
      dispatch(toggleFormSuccess());
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || participationFees === '' || feedBack === '' || image === '' || typeOfVolunteering === '' || hostOrganization === ''
    || thematics === [] || country === '' || year === '' || duration === '' || spokenLanguageFirst === '' || accomodation === '' || food === '' || spokenLanguageFirst === spokenLanguageSecond) {
      dispatch(toggleFormError());
      window.scrollTo(0, 0);
    }
    else {
      dispatch(addExperience());
      dispatch(saveIdProfile(id));
      window.scrollTo(0, 0);
      setTimeout(() => {
        dispatch(toggleFormSuccess());
        navigate(`/volunteers/${userPseudo}`);
      }, 4000);
    }
  };

  // ----------- HANDLES ON CHANGE ------------
  const handleImageChange = (event) => {
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
    <div className="content__page__all content__page__others experience__form">
      <h2 className="main__title">Share your experience</h2>
      {formError && !formSuccess && (
      <Message negative>
        <Message.Header>Something went wrong !</Message.Header>
        <p>Please fill out every required fields or select a different spoken language </p>
      </Message>
      )}
      {formSuccess && (
      <Message positive>
        <Message.Header>You have successfuly uploaded your experience ! </Message.Header>
        <p>Thank you for sharing your story, you'll be shortly redirected to your beautiful experience page</p>
      </Message>
      ) }
      <div className="experience__form--content">
        <div className="experience__form--imgpreview">
          <img src={(image !== '') ? URL.createObjectURL(image) : image} alt="" />
        </div>
        <div className="experience__form--fields">
          <Form onSubmit={handleSubmit} unstackable className="experience__form--main">
            <Input required onChange={handleImageChange} type="file" label="Select an image" accept="image/png" className="experience__form--main__input" />
            <Form.Field required>
              <label>Title</label>
              <input value={title} onChange={handleTitleChange} />
            </Form.Field>
            <Form.Field control={Select} onChange={handleVolunteeringChange} label="Volunteering Type" options={volunteeringType} required />
            <Form.Field control={Select} onChange={handleOrganizationChange} label="Type of Host Organization" options={receptionStructure} required />
            <Dropdown label="Thematics" onChange={handleThematicsChange} placeholder="Thematics" fluid multiple selection options={thematicOptions} />
            <Form.Field search control={Select} onChange={handleCountryChange} label="Country" options={countryList} required />
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
