import { filterGhostsByEvidences, generateUuid, getSessionById } from '../index';
import ghosts from '../../data/ghosts';
import {
  EMF, FINGERPRINTS, TEMPERATURE, GHOST_WRITING,
} from '../../data/evidences';

describe('filterGhostsByEvidences', () => {
  it('should correctly filter ghosts by evidences', () => {
    const selectedEvidences = [FINGERPRINTS, EMF, TEMPERATURE];
    const excludedEvidences = [FINGERPRINTS, EMF, TEMPERATURE, GHOST_WRITING];

    expect(filterGhostsByEvidences(ghosts, selectedEvidences, [])).toHaveLength(1);
    expect(filterGhostsByEvidences(ghosts, [], excludedEvidences)).toHaveLength(1);
  });
});

describe('generateUuid', () => {
  it('should return uuid numeric id with length of 6', () => {
    const id = generateUuid();
    expect(id).toMatch(/^[0-9]{6}$/);
  });
});

describe('getSessionById', () => {
  it('should return session if exists', () => {
    let session;
    const testSessionId = 'test-session-id';
    const mockedSessions = {
      testSession: {
        sessionId: testSessionId,
      },
    };

    session = getSessionById(testSessionId, mockedSessions);
    expect(session).toEqual(mockedSessions.testSession);

    session = getSessionById('non-existing-session', mockedSessions);
    expect(session).toBeNull();
  });
});
