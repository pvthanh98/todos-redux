import * as types from '../constants/ActionType';
export const listAll = () => {
    return { type: types.LIST_ALL }
}

export const onSaveTask = (task) => {
    return { 
        type: types.SAVE_TASK,
        task 
    }
}

export const OPEN_FORM = ()=>{
    return {
        type: types.OPEN_FORM
    }
}

export const closeForm = ()=>{
    return {
        type: types.CLOSE_FORM
    }
}


export const updateSatus = (task_id) => {
    return {
        type : types.UPDATE_STATUS,
        task_id
    }
}

export const deleteItem = (task_id) => {
    return {
        type : types.DELETE_TASK_ITEM,
        task_id
    }
}

export const editTask = (task) => {
    return {
        type : types.EDIT_TASk,
        task
    }
}