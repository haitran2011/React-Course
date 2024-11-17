import { combineReducers, createStore } from "redux";
import { appReducer } from "./app.reducer";
import { meReducer } from "./me.reducer";

const reducers = combineReducers({
  app: appReducer,
  me: meReducer
})

export const stores = createStore(reducers);


/* store
state = {
  app: {
    isLoading: false,
    theme: 'light'
  },
  me: {
    user: null,
    role: null
  }
}

get theme: useSelector(state => state.app.theme)
*/