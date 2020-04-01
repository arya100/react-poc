import { combineReducers } from 'redux';
import globalapiReducer from './globalapiReducer';
import testReducer from './testRenducer';

const rootReducer = combineReducers({
  
    user: globalapiReducer,
    test: testReducer
   
});

export default rootReducer;

