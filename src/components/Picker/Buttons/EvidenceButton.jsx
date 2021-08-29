import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button } from '@material-ui/core';

import useStyles from './styles';

import { isActiveButtonSelector } from '../../../selectors';

const EvidenceButton = ({
  evidence, text, handleClick, ...props
}) => {
  const css = useStyles(props);

  const isActive = useSelector((state) => isActiveButtonSelector(state, 'evidence', evidence));

  return (
    <Button
      className={isActive ? css.buttonSelected : css.button}
      onClick={() => handleClick(evidence, !isActive)}
    >
      {text}
    </Button>
  );
};

EvidenceButton.propTypes = {
  evidence: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default EvidenceButton;
