import {
  CHANGE_FIELD_VALUE, SAVE_EXPERIENCES_HOME, SAVE_EXPERIENCE_DATA, SAVE_EXPERIENCE_ID, SAVE_EXPERIENCE_STRUCTURE, SAVE_EXPERIENCE_THEMATICS, SAVE_EXPERIENCE_USER, SAVE_EXPERIENCE_VOLUNTEERING,
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
  detailedExperienceUser: [],
  detailedExperienceThematics: [],
  detailedExperienceStructure: [],
  detailedExperienceVolunteering: [],
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
    case SAVE_EXPERIENCE_THEMATICS:
      return {
        ...state,
        detailedExperienceThematics: action.value,
      };
    case SAVE_EXPERIENCE_USER:
      return {
        ...state,
        detailedExperienceUser: action.value,
      };
    case SAVE_EXPERIENCE_STRUCTURE:
      return {
        ...state,
        detailedExperienceStructure: action.value,
      };
    case SAVE_EXPERIENCE_VOLUNTEERING:
      return {
        ...state,
        detailedExperienceVolunteering: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
