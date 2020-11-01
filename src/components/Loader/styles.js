import { makeStyles } from '@material-ui/core';

export default makeStyles({
  active: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    zIndex: 20,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },

  disabled: {
    display: 'none',
  },
});
