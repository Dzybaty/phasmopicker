import { difference, filter } from 'lodash';
import { customAlphabet } from 'nanoid';
import moment from 'moment';

export const filterGhostsByEvidences = (ghosts, evidences) => (
  filter(ghosts, (ghost) => difference(evidences, ghost.evidences).length === 0)
);

export const generateUuid = () => {
  const nanoid = customAlphabet('0123456789', 6);
  return nanoid();
};

export const generateTimestamp = () => moment.utc().format();

export const isDevEnv = () => process.env.REACT_APP_ENV === 'dev';
