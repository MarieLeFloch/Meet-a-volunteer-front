export const FETCH_COUNTRY = 'FETCH_COUNTRY';

// Action creator => On l'utilise au moment du dispatch()
export function fetchCountry() {
  return {
    type: FETCH_COUNTRY,
  };
}

export const SAVE_COUNTRY = 'SAVE_COUNTRY';

// Action creator => On l'utilise au moment du dispatch()
export function saveCountry(countries) {
  return {
    type: SAVE_COUNTRY,
    list: countries,
  };
}
