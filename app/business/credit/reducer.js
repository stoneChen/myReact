import { CREDIT_ACTION } from './constant';

const initState = [
  {
    id: 111,
    limit: 10000,
    expiredDate: '2016-12-31'
  },
  {
    id: 222,
    limit: 20000,
    expiredDate: '2017-12-31'
  },
  {
    id: 333,
    limit: 30000,
    expiredDate: '2018-10-31'
  }
];

export default function (state = initState, action = {}) {
  const type = action.type;
  switch (type) {
    case CREDIT_ACTION.GET_LIST:
      return action.payload;

    case CREDIT_ACTION.ADD:
      const newId = Date.now();
      return [
        Object.assign(action.payload, { id: newId }),
        ...state
      ];

    case CREDIT_ACTION.DEL:
      return state.filter( credit =>
        credit.id !== action.payload.id
      );

    case CREDIT_ACTION.UPDATE:
      return state.map( credit =>
          credit.id === action.payload.id ?
            Object.assign({}, credit, action.payload):
            credit
      );

    default:
      return state;
  }
}

