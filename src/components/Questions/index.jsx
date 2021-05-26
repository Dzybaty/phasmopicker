import React from 'react';

import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import questions from '../../data/questions.json';

import useStyles from './styles';

const Questions = () => {
  const css = useStyles();

  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
      <Box className={css.wrapper}>
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

export default Questions;
