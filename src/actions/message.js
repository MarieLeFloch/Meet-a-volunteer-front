export const TOGGLE_NEW_MESSAGE_SETTINGS = 'TOGGLE_NEW_MESSAGE_SETTINGS';

// Action creator => On l'utilise au moment du dispatch()
export function toggleNewMessageSettings() {
  return {
    type: TOGGLE_NEW_MESSAGE_SETTINGS,
  };
}

export const TOGGLE_SUCCESS_MESSAGE = 'TOGGLE_SUCCESS_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function toggleSuccessMessage() {
  return {
    type: TOGGLE_SUCCESS_MESSAGE,
  };
}
