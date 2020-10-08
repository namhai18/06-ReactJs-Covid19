/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
// Import reducers and state type
import covid19ViewReducer from '../Covid19View/reducer';

// Create the root reducer
const rootReducer = combineReducers({
  covid19ViewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
