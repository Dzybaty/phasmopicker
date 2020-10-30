import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  changePage, enterApp,
  resetSession,
} from '../actions';

import { pageSelector } from '../selectors';

import { getSessionId, resetSessionId } from '../utils';

import Picker from './Picker';
import Questions from './Questions';
import Login from './Login';

import theme from './theme';

const App = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => pageSelector(state));

  useEffect(() => {
    const sessionId = getSessionId();

    if (sessionId) {
      dispatch(enterApp('picker', sessionId));
    }
  }, [dispatch]);

  useEffect(() => {
    const onAppExit = () => dispatch(resetSession());

    window.addEventListener('beforeunload', onAppExit);

    return () => {
      window.removeEventListener('beforeunload', onAppExit);
    };
  }, [dispatch]);

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
