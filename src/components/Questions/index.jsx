import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from './styles';

import questions from '../../data/questions.json';

const Questions = ({ changePage }) => {
  const css = useStyles();

  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
      <Box className={css.wrapper}>
        <Box className={css.sessionControls}>
          <Tooltip title="To Picker">
            <IconButton onClick={() => changePage('picker')}>
              <ArrowBackIosIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={css.header}>
          <Typography variant="h3" className={css.pageLabel}>Questions</Typography>
        </Box>
        <Box className={css.questionsWrapper}>
          {
            Object.keys(questions).map((key) => (
              <Fade in timeout={1000} key={key}>
                <Box className={css.columnWrapper} key={key}>
                  <Typography variant="h4" className={css.questionHeader} key={key}>{key}</Typography>
                  {
                    questions[key].map((el) => (
                      <Typography key={el}>{el}</Typography>
                    ))
                  }
                </Box>
              </Fade>
            ))
          }
        </Box>
      </Box>
    </Slide>
  );
};

Questions.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Questions;
