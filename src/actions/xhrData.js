import {dataClients} from '../api/dataClients'

import {
    XHR_CLIENTS_START,
    XHR_CLIENTS_SUCCESS,
    XHR_CLIENTS_ERROR
} from '../ActionsType/ActionTypes'

export const xhrData = () => async dispatch => {
    dispatch({type:XHR_CLIENTS_START});
    try{
        const clients = await dataClients();
        clients.map((value,key)=>{
            value.id=key+1;        // добавляем id каждому пользователю
            return{
                ...value,
                ...value.id
            }
        });
        dispatch({type:XHR_CLIENTS_SUCCESS, payload:clients})

    }catch (error){
        dispatch({
            type:XHR_CLIENTS_ERROR,
            payload:error,
            error:true
        })

    }
}