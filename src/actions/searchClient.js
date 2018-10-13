import {SEARCH_CLIENT} from "../actionsType/ActionTypes";

export const searchClient = (search) => dispatch =>{
    console.log(search)
    dispatch({type:SEARCH_CLIENT,payload:search})
}