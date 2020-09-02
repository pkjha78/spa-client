import { applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import configReducer from './reducers/config';

const rootReducer = combineReducers ({
  config: configReducer
});

let store = {};
store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
