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
    name: 'Demon',
    evidences: [FINGERPRINTS, GHOST_WRITING, TEMPERATURE],
    strength: 'Extremely aggressive.',
    weakness: 'Using right Ouija board questions does not drain sanity.',
  },

  {
    name: 'Jinn',
    evidences: [EMF, FINGERPRINTS, TEMPERATURE],
    strength: 'Moves faster the further away you are from it.',
    weakness: 'Cutting off the location’s power supply will limit the Jinn’s speed.',
  },

  {
    name: 'Mare',
    evidences: [SPIRIT_BOX, GHOST_ORB, GHOST_WRITING],
    strength: 'Attacks more frequently in the dark, tends to switch off lights.',
    weakness: 'More passive when lights are on.',
  },

  {
    name: 'Oni',
    evidences: [EMF, TEMPERATURE, DOTS],
    strength: 'Extremely active and moves objects quickly.',
    weakness: 'Extreme activity with lots of players nearby makes it easy to identify.',
  },

  {
    name: 'Phantom',
    evidences: [SPIRIT_BOX, FINGERPRINTS, DOTS],
    strength: 'Looking at the Phantom will reduce your sanity.',
    weakness: 'Capturing a photo will cause it to disappear, not during a hunt.',
  },

  {
    name: 'Poltergeist',
    evidences: [SPIRIT_BOX, FINGERPRINTS, GHOST_WRITING],
    strength: 'Throws multiple objects about at once.',
    weakness: 'Rooms without any stuff in to throw.',
  },

  {
    name: 'Revenant',
    evidences: [GHOST_ORB, GHOST_WRITING, TEMPERATURE],
    strength: 'Attacks anyone, regardless of sanity levels.',
    weakness: 'Moves extremely slowly when players hide.',
  },

  {
    name: 'Shade',
    evidences: [EMF, GHOST_WRITING, TEMPERATURE],
    strength: 'Minimal activity, hard to find and detect.',
    weakness: 'Does not hunt if players are in a group.',
  },

  {
    name: 'Spirit',
    evidences: [EMF, SPIRIT_BOX, GHOST_WRITING],
    strength: 'No strengths.',
    weakness: 'Using smudge sticks prevent hunting for a long time.',
  },

  {
    name: 'Wraith',
    evidences: [EMF, SPIRIT_BOX, DOTS],
    strength: 'Almost never touches the ground so it can\'t be tracked by footsteps.',
    weakness: 'Salt is toxic for Wraith.',
  },

  {
    name: 'Yurei',
    evidences: [GHOST_ORB, TEMPERATURE, DOTS],
    strength: 'Drains player sanity especially quickly.',
    weakness: 'Smudge stick in the same room will stop the Yurei from moving.',
  },

  {
    name: 'Yokai',
    evidences: [SPIRIT_BOX, GHOST_ORB, DOTS],
    strength: 'Talking near a Yokai will anger it and increase it\'s chance of attacking.',
    weakness: 'When hunting a Yokai can only hear voices close to it.',
  },

  {
    name: 'Hantu',
    evidences: [FINGERPRINTS, GHOST_ORB, TEMPERATURE],
    strength: 'Moves faster in cooler areas.',
    weakness: 'Moves slower in warmer areas.',
  },

  {
    name: 'Goryo',
    evidences: [EMF, FINGERPRINTS, DOTS],
    strength: 'Shows itself on camera only if there are no people nearby.',
    weakness: 'Rarely seen for from it\'s place of death.',
  },

  {
    name: 'Myling',
    evidences: [EMF, FINGERPRINTS, GHOST_WRITING],
    strength: 'A Myling is known to be quieter when hunting.',
    weakness: 'More frequently makes paranormal sounds.',
  },
];

export default ghosts;
