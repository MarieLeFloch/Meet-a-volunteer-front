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

export const FETCH_EXPERIENCES_BY_ID = 'FETCH_EXPERIENCES_BY_ID';

export function fetchExperienceById() {
  return {
    type: FETCH_EXPERIENCES_BY_ID,
  };
}

export const SAVE_EXPERIENCE_ID = 'SAVE_EXPERIENCE_ID';

export function saveExperienceId(value) {
  return {
    type: SAVE_EXPERIENCE_ID,
    value: value,
  };
}

export const SAVE_EXPERIENCE_DATA = 'SAVE_EXPERIENCE_DATA';

export function saveExperienceData(value) {
  return {
    type: SAVE_EXPERIENCE_DATA,
    value: value,
  };
}

export const SAVE_EXPERIENCE_THEMATICS = 'SAVE_EXPERIENCE_THEMATICS';

export function saveExperienceThematics(value) {
  return {
    type: SAVE_EXPERIENCE_THEMATICS,
    value: value,
  };
}

export const SAVE_EXPERIENCE_USER = 'SAVE_EXPERIENCE_USER';

export function saveExperienceUser(value) {
  return {
    type: SAVE_EXPERIENCE_USER,
    value: value,
  };
}

export const SAVE_EXPERIENCE_STRUCTURE = 'SAVE_EXPERIENCE_STRUCTURE';

export function saveExperienceStructure(value) {
  return {
    type: SAVE_EXPERIENCE_STRUCTURE,
    value: value,
  };
}

export const SAVE_EXPERIENCE_VOLUNTEERING = 'SAVE_EXPERIENCE_VOLUNTEERING';

export function saveExperienceVolunteering(value) {
  return {
    type: SAVE_EXPERIENCE_VOLUNTEERING,
    value: value,
  };
}