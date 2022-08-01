import { SAVE_VOLUNTEERS } from '../actions/volunteers';

export const initialState = {
  volunteersList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_VOLUNTEERS:
      return {
        ...state,
        volunteersList: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
