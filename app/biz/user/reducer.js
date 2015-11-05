import { USER_ACTION } from './constant'

const initState = [
  {
    id: 111,
    name: 'Tom',
    age: 20
  },
  {
    id: 222,
    name: 'John',
    age: 30
  }
]
export default function (state = initState, action = {}) {
  const type = action.type
  switch (type) {
    case USER_ACTION.ADD:
      const newId = Date.now()
      return [
        Object.assign(action.payload, { id: newId }),
        ...state
      ]

    case USER_ACTION.DEL:
      return state.filter( user =>
        user.id !== action.payload.id
      )

    case USER_ACTION.UPDATE:
      return state.map( user =>
          user.id === action.payload.id ?
            Object.assign({}, user, action.payload):
            user
      )

    default:
      return state
  }
}
