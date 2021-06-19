import {
  EMF, FINGERPRINTS, TEMPERATURE,
  GHOST_WRITING, GHOST_ORB, SPIRIT_BOX,
} from './evidences';

const ghosts = [
  {
    name: 'Banshee',
    evidences: [EMF, FINGERPRINTS, TEMPERATURE],
    strength: 'Only targets one player at a time.',
    weakness: 'Hates the Crucifix.',
  },

  {
    name: 'Demon',
    evidences: [TEMPERATURE, GHOST_WRITING, SPIRIT_BOX],
    strength: 'Extremely aggressive.',
    weakness: 'Using right Ouija board questions does not drain sanity.',
  },

  {
    name: 'Jinn',
    evidences: [EMF, SPIRIT_BOX, GHOST_ORB],
    strength: 'Moves faster the further away you are from it.',
    weakness: 'Cutting off the location’s power supply will limit the Jinn’s speed.',
  },

  {
    name: 'Mare',
    evidences: [TEMPERATURE, SPIRIT_BOX, GHOST_ORB],
    strength: 'Attacks more frequently in the dark, tends to switch off lights.',
    weakness: 'More passive when lights are on.',
  },

  {
    name: 'Oni',
    evidences: [EMF, GHOST_WRITING, SPIRIT_BOX],
    strength: 'Extremely active and moves objects quickly.',
    weakness: 'Extreme activity with lots of players nearby makes it easy to identify.',
  },

  {
    name: 'Phantom',
    evidences: [EMF, TEMPERATURE, GHOST_ORB],
    strength: 'Looking at the Phantom will reduce your sanity.',
    weakness: 'Capturing a photo will cause it to disappear, not during a hunt.',
  },

  {
    name: 'Poltergeist',
    evidences: [FINGERPRINTS, SPIRIT_BOX, GHOST_ORB],
    strength: 'Throws multiple objects about at once.',
    weakness: 'Rooms without any stuff in to throw.',
  },

  {
    name: 'Revenant',
    evidences: [EMF, FINGERPRINTS, GHOST_WRITING],
    strength: 'Attacks anyone, regardless of sanity levels.',
    weakness: 'Moves extremely slowly when players hide.',
  },

  {
    name: 'Shade',
    evidences: [EMF, GHOST_WRITING, GHOST_ORB],
    strength: 'Minimal activity, hard to find and detect.',
    weakness: 'Does not hunt if players are in a group.',
  },

  {
    name: 'Spirit',
    evidences: [FINGERPRINTS, GHOST_WRITING, SPIRIT_BOX],
    strength: 'No strengths.',
    weakness: 'Using smudge sticks prevent hunting for a long time.',
  },

  {
    name: 'Wraith',
    evidences: [FINGERPRINTS, TEMPERATURE, SPIRIT_BOX],
    strength: 'Almost never touches the ground so it can\'t be tracked by footsteps.',
    weakness: 'Salt is toxic for Wraith.',
  },

  {
    name: 'Yurei',
    evidences: [TEMPERATURE, GHOST_WRITING, GHOST_ORB],
    strength: 'Drains player sanity especially quickly.',
    weakness: 'Smudge stick in the same room will stop the Yurei from moving.',
  },

  {
    name: 'Yokai',
    evidences: [SPIRIT_BOX, GHOST_ORB, GHOST_WRITING],
    strength: 'Talking near a Yokai will anger it and increase it\'s chance of attacking.',
    weakness: 'When hunting a Yokai can only hear voices close to it.',
  },

  {
    name: 'Hantu',
    evidences: [FINGERPRINTS, GHOST_ORB, GHOST_WRITING],
    strength: 'Moves faster in cooler areas.',
    weakness: 'Moves slower in warmer areas.',
  },
];

export default ghosts;
