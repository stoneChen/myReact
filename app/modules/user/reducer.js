import { USER_ACTION } from './constant';


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


export const users = function (state = null, action = {}) {
  const type = action.type;
  switch (type) {
    case USER_ACTION.SET_LIST:
      return action.payload;

    case USER_ACTION.CLEAR:
      return null;

    case USER_ACTION.ADD:
      const newId = Date.now();
      return [
        Object.assign(action.payload, {id: newId}),
        ...state
      ];

    case USER_ACTION.DEL:
      return state.filter(user =>
        user.id !== action.payload.id
      );

    case USER_ACTION.UPDATE:
      return state.map(user =>
          user.id === action.payload.id ?
            Object.assign({}, user, action.payload) :
            user
      );

    default:
      return state;
  }
};

export const user = function (state = null, action = {}) {
  switch (action.type) {
    case USER_ACTION.SET_SINGLE:
      return action.payload;

    default:
      return state;
  }
};
