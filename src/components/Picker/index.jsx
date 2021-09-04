import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import EVIDENCES from '../../data/evidences';
import QUESTS from '../../data/quests';

import { pickerStateSelector, sessionIdSelector, sessionKeySelector } from '../../selectors';

import {
  updateGhostName, filterGhosts, updateSelectedQuests,
  resetPicker, updateAnswersEveryoneButton, resetSession as resetSessionAction, setPickerState,
} from '../../actions';

import CustomButton from './Buttons/CustomButton';
import EvidenceButton from './Buttons/EvidenceButton';
import GhostCard from './GhostCard';
import QuestButton from './Buttons/QuestButton';

import firebaseDataService from '../../services/firebaseData';
import { analytics } from '../../firebase';

import useStyles from './styles';

const Picker = () => {
  const dispatch = useDispatch();
  const css = useStyles();
  const { formatMessage } = useIntl();

  const pickerState = useSelector((state) => pickerStateSelector(state));
  const sessionId = useSelector((state) => sessionIdSelector(state));
  const sessionKey = useSelector((state) => sessionKeySelector(state));

  useEffect(() => {
    analytics.logEvent('picker_page_view');
  }, []);

  useEffect(() => {
    const onUnload = () => {
      dispatch(resetSessionAction());
    };

    window.addEventListener('beforeunload', onUnload);

    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [dispatch]);

  useEffect(() => {
    if (sessionKey) {
      firebaseDataService.getRef().child(sessionKey).on('value', (data) => {
        dispatch(setPickerState(data.val()));
      });
    }
  }, [dispatch, sessionId, sessionKey]);

  const handleGhostNameChange = (name) => {
    dispatch(updateGhostName(name));
  };

  const handleEvidenceButtonClick = (evidence, status) => {
    dispatch(filterGhosts(evidence, status));
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
        <Box className={css.header}>
          <Typography variant="h3">{formatMessage({ id: 'picker.header' })}</Typography>
        </Box>
        <Box className={css.inputWrapper}>
          <TextField
            id="ghost-name"
            label={formatMessage({ id: 'picker.ghostName' })}
            variant="outlined"
            value={ghostName}
            onChange={(e) => handleGhostNameChange(e.target.value)}
          />
          <CustomButton
            type="talksToEveryOne"
            color="grey"
            text={formatMessage({ id: 'picker.answersEveryone' })}
            handleClick={handleAnswersEveryoneButton}
          />
          <CustomButton
            type="reset"
            color="grey"
            text={formatMessage({ id: 'picker.reset' })}
            handleClick={handleReset}
          />
        </Box>
        <Typography variant="h4">{formatMessage({ id: 'evidences' })}</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          {
            EVIDENCES.map((evidence) => (
              <EvidenceButton
                key={evidence.key}
                evidence={evidence}
                color={evidence.color}
                handleClick={handleEvidenceButtonClick}
              />
            ))
          }
        </Box>
        <Typography variant="h4">{formatMessage({ id: 'quests' })}</Typography>
        <Box className={css.evidencesButtonsWrapper}>
          {
            QUESTS.map((quest) => (
              <QuestButton
                key={quest.key}
                quest={quest}
                color="grey"
                handleClick={handleQuestButtonClick}
              />
            ))
          }
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

export default Picker;
