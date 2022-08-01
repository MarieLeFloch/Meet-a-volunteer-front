import {
  CHANGE_FIELD_VALUE, SAVE_EXPERIENCES_HOME, SAVE_EXPERIENCE_DATA, SAVE_EXPERIENCE_ID,
} from '../actions/experience';

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

  homeExperiences: [],
  experienceId: '',
  detailedExperience: [],
  loading: true,
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
    case SAVE_EXPERIENCE_ID:
      return {
        ...state,
        experienceId: action.value,
      };
    case SAVE_EXPERIENCE_DATA:
      return {
        ...state,
        detailedExperience: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
