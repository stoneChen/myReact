import { USER_ACTION } from './constant';
import Immutable  from 'immutable';

//const initState = [
//  {
//    id: 111,
//    name: 'Tom',
//    age: 20
//  },
//  {
//    id: 222,
//    name: 'John',
//    age: 30
//  }
//];


export const users = function (state = Immutable.List([]), action = {}) {
  const type = action.type;
  switch (type) {
    case USER_ACTION.SET_LIST:
      return state.merge(action.payload);

    case USER_ACTION.CLEAR:
      return state.clear();

    case USER_ACTION.ADD:
      const newId = Date.now();
      return state.push(Object.assign(action.payload, { id: newId }));

    case USER_ACTION.DEL:
      return state.filter(user =>
        user.toJS().id !== action.payload.id
      );

    case USER_ACTION.UPDATE:
      return state.map(user =>
        user.toJS().id === action.payload.id ?
          Object.assign({}, user, action.payload) :
          user
      );

    default:
      return state;
  }
};

export const user = function (state = Immutable.Map({}), action = {}) {
  switch (action.type) {
    case USER_ACTION.SET_SINGLE:
      return Immutable.Map(action.payload);

    default:
      return state;
  }
};
