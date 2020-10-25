import React, { useState } from 'react';
import { remove } from 'lodash';

import { ThemeProvider } from '@material-ui/core/styles';

import Picker from './Picker';
import Questions from './Questions';

import theme from './theme';
import ghosts from '../data/ghosts';
import {
  EMF, FINGERPRINTS, TEMPERATURE,
  GHOST_WRITING, SPIRIT_BOX, GHOST_ORB,
} from '../data/evidences';

import {
  EMF as EMF_QUEST, TEMPERATURE as TEMPERATURE_QUEST,
  CRUCIFIX, EVENT, MOTION, PHOTO, SINK, SMUDGE,
} from '../data/quests';

import filterGhostsByEvidences from '../utils';

const initialButtonsState = {
  [EMF]: false,
  [FINGERPRINTS]: false,
  [TEMPERATURE]: false,
  [GHOST_WRITING]: false,
  [SPIRIT_BOX]: false,
  [GHOST_ORB]: false,
  talksToEveryOne: false,
};

const initialQuestButtonsState = {
  [SINK]: false,
  [PHOTO]: false,
  [MOTION]: false,
  [TEMPERATURE_QUEST]: false,
  [CRUCIFIX]: false,
  [EMF_QUEST]: false,
  [SMUDGE]: false,
  [EVENT]: false,
};

const App = () => {
  const [page, setPage] = useState('picker');

  const [selectedEvidences, setSelectedEvidences] = useState([]);
  const [filteredGhosts, filterGhosts] = useState(ghosts);
  const [buttons, updateButtons] = useState(initialButtonsState);
  const [questButtons, updateQuestButtons] = useState(initialQuestButtonsState);
  const [ghostName, changeGhostName] = useState('');

  const updateSelectedEvidences = (value, isActive) => {
    const currentState = selectedEvidences;
    if (isActive) {
      currentState.push(value);
      setSelectedEvidences(currentState);
      updateButtons({ ...buttons, [value]: isActive });
    } else {
      remove(currentState, (el) => el === value);
      setSelectedEvidences(currentState);
      updateButtons({ ...buttons, [value]: isActive });
    }

    const filtered = filterGhostsByEvidences(ghosts, currentState);
    filterGhosts(filtered);
  };

  const handleAnswersButton = (text, isActive) => {
    updateButtons({ ...buttons, talksToEveryOne: isActive });
  };

  const handleQuestButton = (text, isActive) => {
    updateQuestButtons({ ...questButtons, [text]: isActive });
  };

  const updateGhostName = (value) => {
    changeGhostName(value);
  };

  const resetPicker = () => {
    setSelectedEvidences([]);
    updateButtons(initialButtonsState);
    updateQuestButtons(initialQuestButtonsState);
    changeGhostName('');
    filterGhosts(ghosts);
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const renderPage = () => {
    switch (page) {
      case 'picker':
        return (
          <Picker
            changePage={changePage}
            filteredGhosts={filteredGhosts}
            selectedEvidences={selectedEvidences}
            updateSelectedEvidences={updateSelectedEvidences}
            buttonsState={buttons}
            questButtonsState={questButtons}
            ghostName={ghostName}
            updateGhostName={updateGhostName}
            handleAnswersButton={handleAnswersButton}
            handleQuestButton={handleQuestButton}
            resetPicker={resetPicker}
          />
        );
      case 'questions':
        return <Questions changePage={changePage} />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {renderPage()}
    </ThemeProvider>
  );
};

export default App;
