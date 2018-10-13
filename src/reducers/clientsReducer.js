import {
    XHR_CLIENTS_SUCCESS,
    GET_CLIENT
} from "../ActionsType/ActionTypes";

const initialState={
    clients:[

    ],
    user:{

    }
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
        case GET_CLIENT:{
            console.log('REDUUUUCER',action.payload);
            let someClient = state.clients.find((value)=>{
                return (value.id===action.payload)
            })
            console.log('SOME CLIENTS',someClient)
            return{
                ...state,
                user:{
                    ...someClient
                }
            }
        }
        default:{
            return state
        }
    }
}