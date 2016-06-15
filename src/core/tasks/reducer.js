import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from './action-types';
import {LOCAL_STORAGE_KEY} from '../../config';
import {getLocalList} from '../../util';

export const initialState = {
  list: getLocalList()
};

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        list: [ action.payload, ...state.list ]
      };

    case DELETE_TASK:
      return {
        list: state.list.filter(task => {
          return task.key !== action.payload.key;
        })
      };

    case UPDATE_TASK:
      return {
        list: state.list.map(task => {
          return task.key === action.payload.key ? action.payload : task;
        }),
      };

    default:
      return state;
  }
}
