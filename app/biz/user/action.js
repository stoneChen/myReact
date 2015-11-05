import { USER_ACTION } from './constant'

export function add (user) {
  return {
    type: USER_ACTION.ADD,
    payload: user
  }
}

export function del (id) {
  return {
    type: USER_ACTION.DEL,
    payload: { id }
  }
}

export function update (user) {
  return {
    type: USER_ACTION.UPDATE,
    payload: user
  }
}
