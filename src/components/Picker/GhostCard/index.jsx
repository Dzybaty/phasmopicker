import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import useStyles from './styles';

const GhostCard = ({ data, selectedEvidences }) => {
  const [isOpen, setIsOpen] = useState(false);
  const css = useStyles();

  const {
    name, strength, weakness, evidences,
  } = data;

  useEffect(() => {
    setIsOpen(true);

    return (() => {
      setIsOpen(false);
    });
  }, []);

  return (
    <Fade in={isOpen} timeout={1000}>
      <Box className={css.root}>
        <Typography variant="h4" className={css.header}>{name}</Typography>
        <Typography variant="h6" color="secondary">Evidences</Typography>
        {
          evidences.map((el) => (
            <Box key={el}>
              <Typography className={selectedEvidences.includes(el) ? css.accent : ''}>{el}</Typography>
            </Box>
          ))
        }
        <Typography variant="h6">Strength</Typography>
        <Typography className={css.content}>{strength}</Typography>
        <Typography variant="h6">Weakness</Typography>
        <Typography className={css.content}>{weakness}</Typography>
      </Box>
    </Fade>
  );
};

GhostCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    evidences: PropTypes.arrayOf(PropTypes.string).isRequired,
    strength: PropTypes.string.isRequired,
    weakness: PropTypes.string.isRequired,
  }).isRequired,
  selectedEvidences: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GhostCard;
