// Imports
import './style.scss';
import {
    Form, Select, Button, Input,
  } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../../assets/image/user-default.png';
import { submitProfile, changeFieldValue } from '../../../actions/profile';

  
function ProfileUpdateForm() {
// -----------------RECUPERATION DES DONNEES DU STATE------------------
  const {
    id, pseudo, firstname, lastname, age, profilePicture, email, biography, nativeCountry, phone 
  } = useSelector((state) => state.profile.profileDetails);

  const {
    password
  } = useSelector((state) => state.user.login);

  const countryList = useSelector((state) => state.country.countryList);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(profilePicture);
    dispatch(submitProfile());
  };
  // -------------- HANDLES ON CHANGE ------------
  const handleImageChange = (event) => {
    // const output = document.getElementById('output');
    // output.src = URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(event);
    console.log(profilePicture);

    dispatch(changeFieldValue((event.target.files[0]), 'profilePicture'));
    console.log(profilePicture);

  };

  const handlePseudoChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'pseudo'));
  };

  const handleBiographyChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'biography'));
  };

  const handleFirstnameChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'firstname'));
  };

  const handleLastnameChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'lastname'));
  };

  const handleEmailChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'email'));
  };

  const handleBirthDateChange = (event) => {
    dispatch(changeFieldValue(event.currentTarget.value, 'age'));
  };

  // Ecouteur d'événement : on peut mettre l'événement en argument, et aussi la valeur
  const handleCountryChange = (event, value) => {
    // console.log(value.value);
    dispatch(changeFieldValue(value.value, 'nativeCountry'));
  };


  return (
    <div className='profile__content'>
        <div className="profile__form">
            <h2 className="profile__form--title">Profile</h2>
            <div className="profile__form--content">
            <div className="profile__form--imgpreview">
            <img src={`http://romain2518-server.eddi.cloud/images/pp/${profilePicture}`} />
            {/* <img src={(profilePicture !== '') ? URL.createObjectURL(`http://romain2518-server.eddi.cloud/images/pp/${profilePicture}`) : profilePicture} alt="" /> */}
            </div>
            <div className="profile__form--fields">
              <Form onSubmit={handleSubmit} unstackable className="profile__form--main">
              <Input onChange={handleImageChange} type="file" label="Select an image" accept="image/png" className="profile__form--main__input" />
                <Form.Field>
                  <label>Pseudo</label>
                  <input value={pseudo} onChange={handlePseudoChange} />
                </Form.Field>
                <Form.TextArea value={biography} onChange={handleBiographyChange} label="Your description" />
                <h3 className="profile__form--title">Personnal informations</h3>
                <Form.Field>
                  <label>Firstname</label>
                  <input value={firstname} onChange={handleFirstnameChange} />
                </Form.Field>
                <Form.Field>
                  <label>Lastname</label>
                  <input value={lastname} onChange={handleLastnameChange} />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input value={email} onChange={handleEmailChange} />
                </Form.Field>
                <Form.Field>
                  <label>Date of birth</label>
                  <input 
                    placeholder="Date of birth"
                    onChange={handleBirthDateChange}
                    value={age}
                    type='date'
                  />
                </Form.Field>
                <Form.Field
                  control={Select}
                  label="Country"
                  options={countryList}
                  placeholder={nativeCountry}
                  search
                  onChange={handleCountryChange}
                />
                <Button type="submit">Save your changes</Button>
              </Form>
            </div>
        </div>
    </div>
  </div>
);
}

export default ProfileUpdateForm;
