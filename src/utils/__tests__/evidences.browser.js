import { getEvidenceNameByKey } from '../index';
import EVIDENCES, { EMF } from '../../data/evidences';

describe('getEvidenceNameByKey', () => {
  it('should return correct evidence localized id by evidence key', () => {
    const evidence = getEvidenceNameByKey(EMF);

    expect(evidence).toEqual(EVIDENCES[0].localizedMessageId);
  });

  it('should return undefined if no evidence found', () => {
    const evidence = getEvidenceNameByKey();

    expect(evidence).toBeUndefined();
  });
});
