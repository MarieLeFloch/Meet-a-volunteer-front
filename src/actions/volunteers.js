// Récupération de la liste des volontaires
export const FETCH_VOLUNTEERS = 'FETCH_VOLUNTEERS';

// Action creator => On l'utilise au moment du dispatch()
export function fetchVolunteers() {
  return {
    type: FETCH_VOLUNTEERS,
  };
}

export const SAVE_VOLUNTEERS = 'SAVE_VOLUNTEERS';

// Action creator => On l'utilise au moment du dispatch()
export function saveVolunteers(volunteersList) {
  return {
    type: SAVE_VOLUNTEERS,
    list: volunteersList,
  };
}

export const FETCH_PROLIFICS_VOLUNTEERS = 'FETCH_PROLIFICS_VOLUNTEERS';

// Action creator => On l'utilise au moment du dispatch()
export function fetchProlificsVolunteers() {
  return {
    type: FETCH_PROLIFICS_VOLUNTEERS,
  };
}

export const SAVE_PROLIFICS_VOLUNTEERS = 'SAVE_PROLIFICS_VOLUNTEERS';

// Action creator => On l'utilise au moment du dispatch()
export function saveProlificsVolunteers(prolificsVolunteersList) {
  return {
    type: SAVE_PROLIFICS_VOLUNTEERS,
    list: prolificsVolunteersList,
  };
}