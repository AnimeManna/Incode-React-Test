import {
    XHR_CLIENTS_SUCCESS,
    GET_CLIENT,
    SEARCH_CLIENT
} from "../ActionsType/ActionTypes";


const initialState={
    clients:[

    ],
    user:{

    },
    viewClients:[

    ],
    searchInput:''
}


export default (state=initialState, action) =>{
    switch (action.type){
        case XHR_CLIENTS_SUCCESS:{
            return{
                ...state,
                clients:[
                    ...action.payload
                ],
                viewClients:[
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
        case SEARCH_CLIENT:{
            const {payload} = action
            return {
                ...state,
                searchInput:payload
            }
        }
        default:{
            return state
        }
    }
}