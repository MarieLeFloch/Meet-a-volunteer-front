import { CHANGE_FIELD_VALUE } from '../actions/experience';

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
    participationFees: '',
    accomodation: '',
    food: '',
    feedBack: '',
  },
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
    default:
      return state;
  }
};

export default reducer;
