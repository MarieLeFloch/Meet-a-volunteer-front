import { SAVE_VOLUNTEERS, SAVE_PROLIFICS_VOLUNTEERS } from '../actions/volunteers';

export const initialState = {
  volunteersList: [],
  volunteersProlificsList: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_VOLUNTEERS:
      return {
        ...state,
        volunteersList: action.list,
      };
    case SAVE_PROLIFICS_VOLUNTEERS:
      return {
        ...state,
        volunteersProlificsList: action.list,
      };
  
    default:
      return state;
  }
};

export default reducer;
