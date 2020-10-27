export const pageSelector = (state) => state.app.page;

export const selectedEvidencesSelector = (state) => state.picker.selectedEvidences;

export const ghostsSelector = (state) => state.picker.ghosts;

export const questButtonsStateSelector = (state) => state.picker.questButtons;

export const ghostNameSelector = (state) => state.picker.ghostName;

export const isActiveButtonSelector = (state, type, name) => {
  switch (type) {
    case 'evidence': {
      return state.picker.evidenceButtons[name];
    }

    case 'quest': {
      return state.picker.questButtons[name];
    }

    case 'talksToEveryOne': {
      return state.picker.talksToEveryOne;
    }

    default: {
      return false;
    }
  }
};
