import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  changePage, resetSession, setPickerState,
} from '../actions';

import { pageSelector, sessionIdSelector, sessionKeySelector } from '../selectors';

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
  const sessionKey = useSelector((state) => sessionKeySelector(state));

  useEffect(() => {
    const onAppExit = () => {
      dispatch(resetSession());
      return 'unloading';
    };

    window.addEventListener('beforeunload', onAppExit);

    return () => {
      window.removeEventListener('beforeunload', onAppExit);
    };
  }, [dispatch, sessionId]);

  useEffect(() => {
    if (sessionKey) {
      firebaseDataService.getRef().child(sessionKey).on('value', (data) => {
        dispatch(setPickerState(data.val()));
      });
    }
  }, [dispatch, sessionId, sessionKey]);

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
