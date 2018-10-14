import {createSelector} from 'reselect'

const searchInput = (state) => state.clientsReducer.searchInput

const clients = (state) => state.clientsReducer.clients;

export const clientsSelector = createSelector(
    [clients,searchInput],
    (items)=>{
        return items.filter(
            (value)=>{
                for(let key in value){
                    for(let newKey in value[key]){
                        if(value[key][newKey].includes(searchInput())){
                            return value
                            continue;
                        }
                    }
                }
            }
        )
    }
)