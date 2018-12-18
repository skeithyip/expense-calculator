import { enthusiasm } from '../index';
import * as constants from '../../constants';

it('should render initial state', () => {
  // @ts-ignore
  const result = enthusiasm(undefined, { type: '@@init' });
  expect(result).toEqual({ languageName: 'TypeScript', enthusiasmLevel: 1 });
});

it('should handle INCREMENT_ENTHUSIASM', () => {
  // @ts-ignore
  const initialState = enthusiasm(undefined, { type: '@@init' });
  const result = enthusiasm(initialState, {
    type: constants.INCREMENT_ENTHUSIASM
  });
  expect(result).toEqual({ languageName: 'TypeScript', enthusiasmLevel: 2 });
});

it('should handle DECREMENT_ENTHUSIASM', () => {
  // @ts-ignore
  const initialState = enthusiasm(undefined, { type: '@@init' });
  const result = enthusiasm(initialState, {
    type: constants.DECREMENT_ENTHUSIASM
  });
  expect(result).toEqual({ languageName: 'TypeScript', enthusiasmLevel: 1 });
});
