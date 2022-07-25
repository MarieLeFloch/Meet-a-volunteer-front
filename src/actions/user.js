// Actions : va contenir les action type et action creator
// action type : la chaine de caractère liée à l'action
// action creator : lie l'action type à une modification
// Intérêt : clareté, eviter les fautes de frappes
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

// Action creator => On l'utilise au moment du dispatch()
export function toggleSetting() {
  return {
    type: TOGGLE_SETTINGS,
  };
}
