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
