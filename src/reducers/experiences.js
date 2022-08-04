import {
  ADDED_EXP_ID,
  ADDED_EXP_SLUG,
  CHANGE_FIELD_VALUE, SAVE_EXPERIENCES_HOME, SAVE_EXPERIENCE_DATA, SAVE_EXPERIENCE_ID, SAVE_EXPERIENCE_STRUCTURE, SAVE_EXPERIENCE_THEMATICS, SAVE_EXPERIENCE_USER, SAVE_EXPERIENCE_VOLUNTEERING, TOGGLE_FORM_ERROR, TOGGLE_FORM_SUCCESS,
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
    formError: false,
    formSuccess: false,
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
    case TOGGLE_FORM_ERROR:
      return {
        ...state,
        addExperience: {
          ...state.addExperience,
          formError: !state.formError,
        },
      };
    case TOGGLE_FORM_SUCCESS:
      return {
        ...state,
        addExperience: {
          ...state.addExperience,
          formSuccess: !state.formSuccess,
        },
      };
    default:
      return state;
  }
};

export default reducer;
