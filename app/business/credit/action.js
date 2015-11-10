import { CREDIT_ACTION } from './constant';

export function add (credit) {
  return {
    type: CREDIT_ACTION.ADD,
    payload: credit
  };
}

export function del (id) {
  return {
    type: CREDIT_ACTION.DEL,
    payload: { id }
  };
}

export function update (credit) {
  return {
    type: CREDIT_ACTION.UPDATE,
    payload: credit
  };
}

export function getList () {

  return {
    type: CREDIT_ACTION.GET_LIST
  };
}
