import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { tasksReducer } from './tasks';


export default combineReducers({
  routing: routerReducer,
  tasks: tasksReducer
});
