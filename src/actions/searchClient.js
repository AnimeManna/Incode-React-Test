import {SEARCH_CLIENT} from "../actionsType/ActionTypes";

export const searchClient = (search) => dispatch =>{
    dispatch({type:SEARCH_CLIENT,payload:search})
}