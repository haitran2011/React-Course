const initialState = {
  user: null,
  role: null
}

export const meReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ME': 
      return {
        ...state,
        user: action.payload
      } 
    case 'SET_ROLE': 
      return {
        ...state,
        role: action.payload
      } 
    default:
        return state;
  }
}