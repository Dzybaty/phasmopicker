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
