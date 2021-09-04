import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  button: {
    color: (props) => props.color,
    margin: '0 5px',
  },

  buttonSelected: {
    color: (props) => props.color,
    borderBottom: '1px solid green',
    margin: '0 5px',
  },

  buttonExcluded: {
    color: (props) => props.color,
    borderBottom: '1px solid grey',
    margin: '0 5px',
  },
});
