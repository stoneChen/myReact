import { COMFIRM_SHOW, COMFIRM_HIDE } from './action';
import Immutable from 'immutable';
const initialState = Immutable.Map({
  show: false,
  onConfirm: () => {},
  onCancel: () => {},
});

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case COMFIRM_SHOW:
      return state.merge({ show: true }, action.payload);

    case COMFIRM_HIDE:
      return state.set('show', false);

    default:
      return state;
  }
}
