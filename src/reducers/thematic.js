import { SAVE_THEMATICS, FILTRED_THEMATIC } from '../actions/thematic';

export const initialState = {
  thematicList: [],
  filtredThematicId: '',
  filtredThematicName: ''
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_THEMATICS:
      return {
        ...state,
        thematicList: action.list,
      };
    case FILTRED_THEMATIC:
      return {
        ...state,
        filtredThematicId: action.id,
        filtredThematicName: action.name,
      };
      default:
      return state;
  }
};

export default reducer;
