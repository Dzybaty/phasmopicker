import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  button: {
    color: (props) => props.color,
    margin: '0 5px',
  },

  buttonSelected: {
    color: (props) => props.color,
    borderBottom: '2px solid red',
    margin: '0 2px',
  },
});
