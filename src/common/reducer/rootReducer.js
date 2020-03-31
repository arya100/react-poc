import { combineReducers } from 'redux';
import globalapiReducer from './globalapiReducer';
import testReducer from './testRenducer';

const rootReducer = combineReducers({
  
    globalapiReducer,
    testReducer
   
});

export default rootReducer;

