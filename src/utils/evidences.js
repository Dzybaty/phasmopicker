import EVIDENCES from '../data/evidences';

// eslint-disable-next-line import/prefer-default-export
export const getEvidenceNameByKey = (key) => {
  const evidence = EVIDENCES.find((e) => e.key === key);
  if (evidence) {
    return evidence.localizedMessageId;
  }

  return undefined;
};
