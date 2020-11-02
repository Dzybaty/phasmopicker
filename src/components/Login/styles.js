import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette }) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100%',
    background: palette.primary.main,
    color: palette.primary.contrastText,
  },

  subWrapper: {
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 10,
  },

  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 20px 10px 20px',
  },

  submitButton: {
    marginTop: 5,
  },
}));
