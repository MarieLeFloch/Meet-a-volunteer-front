// Récupération de la liste des volontaires
export const SAVE_ID_PROFILE = 'SAVE_ID_PROFILE';

// Action creator => On l'utilise au moment du dispatch()
export function saveIdProfile(id) {
    return {
      type: SAVE_ID_PROFILE,
      id: id,
    };
  }  

// Récupération de la liste des volontaires
export const FETCH_PROFILE_DETAILS = 'FETCH_PROFILE_DETAILS';

// Action creator => On l'utilise au moment du dispatch()
export function fetchProfileDetails() {
  return {
    type: FETCH_PROFILE_DETAILS,
  };
}

export const SAVE_PROFILE_DETAILS = 'SAVE_PROFILE_DETAILS';

// Action creator => On l'utilise au moment du dispatch()
export function saveProfileDetails(profileDetails) {
  return {
    type: SAVE_PROFILE_DETAILS,
    infos: profileDetails,
  };
}
