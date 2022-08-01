import { SAVE_ID_PROFILE, SAVE_PROFILE_DETAILS } from '../actions/profile';

export const initialState = {
  profileDetails: [],
  profileId: '',
  // profilePseudo: '',
  // isOwnProfile : false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ID_PROFILE:
        return {
          ...state,
          profileId: action.id,
        };
  
    case SAVE_PROFILE_DETAILS:
      return {
        ...state,
        profileDetails: action.infos,
      };

    default:
    return state;
  }
};

export default reducer;
