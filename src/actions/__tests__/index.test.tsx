import { incrementEnthusiasm, decrementEnthusiasm } from '../index';
import * as constants from '../../constants';

it('should return INCREMENT_ENTHUSIASM', () => {
  const result = incrementEnthusiasm();
  expect(result).toEqual({ type: constants.INCREMENT_ENTHUSIASM });
});

it('should return DECREMENT_ENTHUSIASM', () => {
  const result = decrementEnthusiasm();
  expect(result).toEqual({ type: constants.DECREMENT_ENTHUSIASM });
});
