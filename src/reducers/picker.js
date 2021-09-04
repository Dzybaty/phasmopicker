import { get, remove } from 'lodash';

import {
  FILTER_GHOSTS, UPDATE_SELECTED_QUESTS,
  UPDATE_GHOST_NAME, RESET_PICKER, UPDATE_ANSWERS_EVERYONE_BUTTON,
  SET_PICKER_STATE,
} from '../actions';

import { EVIDENCE_STATUS_INIT, EVIDENCE_STATUS_SELECTED, EVIDENCE_STATUS_EXCLUDED } from '../constants';

import ghosts from '../data/ghosts';

import EVIDENCES from '../data/evidences';
import QUESTS from '../data/quests';

import { filterGhostsByEvidences } from '../utils';

const prepareDefaultEvidenceState = () => {
  let evidences;
  EVIDENCES.forEach((evidence) => {
    evidences = {
      ...evidences,
      [evidence.key]: 'init',
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
  excludedEvidences: [],
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
      const { evidence, status } = action;
      const { selectedEvidences, excludedEvidences } = state;

      const updatedButtonsState = {
        ...state.evidenceButtons,
        [evidence]: status,
      };

      let filteredGhosts = [];

      if (status === EVIDENCE_STATUS_SELECTED) {
        selectedEvidences.push(evidence);

        filteredGhosts = filterGhostsByEvidences(
          ghosts, selectedEvidences, excludedEvidences,
        );
      }

      if (status === EVIDENCE_STATUS_EXCLUDED) {
        remove(selectedEvidences, (el) => el === evidence);
        excludedEvidences.push(evidence);

        filteredGhosts = filterGhostsByEvidences(
          ghosts, selectedEvidences, excludedEvidences,
        );
      }

      if (status === EVIDENCE_STATUS_INIT) {
        remove(excludedEvidences, (el) => el === evidence);

        filteredGhosts = filterGhostsByEvidences(
          ghosts, selectedEvidences, excludedEvidences,
        );
      }

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
        excludedEvidences: [],
      };
    }

    case SET_PICKER_STATE: {
      const { data } = action;
      const selectedEvidences = get(data, 'selectedEvidences', []);
      const excludedEvidences = get(data, 'excludedEvidences', []);

      return {
        ...state,
        ...data,
        selectedEvidences,
        excludedEvidences,
        ghosts: filterGhostsByEvidences(ghosts, selectedEvidences, excludedEvidences),
      };
    }

    default:
      return state;
  }
};

export default picker;
