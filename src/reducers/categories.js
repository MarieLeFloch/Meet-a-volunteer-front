import { SAVE_RECEPTION_STRUCTURE, SAVE_VOLUNTEERING_TYPE } from '../actions/categories';

export const initialState = {
  volunteeringType: [],
  receptionStructure: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_VOLUNTEERING_TYPE:
      return {
        ...state,
        volunteeringType: action.value,
      };
    case SAVE_RECEPTION_STRUCTURE:
      return {
        ...state,
        receptionStructure: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
