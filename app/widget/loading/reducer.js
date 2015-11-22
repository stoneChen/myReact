import { SET_LOADING } from './action';

export default function (state = true, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
}
