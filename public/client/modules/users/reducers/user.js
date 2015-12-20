import { USER_ACTION } from '../constants';

export default function (state = null, action = {}) {
  switch (action.type) {
    case USER_ACTION.SET_SINGLE:
      return action.payload;

    default:
      return state;
  }
};
