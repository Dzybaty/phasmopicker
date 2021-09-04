import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { Button } from '@material-ui/core';

import { EVIDENCE_STATUS_INIT, EVIDENCE_STATUS_SELECTED, EVIDENCE_STATUS_EXCLUDED } from '../../../constants';
import { buttonStatusSelector } from '../../../selectors';

import useStyles from './styles';

const EvidenceButton = ({
  evidence, handleClick, ...props
}) => {
  const css = useStyles(props);
  const { formatMessage } = useIntl();

  const currentEvidenceState = useSelector((state) => buttonStatusSelector(state, 'evidence', evidence.key));

  const [evidenceState, setEvidenceState] = useState(currentEvidenceState);
  const [buttonStyle, setButtonStyle] = useState(css.button);

  useEffect(() => {
    setEvidenceState(currentEvidenceState);
    switch (currentEvidenceState) {
      case EVIDENCE_STATUS_INIT: {
        setButtonStyle(css.button);
        break;
      }
      case EVIDENCE_STATUS_SELECTED: {
        setButtonStyle(css.buttonSelected);
        break;
      }
      case EVIDENCE_STATUS_EXCLUDED: {
        setButtonStyle(css.buttonExcluded);
        break;
      }
      default: {
        setButtonStyle(css.button);
      }
    }
  }, [currentEvidenceState, css]);

  const handleButton = () => {
    switch (evidenceState) {
      case EVIDENCE_STATUS_INIT: {
        setEvidenceState(EVIDENCE_STATUS_SELECTED);
        setButtonStyle(css.buttonSelected);
        handleClick(evidence.key, EVIDENCE_STATUS_SELECTED);
        break;
      }
      case EVIDENCE_STATUS_SELECTED: {
        setEvidenceState(EVIDENCE_STATUS_EXCLUDED);
        setButtonStyle(css.buttonExcluded);
        handleClick(evidence.key, EVIDENCE_STATUS_EXCLUDED);
        break;
      }
      case EVIDENCE_STATUS_EXCLUDED: {
        setEvidenceState(EVIDENCE_STATUS_INIT);
        setButtonStyle(css.button);
        handleClick(evidence.key, EVIDENCE_STATUS_INIT);
        break;
      }
      default: break;
    }
  };

  return (
    <Button
      className={buttonStyle}
      onClick={handleButton}
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
