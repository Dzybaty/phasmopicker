import { filter, find, difference } from 'lodash';
import { customAlphabet } from 'nanoid';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const filterGhostsByEvidences = (ghosts, evidences) => (
  filter(ghosts, (ghost) => difference(evidences, ghost.evidences).length === 0)
);

export const setSessionId = (value) => {
  cookies.set('sessionId', value, { maxAge: 28800 });
};

export const getSessionId = () => cookies.get('sessionId');

export const resetSessionId = () => cookies.remove('sessionId');

export const getSessionById = (id, objects) => (
  find(objects, (el) => el.sessionId === id) || null
);

export const generateUuid = () => {
  const nanoid = customAlphabet('0123456789', 6);
  return nanoid();
};
