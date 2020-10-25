import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: 200,
    padding: 20,
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
}));
