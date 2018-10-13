import {
    XHR_CLIENTS_SUCCESS,
} from "../ActionsType/ActionTypes";

const initialState={
    clients:[

    ]
}


export default (state=initialState, action) =>{
    switch (action.type){
        case XHR_CLIENTS_SUCCESS:{
            return{
                ...state,
                clients:[
                    ...action.payload
                ]
            }
        }
        default:{
            return state
        }
    }
}