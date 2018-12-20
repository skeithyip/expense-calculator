import {
  findById,
  findAll,
  getSummary,
  Props,
  State
} from '../expenseSelector';

it('should find by id', () => {
  const state: State = {
    byId: {
      uuid1: { uuid: 'uuid1', name: 'nameA', amount: 0, dateAdded: new Date() }
    },
    allIds: []
  };
  const props: Props = { uuid: 'uuid1' };
  const result = findById(state, props);

  expect(result).toBe(state.byId.uuid1);
});

it('should find all', () => {
  const state: State = {
    byId: {
      uuid1: { uuid: 'uuid1', name: 'nameA', amount: 0, dateAdded: new Date() },
      uuid2: { uuid: 'uuid2', name: 'nameB', amount: 10, dateAdded: new Date() }
    },
    allIds: ['uuid1', 'uuid2']
  };
  const result = findAll(state);

  expect(result).toEqual([state.byId.uuid1, state.byId.uuid2]);
});

it('should get summary', () => {
  const state: State = {
    byId: {
      uuid1: { uuid: 'uuid1', name: 'nameA', amount: 0, dateAdded: new Date() },
      uuid2: { uuid: 'uuid2', name: 'nameB', amount: 10, dateAdded: new Date() }
    },
    allIds: ['uuid1', 'uuid2']
  };
  const result = getSummary(state);

  expect(result).toEqual({ annually: 10, monthly: 0 });
});
