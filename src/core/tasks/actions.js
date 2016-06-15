import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from './action-types';
import {LOCAL_STORAGE_KEY} from '../../config';
import {getLocalList, setLocalList} from '../../util';

function addToList(task){
  let list = getLocalList();
  list.unshift(task);
  setLocalList(list);
}

function deleteFromList(task){
  let newList = getLocalList().filter(function(item){
    return item.key!==task.key;
  });
  setLocalList(newList);
}

function updateList(task, changes){
  let list = getLocalList();
  let index = list.findIndex(function(item) {
    return item.key === task.key;
  });
  let newtask = list[index];
  if(typeof changes.title !=='undefined'){
    newtask.title = changes.title;
  }else{
    newtask.completed = changes.completed;
  }

  list.splice(index, 1, newtask);
  setLocalList(list);
  return newtask;
}

export function createTask(title) {
  return dispatch => {
    let task = {
      key: new Date().getTime().toString(),
      title,
      completed: false
    };
    addToList(task);
    dispatch({
      type: CREATE_TASK,
      payload: task
    });
  }
}

export function deleteTask(task) {
  return dispatch => {
    deleteFromList(task);
    dispatch({
      type: DELETE_TASK,
      payload: task
    });
  }
}

export function updateTask(task, changes) {
  return dispatch => {
    dispatch({
      type: UPDATE_TASK,
      payload: updateList(task, changes)
    });
  }
}

