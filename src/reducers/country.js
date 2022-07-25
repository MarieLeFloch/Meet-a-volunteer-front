import { SAVE_COUNTRY } from '../actions/country';

export const initialState = {
  countryList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COUNTRY:
      return {
        ...state,
        countryList: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
