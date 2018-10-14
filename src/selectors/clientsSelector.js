export const clientsSelector = (client,search)=>{
        return client.filter(
            (value)=>{
                for(let key in value){
                    for(let newKey in value[key]){
                        if(value[key][newKey].includes(search)){
                            return value
                            continue;
                        }
                    }
                }
            }
        )
    }
