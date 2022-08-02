import { SAVE_ID_PROFILE, SAVE_PROFILE_DETAILS, CHANGE_FIELD_VALUE } from '../actions/profile';

export const initialState = {
  //! recup infos update ici
  profileDetails: [],
  profileId: '',
  // profilePseudo: '',
  // isOwnProfile : false,
//   updateProfile : {
//     image: '',
//     biography: '',
//     pseudo: '',
//     firstname: '',
//     lastname: '',
//     birthDate: '',
//     email: '',
//     nativeCountry: '',
//   }
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
