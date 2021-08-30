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
    padding: 20,
  },

  toolWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  toolHeader: {
    width: '100%',
    textAlign: 'center',
    color: '#fdcf96',
  },

  toolContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    '@media screen and (max-width: 880px)': {
      justifyContent: 'flex-start',
    },
  },

  categoryTitle: {
    color: 'red',
  },

  categoryWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
}));
