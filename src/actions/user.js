// Actions : va contenir les action type et action creator
// action type : la chaine de caractère liée à l'action
// action creator : lie l'action type à une modification
// Intérêt : clareté, eviter les fautes de frappes
export const TOGGLE_SETTINGS_LOGIN = 'TOGGLE_SETTINGS_LOGIN';

// Action creator => On l'utilise au moment du dispatch()
export function toggleSettingLogin() {
  return {
    type: TOGGLE_SETTINGS_LOGIN,
  };
}

// Action pour le composant Signin
export const TOGGLE_SETTINGS_SIGNIN = 'TOGGLE_SETTINGS_SIGNIN';

// Action creator => On l'utilise au moment du dispatch()
export function toggleSettingSignin() {
  return {
    type: TOGGLE_SETTINGS_SIGNIN,
  };
}
