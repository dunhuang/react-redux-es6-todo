import {LOCAL_STORAGE_KEY} from './config';
export function getLocalList(){
  let list = [];
  try{
    list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  }
  catch(e){
  }
  return list;
}

export function setLocalList(list){
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
}