import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { IntlProvider } from 'react-intl';

import {
  changePage, resetSession,
} from '../actions';

import langEN from '../translations/en.json';
import langRU from '../translations/ru.json';

import { pageSelector, currentLangSelector } from '../selectors';

import { resetSessionId } from '../utils';

import Header from './Header';
import Picker from './Picker';
import Questions from './Questions';
import Login from './Login';

import theme from './theme';

const App = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => pageSelector(state));
  const lang = useSelector((state) => currentLangSelector(state));

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
          <>
            <Header resetSession={handleSessionReset} />
            <Picker
              changePage={handleChangePage}
              resetSession={handleSessionReset}
            />
          </>
        );
      case 'questions':
        return (
          <>
            <Header resetSession={handleSessionReset} />
            <Questions changePage={handleChangePage} />
          </>
        );
      default:
        return (
          <Login />
        );
    }
  };

  const setUpMessagesLocale = () => {
    switch (lang) {
      case 'en': {
        return langEN;
      }

      case 'ru': {
        return langRU;
      }

      default: {
        return langEN;
      }
    }
  };

  return (
    <IntlProvider messages={setUpMessagesLocale()} locale="en" defaultLocale="en">
      <ThemeProvider theme={theme}>
        {renderPage()}
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
