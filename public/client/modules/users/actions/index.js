import { USER_ACTION } from '../constants';
import request from 'util/request';
import log from '../log';

export function asyncGetList () {
  return (dispatch) => {
    request('/api/user')
      .then(function (res) {
        log('fetch user res:', res);
        dispatch(setList(res.data));
      });
  };
}

export function asyncGetItem (id) {
  return (dispatch) => {
    return request(`/api/user/${id}`)
      .then(function (res) {
        log('fetch one user res:', res);
        dispatch(setItem(res.data));
      });
  };
}

export function asyncUpdate (user) {
  return () => {
    return request.patch(`/api/user/${user.id}`, user);
  };
}

export function setItem (user) {
  return {
    type: USER_ACTION.SET_SINGLE,
    payload: user
  };
}

export function clear () {
  return {
    type: USER_ACTION.CLEAR,
    payload: null
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

export function setList (users) {

  return {
    type: USER_ACTION.SET_LIST,
    payload: users
  };
}
