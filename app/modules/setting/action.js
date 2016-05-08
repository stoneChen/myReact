import { SET_SETTING } from './constant';

export function setSetting (setting) {
  return {
    type: SET_SETTING,
    payload: setting
  };
}
