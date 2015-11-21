import { USER_ACTION } from './constant';
import request from 'util/request';
import log from './log';

export function fetchUsers () {
  return (dispatch) => {
    request('/api/user')
      .then(function (res) {
        log(res);
        dispatch(getList(res.data));
      });
  };
}

export function add (user) {
  return {
    type: USER_ACTION.ADD,
    payload: user
  };
}

export function del (id) {
  return {
    type: USER_ACTION.DEL,
    payload: { id }
  };
}

export function update (user) {
  return {
    type: USER_ACTION.UPDATE,
    payload: user
  };
}

export function getList (users) {

  return {
    type: USER_ACTION.GET_LIST,
    payload: users
  };
}
