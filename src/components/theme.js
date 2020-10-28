// import { createMuiTheme } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
  palette: {
    type: 'dark',

    primary: {
      main: grey[900],
    },

    secondary: {
      main: grey[50],
    },
  },

  overrides: {
    MuiTypography: {
      body1: {
        // fontSize: '.8vw',
        fontFamily: 'SyneMono',
        '@media screen and (max-width: 1000px)': {
          // fontSize: '3vw',
        },
      },

      h3: {
        fontFamily: 'Teko-Medium',
      },

      h4: {
        fontFamily: 'Teko-Medium',
      },

      h5: {
        fontFamily: 'Teko-Medium',
      },

      h6: {
        fontFamily: 'Teko-Medium',
      },
    },
  },
});
