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

export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function setNewMessage(receiverId, receiverPseudo) {
  return {
    type: SET_NEW_MESSAGE,
    id: receiverId,
    pseudo: receiverPseudo,
  };
}

export const CHANGE_NEW_MESSAGE_CONTENT = 'CHANGE_NEW_MESSAGE_CONTENT';

// Action creator => On l'utilise au moment du dispatch()
export function changeNewMessageContent (content) {
  return {
    type: CHANGE_NEW_MESSAGE_CONTENT,
    content: content,
  };
}

export const SAVE_NEW_MESSAGE = 'SAVE_NEW_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function saveNewMessage() {
  return {
    type: SAVE_NEW_MESSAGE,
  };
}

// ? ------------------ExperienceMessage--------------------------

export const SET_NEW_EXP_MESSAGE = 'SET_NEW_EXP_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function setNewExpMessage(receiverId, receiverPseudo) {
  return {
    type: SET_NEW_EXP_MESSAGE,
    id: receiverId,
    pseudo: receiverPseudo,
  };
}

export const CHANGE_NEW_MESSAGE_EXP_CONTENT = 'CHANGE_NEW_MESSAGE_EXP_CONTENT';

// Action creator => On l'utilise au moment du dispatch()
export function changeNewMessageExpContent(content) {
  return {
    type: CHANGE_NEW_MESSAGE_EXP_CONTENT,
    content: content,
  };
}
export const TOGGLE_SUCCESS_EXP_MESSAGE = 'TOGGLE_SUCCESS_EXPMESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function toggleExpSuccessMessage() {
  return {
    type: TOGGLE_SUCCESS_EXP_MESSAGE,
  };
}

export const SAVE_NEW_EXP_MESSAGE = 'SAVE_NEW_EXP_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function saveNewExpMessage() {
  return {
    type: SAVE_NEW_EXP_MESSAGE,
  };
}

export const TOGGLE_NEW_EXP_MESSAGE = 'TOGGLE_NEW_EXP_MESSAGE';

// Action creator => On l'utilise au moment du dispatch()
export function toggleNewExpMessage() {
  return {
    type: TOGGLE_NEW_EXP_MESSAGE,
  };
}

export const SET_RECEIVER_ID = 'SET_RECEIVER_ID';

export function setReceiverId(value) {
  return {
    type: SET_RECEIVER_ID,
    id: value,
  };
}

export const GET_ID_MESSAGE_READ = 'GET_ID_MESSAGE_READ';

export function getIdMessageRead(value) {
  return {
    type: GET_ID_MESSAGE_READ,
    id: value,
  };
}

export const SAVE_MESSAGE_AS_READ = 'SAVE_MESSAGE_AS_READ';

export function saveMessageAsRead() {
  return {
    type: SAVE_MESSAGE_AS_READ,
  };
}