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
  },

  inputWrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 20px',
    flexWrap: 'wrap',
  },

  evidencesButtonsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px px',
    flexWrap: 'wrap',
    margin: '5px 0',
  },

  ghostsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '0 50px',
  },

  noEvidenceWrapper: {
    padding: 50,
  },

  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
  },
}));
