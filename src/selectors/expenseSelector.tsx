import { createSelector } from 'reselect';

import { Payload } from '../actions/expenseActions';
import { GenericStoreState } from '../types/index';

// typing selector state seems so wrong from unit test perspective
// is this the reason why people ended up just doing integration testing?
export type State = GenericStoreState<Payload>;
export type Props = { uuid: string };

const byId = (state: State) => state.byId;
const allIds = (state: State) => state.allIds;
const getUuid = (_: any, props: Props) => props.uuid;

export const findById = createSelector(
  [byId, getUuid],
  (byId, uuid) => byId[uuid]
);

export const findAll = createSelector(
  [byId, allIds],
  (byId, allIds) => allIds.map(uuid => byId[uuid])
);

// need to be updated again
export const getSummary = createSelector(
  [byId, allIds],
  (byId, allids) => {
    const annually: number = allids.reduce((acc, e) => {
      return acc + byId[e].amount;
    }, 0);

    const monthly: number = 0;

    return { annually, monthly };
  }
);
