import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
  EMF, FINGERPRINTS, TEMPERATURE,
  GHOST_WRITING, SPIRIT_BOX, GHOST_ORB,
} from '../../data/evidences';

import {
  EMF as EMF_QUEST, TEMPERATURE as TEMPERATURE_QUEST,
  CRUCIFIX, EVENT, MOTION, PHOTO, SINK, SMUDGE,
} from '../../data/quests';

import { pickerStateSelector, sessionIdSelector } from '../../selectors';

import {
  updateGhostName, filterGhosts, updateSelectedQuests,
  resetPicker, updateAnswersEveryoneButton, setPickerState,
} from '../../actions';

import firebaseDataService from '../../services/firebaseData';

import CustomButton from './Buttons/CustomButton';
import GhostCard from './GhostCard';

import useStyles from './styles';

const Picker = ({ changePage, resetSession }) => {
  const dispatch = useDispatch();
  const css = useStyles();

  const pickerState = useSelector((state) => pickerStateSelector(state));
  const sessionId = useSelector((state) => sessionIdSelector(state));

  useEffect(() => {
    firebaseDataService.getRef().on('child_changed', (data) => {
      dispatch(setPickerState(data.val()));
    });
  }, [dispatch]);

  const handleGhostNameChange = (name) => {
    dispatch(updateGhostName(name));
  };

  const handleEvidenceButtonClick = (evidence, isActive) => {
    dispatch(filterGhosts(evidence, isActive));
  };

  const handleQuestButtonClick = (quest, isActive) => {
    dispatch(updateSelectedQuests(quest, isActive));
  };

  const handleAnswersEveryoneButton = (text, isActive) => {
    dispatch(updateAnswersEveryoneButton(isActive));
  };

  const handleReset = () => {
    dispatch(resetPicker());
  };

  const { ghostName, ghosts, selectedEvidences } = pickerState;

  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Box className={css.wrapper}>
        <Box className={css.sessionControls}>
          {
            sessionId !== '' && (
              <Box className={css.sessionIdWrapper}>
                <Typography>{`Session id: ${sessionId}`}</Typography>
              </Box>
            )
          }
          <Tooltip title="Exit room">
            <IconButton onClick={() => resetSession()}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="To questions">
            <IconButton onClick={() => changePage('questions')}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={css.header}>
          <Typography variant="h3">Ghost Picker</Typography>
        </Box>
        <Box className={css.inputWrapper}>
          <TextField
            id="ghost-name"
            label="Ghost Name"
            variant="outlined"
            value={ghostName}
            onChange={(e) => handleGhostNameChange(e.target.value)}
          />
          <CustomButton type="talksToEveryOne" color="grey" text="Answers everyone" handleClick={handleAnswersEveryoneButton} />
          <CustomButton type="reset" color="grey" text="Reset" handleClick={handleReset} />
        </Box>
        <Typography variant="h4">Evidences</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          <CustomButton type="evidence" color="red" text={EMF} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="green" text={FINGERPRINTS} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="blue" text={TEMPERATURE} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="purple" text={GHOST_WRITING} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="grey" text={SPIRIT_BOX} handleClick={handleEvidenceButtonClick} />
          <CustomButton type="evidence" color="brown" text={GHOST_ORB} handleClick={handleEvidenceButtonClick} />
        </Box>
        <Typography variant="h4">Quests</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          <CustomButton type="quest" color="grey" text={CRUCIFIX} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={EVENT} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={MOTION} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={PHOTO} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={EMF_QUEST} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={SINK} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={SMUDGE} handleClick={handleQuestButtonClick} />
          <CustomButton type="quest" color="grey" text={TEMPERATURE_QUEST} handleClick={handleQuestButtonClick} />
        </Box>
        <Box className={css.ghostsWrapper}>
          {
            ghosts.map((ghost) => (
              <GhostCard data={ghost} key={ghost.name} selectedEvidences={selectedEvidences} />
            ))
          }
          {
            isEmpty(ghosts) ? (
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
  changePage: PropTypes.func.isRequired,
  resetSession: PropTypes.func.isRequired,
};

export default Picker;
