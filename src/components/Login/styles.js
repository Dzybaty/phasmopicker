import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette }) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100%',
    padding: '20px 0',
    background: palette.primary.main,
    color: palette.primary.contrastText,
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
