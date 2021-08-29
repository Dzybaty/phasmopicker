import { get, remove } from 'lodash';

import {
  FILTER_GHOSTS, UPDATE_SELECTED_QUESTS,
  UPDATE_GHOST_NAME, RESET_PICKER, UPDATE_ANSWERS_EVERYONE_BUTTON,
  SET_PICKER_STATE,
} from '../actions';

import ghosts from '../data/ghosts';

import EVIDENCES from '../data/evidences';
import QUESTS from '../data/quests';

import { filterGhostsByEvidences } from '../utils';

const prepareDefaultEvidenceState = () => {
  let evidences;
  EVIDENCES.forEach((evidence) => {
    evidences = {
      ...evidences,
      [evidence.key]: false,
    };
  });

  return evidences;
};

const prepareDefaultQuestState = () => {
  let quests;
  QUESTS.forEach((quest) => {
    quests = {
      ...quests,
      [quest.key]: false,
    };
  });

  return quests;
};

const defaultState = {
  selectedEvidences: [],
  ghosts,
  evidenceButtons: prepareDefaultEvidenceState(),
  questButtons: prepareDefaultQuestState(),
  talksToEveryOne: false,
  ghostName: '',
  clients: [],
};

const picker = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_GHOSTS: {
      const { evidence, isActive } = action;
      const { selectedEvidences } = state;

      const updatedButtonsState = {
        ...state.evidenceButtons,
        [evidence]: isActive,
      };

      if (isActive) {
        selectedEvidences.push(evidence);

        const filteredGhosts = filterGhostsByEvidences(ghosts, selectedEvidences);

        return {
          ...state,
          ghosts: filteredGhosts,
          selectedEvidences,
          evidenceButtons: updatedButtonsState,
        };
      }

      remove(selectedEvidences, (el) => el === evidence);

      const filteredGhosts = filterGhostsByEvidences(ghosts, selectedEvidences);

      return {
        ...state,
        ghosts: filteredGhosts,
        selectedEvidences,
        evidenceButtons: updatedButtonsState,
      };
    }

    case UPDATE_GHOST_NAME: {
      const { name } = action;

      return {
        ...state,
        ghostName: name,
      };
    }

    case UPDATE_SELECTED_QUESTS: {
      const { quest, isActive } = action;

      return {
        ...state,
        questButtons: {
          ...state.questButtons,
          [quest]: isActive,
        },
      };
    }

    case UPDATE_ANSWERS_EVERYONE_BUTTON: {
      const { isActive } = action;

      return {
        ...state,
        talksToEveryOne: isActive,
      };
    }

    case RESET_PICKER: {
      return {
        ...defaultState,
        selectedEvidences: [],
      };
    }

    case SET_PICKER_STATE: {
      const { data } = action;
      const selectedEvidences = get(data, 'selectedEvidences', []);

      return {
        ...state,
        ...data,
        selectedEvidences,
        ghosts: filterGhostsByEvidences(ghosts, selectedEvidences),
      };
    }

    default:
      return state;
  }
};

export default picker;
