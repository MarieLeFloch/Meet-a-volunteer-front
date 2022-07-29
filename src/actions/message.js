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

export const FETCH_RECEIVED_MESSAGE = 'FETCH_RECEIVED_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function fetchReceivedMessage() {
  return {
    type: FETCH_RECEIVED_MESSAGE,
  };
}

export const SAVE_RECEIVED_MESSAGE = 'SAVE_RECEIVED_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function saveReceivedMessage(messagesList) {
  return {
    type: SAVE_RECEIVED_MESSAGE,
    list: messagesList,
  };
}
