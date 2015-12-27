import { LOADING_SHOW, LOADING_HIDE } from './action';

export default function (state = { show: false }, action = {}) {
  switch (action.type) {
    case LOADING_SHOW:
      return {
        show: true
      };
    case LOADING_HIDE:
      return {
        show: false
      };
    default:
      return state;
  }
}
