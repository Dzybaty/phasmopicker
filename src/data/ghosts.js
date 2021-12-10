import {
  EMF, FINGERPRINTS, TEMPERATURE, DOTS,
  GHOST_WRITING, GHOST_ORB, SPIRIT_BOX,
} from './evidences';

const ghosts = [
  {
    name: 'ghost.banshee.name',
    evidences: [FINGERPRINTS, GHOST_ORB, DOTS],
    strength: 'ghost.banshee.strength',
    weakness: 'ghost.banshee.weakness',
  },
  {
    name: 'ghost.demon.name',
    evidences: [FINGERPRINTS, GHOST_WRITING, TEMPERATURE],
    strength: 'ghost.demon.strength',
    weakness: 'ghost.demon.weakness',
  },
  {
    name: 'ghost.jinn.name',
    evidences: [EMF, FINGERPRINTS, TEMPERATURE],
    strength: 'ghost.jinn.strength',
    weakness: 'ghost.jinn.weakness',
  },
  {
    name: 'ghost.mare.name',
    evidences: [SPIRIT_BOX, GHOST_ORB, GHOST_WRITING],
    strength: 'ghost.mare.strength',
    weakness: 'ghost.mare.weakness',
  },
  {
    name: 'ghost.oni.name',
    evidences: [EMF, TEMPERATURE, DOTS],
    strength: 'ghost.oni.strength',
    weakness: 'ghost.oni.weakness',
  },
  {
    name: 'ghost.phantom.name',
    evidences: [SPIRIT_BOX, FINGERPRINTS, DOTS],
    strength: 'ghost.phantom.strength',
    weakness: 'ghost.phantom.weakness',
  },
  {
    name: 'ghost.poltergeist.name',
    evidences: [SPIRIT_BOX, FINGERPRINTS, GHOST_WRITING],
    strength: 'ghost.poltergeist.strength',
    weakness: 'ghost.poltergeist.weakness',
  },
  {
    name: 'ghost.revenant.name',
    evidences: [GHOST_ORB, GHOST_WRITING, TEMPERATURE],
    strength: 'ghost.revenant.strength',
    weakness: 'ghost.revenant.weakness',
  },
  {
    name: 'ghost.shade.name',
    evidences: [EMF, GHOST_WRITING, TEMPERATURE],
    strength: 'ghost.shade.strength',
    weakness: 'ghost.shade.weakness',
  },
  {
    name: 'ghost.spirit.name',
    evidences: [EMF, SPIRIT_BOX, GHOST_WRITING],
    strength: 'ghost.spirit.strength',
    weakness: 'ghost.spirit.weakness',
  },
  {
    name: 'ghost.wraith.name',
    evidences: [EMF, SPIRIT_BOX, DOTS],
    strength: 'ghost.wraith.strength',
    weakness: 'ghost.wraith.weakness',
  },
  {
    name: 'ghost.yurei.name',
    evidences: [GHOST_ORB, TEMPERATURE, DOTS],
    strength: 'ghost.yurei.strength',
    weakness: 'ghost.yurei.weakness',
  },
  {
    name: 'ghost.yokai.name',
    evidences: [SPIRIT_BOX, GHOST_ORB, DOTS],
    strength: 'ghost.yokai.strength',
    weakness: 'ghost.yokai.weakness',
  },
  {
    name: 'ghost.hantu.name',
    evidences: [FINGERPRINTS, GHOST_ORB, TEMPERATURE],
    strength: 'ghost.hantu.strength',
    weakness: 'ghost.hantu.weakness',
  },
  {
    name: 'ghost.goryo.name',
    evidences: [EMF, FINGERPRINTS, DOTS],
    strength: 'ghost.goryo.strength',
    weakness: 'ghost.goryo.weakness',
  },
  {
    name: 'ghost.myling.name',
    evidences: [EMF, FINGERPRINTS, GHOST_WRITING],
    strength: 'ghost.myling.strength',
    weakness: 'ghost.myling.weakness',
  },

  {
    name: 'ghost.onryo.name',
    evidences: [SPIRIT_BOX, GHOST_ORB, TEMPERATURE],
    strength: 'ghost.onryo.strength',
    weakness: 'ghost.onryo.weakness',
  },
  {
    name: 'ghost.twins.name',
    evidences: [EMF, SPIRIT_BOX, TEMPERATURE],
    strength: 'ghost.twins.strength',
    weakness: 'ghost.twins.weakness',
  },
  {
    name: 'ghost.obake.name',
    evidences: [EMF, FINGERPRINTS, GHOST_ORB],
    strength: 'ghost.obake.strength',
    weakness: 'ghost.obake.weakness',
  },
  {
    name: 'ghost.raiju.name',
    evidences: [EMF, GHOST_ORB, DOTS],
    strength: 'ghost.raiju.strength',
    weakness: 'ghost.raiju.weakness',
  },
  {
    name: 'ghost.mimic.name',
    evidences: [SPIRIT_BOX, FINGERPRINTS, TEMPERATURE],
    strength: 'ghost.mimic.strength',
    weakness: 'ghost.mimic.weakness',
  },
];

export default ghosts;
