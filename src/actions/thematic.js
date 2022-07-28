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

// Filtre des expériences par thématique
export const FILTRED_THEMATIC = 'FILTRED_THEMATIC';

// Action creator => On l'utilise au moment du dispatch()
export function filtredThematic(thematicId, thematicName) {
  return {
    type: FILTRED_THEMATIC,
    id: thematicId,
    name: thematicName,
  };
}

// Récupération des expériences par thématique
export const FETCH_EXPERIENCES_BY_THEMATIC = 'FETCH_EXPERIENCES_BY_THEMATIC';

// Action creator => On l'utilise au moment du dispatch()
export function fetchExperiencesByThematic() {
  return {
    type: FETCH_EXPERIENCES_BY_THEMATIC,
  };
}

// Sauvegarde des expériences par thématique
export const SAVE_EXPERIENCES_BY_THEMATIC = 'SAVE_EXPERIENCES_BY_THEMATIC';

// Action creator => On l'utilise au moment du dispatch()
export function saveExperiencesByThematic(experienceList) {
  return {
    type: SAVE_EXPERIENCES_BY_THEMATIC,
    list: experienceList,
  };
}