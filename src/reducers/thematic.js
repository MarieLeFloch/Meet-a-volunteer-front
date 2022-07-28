import { SAVE_THEMATICS } from '../actions/thematic';

export const initialState = {
  thematicList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_THEMATICS:
      return {
        ...state,
        thematicList: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
