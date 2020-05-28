const reducer = (state, action) => {
  const exists = state.ticket.find((item) => item.cod_pro === action.payload.cod_pro);
  switch (action.type) {
    case 'SET_PRODUCTOS':
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case 'ADD_PRODUCTOS':
      return exists ? state : {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case 'SET_TICKET':
      return exists ? state : {
        ...state,
        ticket: [...state.ticket, action.payload],
      };
    case 'DELETE_TICKET':
      return {
        ...state,
        ticket: state.ticket.filter(items => items.cod_pro !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;