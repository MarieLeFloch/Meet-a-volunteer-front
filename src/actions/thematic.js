// Récupération de la liste des thématiques
export const FETCH_THEMATICS = 'FETCH_THEMATICS';

// Action creator => On l'utilise au moment du dispatch()
export function fetchThematics() {
  return {
    type: FETCH_THEMATICS,
  };
}

// Sauvegarde de la liste des thématiques dans le state
export const SAVE_THEMATICS = 'SAVE_THEMATICS';

// Action creator => On l'utilise au moment du dispatch()
export function saveThematics(thematicList) {
  return {
    type: SAVE_THEMATICS,
    list: thematicList,
  };
}
