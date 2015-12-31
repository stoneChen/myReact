export const COMFIRM_SHOW = 'COMFIRM_SHOW';
export const COMFIRM_HIDE = 'COMFIRM_HIDE';

export const showConfirm = function (payload) {
  return {
    type: COMFIRM_SHOW,
    payload: payload
  };
};

export const hideConfirm = function (payload) {
  return {
    type: COMFIRM_HIDE,
    payload: payload
  };
};
