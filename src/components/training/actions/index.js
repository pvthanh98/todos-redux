import * as types from '../constants/ActionType';
export const status = () => {
    return { type: types.status }
}

export const sort = (sort) => {
    return {
        type: types.sort,
        sort:sort
    }
}