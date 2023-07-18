import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';

import { getEvidenceNameByKey } from '../../../utils';

import useStyles from './styles';

const GhostCard = ({ data, selectedEvidences }) => {
  const [isOpen, setIsOpen] = useState(false);
  const css = useStyles();
  const { formatMessage } = useIntl();

  const {
    name, strength, weakness, evidences, wikiURL,
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
        <Link variant="h4" href={wikiURL} target="_blank" rel="noreferrer" className={css.header}>
          {formatMessage({ id: name })}
        </Link>
        <Typography variant="h6" className={css.subHeader}>{formatMessage({ id: 'ghostCard.evidences' })}</Typography>
        {
          evidences.map((el) => (
            <Box key={el}>
              <Typography className={selectedEvidences.includes(el) ? css.accent : ''}>
                {formatMessage({ id: getEvidenceNameByKey(el) })}
              </Typography>
            </Box>
          ))
        }
        <Typography variant="h6" className={css.subHeader}>{formatMessage({ id: 'ghostCard.strength' })}</Typography>
        <Typography className={css.content}>
          {formatMessage({ id: strength }, { br: <br /> })}
        </Typography>
        <Typography variant="h6" className={css.subHeader}>{formatMessage({ id: 'ghostCard.weakness' })}</Typography>
        <Typography className={css.content}>
          {formatMessage({ id: weakness }, { br: <br /> })}
        </Typography>
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
    wikiURL: PropTypes.string.isRequired,
  }).isRequired,
  selectedEvidences: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GhostCard;
