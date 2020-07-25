import * as types from '../constants/ActionType';

var initState = false;

var myReducer = (state=initState , action) =>{
    if(action.type === types.status){
        state = !state;
    } 
    return state;
}


export default myReducer;