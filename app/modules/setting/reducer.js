import { SET_SETTING } from './constant';
import Immutable  from 'immutable';

const initState = Immutable.Map({
  ipStr: '192.168.1.105,192.168.1.200'
});

export const setting = function (state = initState, action = {}) {
  switch (action.type) {
    case SET_SETTING:
      return Immutable.Map(action.payload);

    default:
      return state;
  }
};
