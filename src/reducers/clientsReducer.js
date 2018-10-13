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

    ]
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
           const newClients =  state.clients.filter((value)=>{
               for(let key in value){
                   for(let newKey in value[key]){
                       if(value[key][newKey].includes(payload)){
                           return value
                           continue;
                       }
                   }
               }
            })
            return {
                ...state,
                viewClients: newClients
            }
        }
        default:{
            return state
        }
    }
}