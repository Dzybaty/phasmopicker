import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: 200,
    padding: 20,
    '@media screen and (max-width: 570px)': {
      width: '100%',
      padding: '20px 0',
    },
  },

  content: {
    display: 'flex',
    alignItems: 'center',
  },

  accent: {
    color: 'green',
  },

  header: {
    color: 'red',
  },

  subHeader: {
    color: '#fdcf96',
  },
}));
