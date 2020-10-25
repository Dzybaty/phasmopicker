import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import useStyles from './styles';

const EvidenceButton = ({
  text, handleClick, isActive, ...props
}) => {
  const css = useStyles(props);

  return (
    <Button
      className={isActive ? css.buttonSelected : css.button}
      onClick={() => handleClick(text, !isActive)}
    >
      {text}
    </Button>
  );
};

EvidenceButton.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
};

EvidenceButton.defaultProps = {
  handleClick: () => null,
};

export default EvidenceButton;
