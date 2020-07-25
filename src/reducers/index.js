import { combineReducers } from 'redux';
import tasks from './tasks';
import isOpenForm from './openForm';
import editItem from './editItem'
const myReducer = combineReducers({
   tasks,
   isOpenForm,
   editItem
})

export default myReducer;