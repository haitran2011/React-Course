const initialState = {
  isLoading: false,
  theme: 'light'
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_LOADING': 
      return {
        ...state,
        isLoading: true
      } 
    case 'HIDE_LOADING': 
      return {
        ...state,
        isLoading: false
      } 
    case 'SET_THEME': 
      return {
        ...state,
        theme: action.payload
      } 
    default:
        return state;
  }
}