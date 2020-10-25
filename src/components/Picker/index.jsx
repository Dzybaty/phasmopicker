import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Slide from '@material-ui/core/Slide';

import {
  EMF, FINGERPRINTS, TEMPERATURE,
  GHOST_WRITING, SPIRIT_BOX, GHOST_ORB,
} from '../../data/evidences';

import {
  EMF as EMF_QUEST, TEMPERATURE as TEMPERATURE_QUEST,
  CRUCIFIX, EVENT, MOTION, PHOTO, SINK, SMUDGE,
} from '../../data/quests';

import EvidenceButton from './EvidenceButton';
import GhostCard from './GhostCard';

import useStyles from './styles';

const Picker = ({
  changePage, updateGhostName, updateSelectedEvidences, handleAnswersButton,
  selectedEvidences, ghostName, filteredGhosts, buttonsState, resetPicker,
  handleQuestButton, questButtonsState,
}) => {
  const css = useStyles();

  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Box className={css.wrapper}>
        <Box className={css.changePageButtonWrapper}>
          <Typography variant="h3" className={css.pageLabel}>Ghost Picker</Typography>
          <IconButton onClick={() => changePage('questions')} className={css.icon}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Box className={css.inputWrapper}>
          <TextField
            id="ghost-name"
            label="Ghost Name"
            variant="outlined"
            value={ghostName}
            onChange={(e) => updateGhostName(e.target.value)}
          />
          <EvidenceButton color="grey" text="Answers everyone" isActive={buttonsState.talksToEveryOne} handleClick={handleAnswersButton} />
          <EvidenceButton color="grey" text="Reset" isActive={false} handleClick={resetPicker} />
        </Box>
        <Typography variant="h4">Evidences</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          <EvidenceButton color="red" text={EMF} isActive={buttonsState[EMF]} handleClick={updateSelectedEvidences} />
          <EvidenceButton color="green" text={FINGERPRINTS} isActive={buttonsState[FINGERPRINTS]} handleClick={updateSelectedEvidences} />
          <EvidenceButton color="blue" text={TEMPERATURE} isActive={buttonsState[TEMPERATURE]} handleClick={updateSelectedEvidences} />
          <EvidenceButton color="purple" text={GHOST_WRITING} isActive={buttonsState[GHOST_WRITING]} handleClick={updateSelectedEvidences} />
          <EvidenceButton color="grey" text={SPIRIT_BOX} isActive={buttonsState[SPIRIT_BOX]} handleClick={updateSelectedEvidences} />
          <EvidenceButton color="brown" text={GHOST_ORB} isActive={buttonsState[GHOST_ORB]} handleClick={updateSelectedEvidences} />
        </Box>
        <Typography variant="h4">Quests</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          <EvidenceButton color="grey" text={CRUCIFIX} isActive={questButtonsState[CRUCIFIX]} handleClick={handleQuestButton} />
          <EvidenceButton color="grey" text={EVENT} isActive={questButtonsState[EVENT]} handleClick={handleQuestButton} />
          <EvidenceButton color="grey" text={MOTION} isActive={questButtonsState[MOTION]} handleClick={handleQuestButton} />
          <EvidenceButton color="grey" text={PHOTO} isActive={questButtonsState[PHOTO]} handleClick={handleQuestButton} />
          <EvidenceButton color="grey" text={EMF_QUEST} isActive={questButtonsState[EMF_QUEST]} handleClick={handleQuestButton} />
          <EvidenceButton color="grey" text={SINK} isActive={questButtonsState[SINK]} handleClick={handleQuestButton} />
          <EvidenceButton color="grey" text={SMUDGE} isActive={questButtonsState[SMUDGE]} handleClick={handleQuestButton} />
          <EvidenceButton color="grey" text={TEMPERATURE_QUEST} isActive={questButtonsState[TEMPERATURE_QUEST]} handleClick={handleQuestButton} />
        </Box>
        <Box className={css.ghostsWrapper}>
          {
            filteredGhosts.map((ghost) => (
              <GhostCard data={ghost} key={ghost.name} selectedEvidences={selectedEvidences} />
            ))
          }
          {
            isEmpty(filteredGhosts) ? (
              <Box className={css.noEvidenceWrapper}>
                <Typography variant="h6">
                  No ghosts with such combination of evidences
                </Typography>
              </Box>
            ) : null
          }
        </Box>
      </Box>
    </Slide>
  );
};

Picker.propTypes = {
  ghostName: PropTypes.string.isRequired,
  selectedEvidences: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredGhosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  buttonsState: PropTypes.shape({ talksToEveryOne: PropTypes.bool }).isRequired,
  questButtonsState: PropTypes.shape({ talksToEveryOne: PropTypes.bool }).isRequired,
  updateGhostName: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  handleAnswersButton: PropTypes.func.isRequired,
  handleQuestButton: PropTypes.func.isRequired,
  updateSelectedEvidences: PropTypes.func.isRequired,
  resetPicker: PropTypes.func.isRequired,
};

export default Picker;
