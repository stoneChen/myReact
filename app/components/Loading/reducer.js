import { LOADING_SHOW, LOADING_HIDE } from './action';
import Immutable from 'immutable';

const initialState = Immutable.Map({ show: false });

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_SHOW:
      return state.set('show', true);
    case LOADING_HIDE:
      return state.set('show', false);
    default:
      return state;
  }
}
