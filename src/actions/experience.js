export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

// Action creator => On l'utilise au moment du dispatch()
export function changeFieldValue(value, field) {
  return {
    type: CHANGE_FIELD_VALUE,
    /*
      EQUIVAUT A
      value: value,
      field: field,
    */
    value: value,
    field: field,
  };
}

export const FETCH_EXPERIENCES_HOME = 'FETCH_EXPERIENCES_HOME';

// Action creator => On l'utilise au moment du dispatch()
export function fetchExperiencesHome() {
  return {
    type: FETCH_EXPERIENCES_HOME,
  };
}

export const SAVE_EXPERIENCES_HOME = 'SAVE_EXPERIENCES_HOME';

// Action creator => On l'utilise au moment du dispatch()
export function saveExperiencesHome(experienceList) {
  return {
    type: SAVE_EXPERIENCES_HOME,
    list: experienceList,
  };
}


export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';

export function addExperience() {
  return {
    type: ADD_EXPERIENCE,
  };
}
