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

  const handleSessionIdChange = (value) => {
    changeSessionId(value);
  };

  const handleClick = () => {
    dispatch(enterApp('picker', sessionId));
    setSessionId(sessionId);
  };

  return (
    <Box className={css.wrapper}>
      <Typography variant="h5">Enter your session id here:</Typography>
      <Typography>Or leave it blank if you are playing solo.</Typography>
      <Box className={css.inputWrapper}>
        <TextField
          id="sessionID"
          label="Session ID"
          variant="outlined"
          value={sessionId}
          onChange={(e) => handleSessionIdChange(e.target.value)}
        />
      </Box>
      <Button onClick={handleClick}>Go</Button>
    </Box>
  );
};

export default Login;
