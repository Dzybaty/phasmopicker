import { filter, difference } from 'lodash';

const filterGhostsByEvidences = (ghosts, evidences) => (
  filter(ghosts, (ghost) => difference(evidences, ghost.evidences).length === 0)
);

export default filterGhostsByEvidences;
