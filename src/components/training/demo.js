import {createStore} from 'redux';
import {status, sort} from './actions/index';

import myReducer from './reducers/index'
var store = createStore(myReducer);

console.log("======================= Default ====================");
console.log(store.getState())


console.log("======================= Change Status ====================");
store.dispatch(status()) 
console.log(store.getState())

console.log("======================= Change Sort ====================");
store.dispatch(sort({
    by: "Thanhphan.cf",
    value:3000
})) 
console.log(store.getState())
