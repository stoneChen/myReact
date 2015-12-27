import { COMFIRM_SHOW, COMFIRM_HIDE } from './action';

export default function (state = { show: false }, action = {}) {
  switch (action.type) {
    case COMFIRM_SHOW:
      return Object.assign({
        show: true,
        onConfirm: () => {
        },
        onCancel: () => {
        }
      }, action.payload);
    case COMFIRM_HIDE:
      return action.payload;
    default:
      return state;
  }
}
