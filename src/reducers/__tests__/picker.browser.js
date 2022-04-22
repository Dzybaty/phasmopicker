import picker from '../picker';
import {
  filterGhosts,
  updateGhostName,
  updateSelectedQuests,
  updateAnswersEveryoneButton,
  resetPicker,
  setPickerState,
} from '../../actions';

import {
  EVIDENCE_STATUS_SELECTED,
  EVIDENCE_STATUS_EXCLUDED,
  EVIDENCE_STATUS_INIT,
} from '../../constants';

import { EMF, TEMPERATURE } from '../../data/evidences';

jest.mock('../../data/ghosts', () => [
  {
    name: 'Test Ghost 1',
    evidences: ['EMF'],
  },
  {
    name: 'Test Ghost 2',
    evidences: ['TEMPERATURE'],
  },
  {
    name: 'Test Ghost 3',
    evidences: ['EMF', 'TEMPERATURE'],
  },
]);

let updatedState;
let defaultState;

beforeEach(() => {
  defaultState = { selectedEvidences: [], excludedEvidences: [] };
});

describe('Picker reducer', () => {
  it('should generate initial state', () => {
    expect(picker(undefined, {})).toMatchInlineSnapshot(`
      Object {
        "clients": Array [],
        "evidenceButtons": Object {
          "DOTS": "init",
          "EMF": "init",
          "FINGERPRINTS": "init",
          "GHOST_ORB": "init",
          "GHOST_WRITING": "init",
          "SPIRIT_BOX": "init",
          "TEMPERATURE": "init",
        },
        "excludedEvidences": Array [],
        "ghostName": "",
        "ghosts": Array [
          Object {
            "evidences": Array [
              "EMF",
            ],
            "name": "Test Ghost 1",
          },
          Object {
            "evidences": Array [
              "TEMPERATURE",
            ],
            "name": "Test Ghost 2",
          },
          Object {
            "evidences": Array [
              "EMF",
              "TEMPERATURE",
            ],
            "name": "Test Ghost 3",
          },
        ],
        "questButtons": Object {
          "CANDLE": false,
          "CRUCIFIX": false,
          "EMF": false,
          "EVENT": false,
          "HUNT": false,
          "MOTION": false,
          "PHOTO": false,
          "REPEL": false,
          "SALT": false,
          "SANITY": false,
          "SMUDGE": false,
          "TEMPERATURE": false,
        },
        "selectedEvidences": Array [],
        "talksToEveryOne": false,
      }
    `);
  });
});

