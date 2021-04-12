import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  changePage, resetSession,
} from '../actions';

import { pageSelector } from '../selectors';

import { resetSessionId } from '../utils';

import Picker from './Picker';
import Questions from './Questions';
import Login from './Login';

import theme from './theme';

const App = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => pageSelector(state));

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
