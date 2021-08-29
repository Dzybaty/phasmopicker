import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { Button } from '@material-ui/core';

import useStyles from './styles';

import { isActiveButtonSelector } from '../../../selectors';

const EvidenceButton = ({
  evidence, handleClick, ...props
}) => {
  const css = useStyles(props);
  const { formatMessage } = useIntl();

  const isActive = useSelector((state) => isActiveButtonSelector(state, 'evidence', evidence.key));

  return (
    <Button
      className={isActive ? css.buttonSelected : css.button}
      onClick={() => handleClick(evidence.key, !isActive)}
    >
      {formatMessage({ id: evidence.localizedMessageId })}
    </Button>
  );
};

EvidenceButton.propTypes = {
  evidence: PropTypes.shape({
    key: PropTypes.string.isRequired,
    localizedMessageId: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default EvidenceButton;
