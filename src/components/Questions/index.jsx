import React, { useCallback, useEffect } from 'react';
import { useIntl } from 'react-intl';

import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import QUESTIONS from '../../data/questions';
import { analytics } from '../../firebase';

import useStyles from './styles';

const Questions = () => {
  const css = useStyles();
  const { formatMessage } = useIntl();

  useEffect(() => {
    analytics.logEvent('page_view', {
      page_title: 'Questions',
    });
  }, []);

  const renderCategory = useCallback((block) => (
    <Box className={css.categoryWrapper} key={block.category}>
      <Typography variant="h6" className={css.categoryTitle}>{formatMessage({ id: block.category })}</Typography>
      {
          block.questions.map((q) => (
            <Typography key={q}>{formatMessage({ id: q })}</Typography>
          ))
        }
    </Box>
  ), [formatMessage, css]);

  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
      <Fade in timeout={1000}>
        <Box className={css.wrapper}>
          <Box className={css.header}>
            <Typography variant="h3" className={css.pageLabel}>{formatMessage({ id: 'questions' })}</Typography>
          </Box>
          <Box className={css.questionsWrapper}>
            <Box className={css.toolWrapper}>
              <Typography className={css.toolHeader} variant="h4">
                {formatMessage({ id: 'question.radio' })}
              </Typography>
              <Box className={css.toolContent}>
                {
                  QUESTIONS.SPIRIT_BOX.map((block) => renderCategory(block))
                }
              </Box>
            </Box>
            <Box className={css.toolWrapper}>
              <Typography className={css.toolHeader} variant="h4">
                {formatMessage({ id: 'question.ouija' })}
              </Typography>
              <Box className={css.toolContent}>
                {
                  QUESTIONS.OUIJA_BOARD.map((block) => renderCategory(block))
                }
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Slide>
  );
};

export default Questions;
