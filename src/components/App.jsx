import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  changePage, resetSession, setPickerState,
} from '../actions';

import { pageSelector, sessionIdSelector } from '../selectors';

import { resetSessionId } from '../utils';

import Picker from './Picker';
import Questions from './Questions';
import Login from './Login';

import theme from './theme';
import firebaseDataService from '../services/firebaseData';

const App = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => pageSelector(state));
  const sessionId = useSelector((state) => sessionIdSelector(state));

  useEffect(() => {
    const onAppExit = () => dispatch(resetSession());

    window.addEventListener('beforeunload', onAppExit);

    return () => {
      window.removeEventListener('beforeunload', onAppExit);
    };
  }, [dispatch, sessionId]);

  useEffect(() => {
    const syncData = (data) => {
      const value = data.val();

      if (value.sessionId === sessionId) {
        dispatch(setPickerState(value));
      }
    };

    firebaseDataService.getRef().on('child_changed', (data) => {
      syncData(data);
    });

    firebaseDataService.getRef().on('child_added', (data) => {
      syncData(data);
      firebaseDataService.getRef().off('child_added', () => {});
    });
  }, [dispatch, sessionId]);

  const handleChangePage = (newPage) => {
    dispatch(changePage(newPage));
  };

  const handleSessionReset = () => {
    resetSessionId();
    dispatch(resetSession());
  };

  const renderPage = () => {
    switch (page) {
      case 'picker':
        return (
          <Picker
            changePage={handleChangePage}
            resetSession={handleSessionReset}
          />
        );
      case 'questions':
        return <Questions changePage={handleChangePage} />;
      default:
        return (
          <Login />
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {renderPage()}
    </ThemeProvider>
  );
};

export default App;
