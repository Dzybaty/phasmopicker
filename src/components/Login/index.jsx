import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { enterApp } from '../../actions';
import { setSessionId } from '../../utils';

import useStyles from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const css = useStyles();

  const [sessionId, changeSessionId] = useState('');
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (value.length > 8) {
      setError('Value is too long (max 8)');
      return false;
    }

    return true;
  };

  const handleSessionIdChange = (value) => {
    setError(null);
    changeSessionId(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const sessionIdNormalized = sessionId.replace(' ', '');

    if (validate(sessionIdNormalized)) {
      dispatch(enterApp('picker', sessionIdNormalized));
      setSessionId(sessionIdNormalized);
    }
  };

  return (
    <Box className={css.wrapper}>
      <Typography variant="h5">Enter your session id</Typography>
      <Typography>Or leave it blank if you are playing solo.</Typography>
      <form className={css.inputWrapper} noValidate autoComplete="off">
        <TextField
          id="sessionID"
          label="Session ID"
          variant="outlined"
          value={sessionId}
          error={!!error}
          helperText={error}
          onChange={(e) => handleSessionIdChange(e.target.value)}
        />
        <Button className={css.submitButton} type="submit" onClick={handleClick}>Go</Button>
      </form>
    </Box>
  );
};

export default Login;
