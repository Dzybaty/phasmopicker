import { makeStyles } from '@material-ui/core';

export default makeStyles({
  header: {
    display: 'flex',
    height: 40,
    width: '100%',
    background: 'rgba(33, 33, 33, .6)',
    justifyContent: 'space-between',
    position: 'fixed',
    zIndex: 10,
    color: 'white',
  },

  navWrapper: {
    display: 'flex',
    flexWrap: 'nowrap',
  },

  sessionWrapper: {
    display: 'flex',
    flexWrap: 'nowrap',
  },

  sessionIdWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
  },
});
