import {combineReducers} from 'redux';
import reducer from './createSlice';

const rootReducer = combineReducers({
  auth: reducer,
});

export default rootReducer;
