import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  button: {
    color: (props) => props.color,
    borderBottom: '1px solid transparent',
    margin: '0 5px',
  },

  buttonSelected: {
    color: (props) => props.color,
    borderBottom: '1px solid green',
    margin: '0 5px',
  },

  buttonExcluded: {
    color: (props) => props.color,
    textDecoration: 'line-through',
    borderBottom: '1px solid transparent',
    margin: '0 5px',
    '&:hover': {
      textDecoration: 'line-through',
    },
  },

  buttonHint: {
    padding: '4px 8px',
    fontSize: '.9rem',
    maxWidth: 500,
  },
});
