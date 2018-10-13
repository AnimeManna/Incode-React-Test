import {GET_CLIENT} from '../ActionsType/ActionTypes'

export const getClient =  (id) => dispatch => {
    console.log('ID',id);
    dispatch({type:GET_CLIENT,payload:id})
}