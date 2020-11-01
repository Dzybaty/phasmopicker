import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette }) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    minHeight: '100%',
    padding: 0,
    background: palette.primary.main,
    color: palette.primary.contrastText,
    overflowX: 'hidden',
  },

  sessionControls: {
    display: 'flex',
    height: 40,
    width: '100%',
    background: 'rgba(33, 33, 33, .6)',
    justifyContent: 'flex-start',
    position: 'fixed',
    zIndex: 10,
  },

  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
  },

  pageLabel: {
    margin: '0 auto',
  },

  questionsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    '@media screen and (max-width: 880px)': {
      justifyContent: 'flex-start',
    },
  },

  columnWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '0 30px',
  },

  questionHeader: {
    color: 'red',
  },
}));
