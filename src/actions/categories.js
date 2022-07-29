export const FETCH_VOLUNTEERING_TYPE = 'FETCH_VOLUNTEERING_TYPE';

export function fetchVolunteeringType() {
  return {
    type: FETCH_VOLUNTEERING_TYPE,
  };
}

export const SAVE_VOLUNTEERING_TYPE = 'SAVE_VOLUNTEERING_TYPE';

export function saveVolunteeringType(value) {
  return {
    type: SAVE_VOLUNTEERING_TYPE,
    value: value,
  };
}

export const FETCH_RECEPTION_STRUCTURE = 'FETCH_RECEPTION_STRUCTURE';

export function fetchReceptionStructure() {
  return {
    type: FETCH_RECEPTION_STRUCTURE,
  };
}

export const SAVE_RECEPTION_STRUCTURE = 'SAVE_RECEPTION_STRUCTURE';

export function saveReceptionStructure(value) {
  return {
    type: SAVE_RECEPTION_STRUCTURE,
    value: value,
  };
}

