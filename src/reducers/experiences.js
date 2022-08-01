import { CHANGE_FIELD_VALUE, SAVE_EXPERIENCES_HOME } from '../actions/experience';

export const initialState = {
  addExperience: {
    image: '',
    title: '',
    typeOfVolunteering: '',
    hostOrganization: '',
    thematics: [],
    country: '',
    year: '',
    duration: '',
    spokenLanguageFirst: '',
    spokenLanguageSecond: '',
    participationFees: 0,
    accomodation: '',
    food: '',
    feedBack: '',
  },

  homeExperiences: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        addExperience: {
          ...state.addExperience,
          [action.field]: action.value,
        },
      };
    case SAVE_EXPERIENCES_HOME:
      return {
        ...state,
        homeExperiences: action.list,
      };
      default:
      return state;
  }
};

export default reducer;
