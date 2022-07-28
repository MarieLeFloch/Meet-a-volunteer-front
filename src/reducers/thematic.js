import { SAVE_THEMATICS, FILTRED_THEMATIC, SAVE_EXPERIENCES_BY_THEMATIC } from '../actions/thematic';

export const initialState = {
  thematicList: [],
  filtredThematicId: '',
  filtredThematicName: '',
  experiencesFiltredThematic : [],

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
    case SAVE_EXPERIENCES_BY_THEMATIC:
      return {
        ...state,
        experiencesFiltredThematic: action.list,
      };
      
    default:
    return state;
  }
};

export default reducer;