describe('FILTER_GHOSTS action', () => {
  it('should filter ghosts by evidence selection', () => {
    updatedState = picker(defaultState, filterGhosts(EMF, EVIDENCE_STATUS_SELECTED));
    expect(updatedState.ghosts).toHaveLength(2);
    expect(updatedState.ghosts[0].name).toEqual('Test Ghost 1');
    expect(updatedState.ghosts[1].name).toEqual('Test Ghost 3');
    expect(updatedState.selectedEvidences).toEqual([EMF]);
    expect(updatedState.evidenceButtons.EMF).toEqual(EVIDENCE_STATUS_SELECTED);

    updatedState = picker(updatedState, filterGhosts(TEMPERATURE, EVIDENCE_STATUS_SELECTED));
    expect(updatedState.ghosts).toHaveLength(1);
    expect(updatedState.ghosts[0].name).toEqual('Test Ghost 3');
    expect(updatedState.selectedEvidences).toEqual([EMF, TEMPERATURE]);
    expect(updatedState.evidenceButtons.EMF).toEqual(EVIDENCE_STATUS_SELECTED);
    expect(updatedState.evidenceButtons.TEMPERATURE).toEqual(
      EVIDENCE_STATUS_SELECTED,
    );
  });

  it('should filter ghosts by evidence exclusion', () => {
    updatedState = picker(defaultState, filterGhosts(EMF, EVIDENCE_STATUS_EXCLUDED));
    expect(updatedState.ghosts).toHaveLength(1);
    expect(updatedState.ghosts[0].name).toEqual('Test Ghost 2');
    expect(updatedState.excludedEvidences).toEqual([EMF]);
    expect(updatedState.evidenceButtons.EMF).toEqual(EVIDENCE_STATUS_EXCLUDED);

    updatedState = picker(updatedState, filterGhosts(TEMPERATURE, EVIDENCE_STATUS_EXCLUDED));
    expect(updatedState.ghosts).toHaveLength(0);
    expect(updatedState.excludedEvidences).toEqual([EMF, TEMPERATURE]);
    expect(updatedState.evidenceButtons.EMF).toEqual(EVIDENCE_STATUS_EXCLUDED);
    expect(updatedState.evidenceButtons.TEMPERATURE).toEqual(
      EVIDENCE_STATUS_EXCLUDED,
    );
  });

  it('should filter ghosts by evidence reset', () => {
    updatedState = picker(defaultState, filterGhosts(EMF, EVIDENCE_STATUS_EXCLUDED));
    expect(updatedState.ghosts).toHaveLength(1);
    expect(updatedState.ghosts[0].name).toEqual('Test Ghost 2');
    expect(updatedState.excludedEvidences).toEqual([EMF]);
    expect(updatedState.evidenceButtons.EMF).toEqual(EVIDENCE_STATUS_EXCLUDED);

    updatedState = picker(updatedState, filterGhosts(EMF, EVIDENCE_STATUS_INIT));
    expect(updatedState.ghosts).toHaveLength(3);
    expect(updatedState.excludedEvidences).toEqual([]);
    expect(updatedState.selectedEvidences).toEqual([]);
    expect(updatedState.evidenceButtons.EMF).toEqual(EVIDENCE_STATUS_INIT);
  });
});

describe('UPDATE_GHOST_NAME', () => {
  it('should update ghost name', () => {
    updatedState = picker(defaultState, updateGhostName('test-name'));
    expect(updatedState.ghostName).toEqual('test-name');
  });
});

describe('UPDATE_SELECTED_QUESTS', () => {
  it('should update a quest', () => {
    updatedState = picker(defaultState, updateSelectedQuests('CANDLE', true));
    expect(updatedState.questButtons.CANDLE).toEqual(true);

    updatedState = picker(updatedState, updateSelectedQuests('CANDLE', false));
    expect(updatedState.questButtons.CANDLE).toEqual(false);
  });
});

describe('UPDATE_ANSWERS_EVERYONE_BUTTON', () => {
  it('should update a answers button', () => {
    updatedState = picker(defaultState, updateAnswersEveryoneButton(true));
    expect(updatedState.talksToEveryOne).toEqual(true);

    updatedState = picker(defaultState, updateAnswersEveryoneButton(false));
    expect(updatedState.talksToEveryOne).toEqual(false);
  });
});

describe('RESET_PICKER', () => {
  it('reset the state', () => {
    updatedState = picker(defaultState, updateAnswersEveryoneButton(true));
    updatedState = picker(updatedState, updateGhostName('test-name'));
    expect(updatedState.talksToEveryOne).toEqual(true);
    expect(updatedState.ghostName).toEqual('test-name');

    updatedState = picker(updatedState, resetPicker());
    expect(updatedState.selectedEvidences).toEqual([]);
    expect(updatedState.excludedEvidences).toEqual([]);
    expect(updatedState.talksToEveryOne).toEqual(false);
    expect(updatedState.ghostName).toEqual('');
  });
});

describe('SET_PICKER_STATE', () => {
  it('update the state and filter ghosts', () => {
    const newData = {
      selectedEvidences: [EMF],
      excludedEvidences: [TEMPERATURE],
      ghostName: 'test-name',
    };

    updatedState = picker(defaultState, setPickerState(newData));

    expect(updatedState.selectedEvidences).toEqual(newData.selectedEvidences);
    expect(updatedState.excludedEvidences).toEqual(newData.excludedEvidences);
    expect(updatedState.ghostName).toEqual(newData.ghostName);
    expect(updatedState.ghosts).toHaveLength(1);
    expect(updatedState.ghosts[0].name).toEqual('Test Ghost 1');
  });
});
