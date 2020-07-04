import { actionTypes } from './actionTypes';

export default (state, action) => {
  switch (action.type) {
    case actionTypes.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case actionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(t => t.id !== action.payload),
      };
    default:
      return state;
  }
};
