import {GET_CLIENT} from '../ActionsType/ActionTypes'

export const getClient =  (id) => dispatch => {
    dispatch({type:GET_CLIENT,payload:id})
}