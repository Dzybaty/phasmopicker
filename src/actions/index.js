export const ENTER_APP = 'ENTER_APP';
export const enterApp = (page, sessionId) => ({
  type: ENTER_APP,
  page,
  sessionId,
});

export const SET_SESSION_KEY = 'SET_SESSION_KEY';
export const setSessionKey = (sessionKey) => ({
  type: SET_SESSION_KEY,
  sessionKey,
});

export const SET_CLIENT_ID = 'SET_CLIENT_ID';
export const setClientId = (clientId) => ({
  type: SET_CLIENT_ID,
  clientId,
});

export const RESET_SESSION = 'RESET_SESSION';
export const resetSession = () => ({ type: RESET_SESSION });

export const RESET_SESSION_COMPLETE = 'RESET_SESSION_COMPLETE';
export const resetSessionComplete = () => ({ type: RESET_SESSION_COMPLETE });

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const FILTER_GHOSTS = 'FILTER_GHOSTS';
export const filterGhosts = (evidence, isActive) => ({
  type: FILTER_GHOSTS,
  evidence,
  isActive,
});

export const UPDATE_SELECTED_QUESTS = 'UPDATE_SELECTED_QUESTS';
export const updateSelectedQuests = (quest, isActive) => ({
  type: UPDATE_SELECTED_QUESTS,
  quest,
  isActive,
});

export const UPDATE_GHOST_NAME = 'UPDATE_GHOST_NAME';
export const updateGhostName = (name) => ({
  type: UPDATE_GHOST_NAME,
  name,
});

export const UPDATE_ANSWERS_EVERYONE_BUTTON = 'UPDATE_ANSWERS_EVERYONE_BUTTON';
export const updateAnswersEveryoneButton = (isActive) => ({
  type: UPDATE_ANSWERS_EVERYONE_BUTTON,
  isActive,
});

export const RESET_PICKER = 'RESET_PICKER';
export const resetPicker = () => ({ type: RESET_PICKER });

export const SET_PICKER_STATE = 'SET_PICKER_STATE';
export const setPickerState = (data, key) => ({
  type: SET_PICKER_STATE,
  data,
  key,
});

export const SHOW_LOADER = 'SHOW_LOADER';
export const showLoader = () => ({ type: SHOW_LOADER });

export const HIDE_LOADER = 'HIDE_LOADER';
export const hideLoader = () => ({ type: HIDE_LOADER });
