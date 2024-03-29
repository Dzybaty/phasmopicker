export const pageSelector = (state) => state.app.page;

export const sessionIdSelector = (state) => state.app.sessionId;

export const sessionKeySelector = (state) => state.app.sessionKey;

export const clientIdSelector = (state) => state.app.clientId;

export const selectedEvidencesSelector = (state) => state.picker.selectedEvidences;

export const questButtonsStateSelector = (state) => state.picker.questButtons;

export const clientsSelector = (state) => state.picker.clients;

export const buttonStatusSelector = (state, type, name) => {
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

export const loaderStateSelector = (state) => state.loader;

export const pickerStateSelector = (state) => state.picker;

export const currentLangSelector = (state) => state.app.lang;
