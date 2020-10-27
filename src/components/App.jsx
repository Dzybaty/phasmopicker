import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import { changePage } from '../actions';
import { pageSelector } from '../selectors';

import Picker from './Picker';
import Questions from './Questions';

import theme from './theme';

const App = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => pageSelector(state));

  const handleChangePage = (newPage) => {
    dispatch(changePage(newPage));
  };

  const renderPage = () => {
    switch (page) {
      case 'picker':
        return (
          <Picker changePage={handleChangePage} />
        );
      case 'questions':
        return <Questions changePage={handleChangePage} />;
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
