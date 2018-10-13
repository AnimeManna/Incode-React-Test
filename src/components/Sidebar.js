import React, {Component} from 'react'

import {
    Input
} from 'semantic-ui-react'

class Sidebar extends Component{
    render(){
        return(
            <div>
                <Input icon="search" placeholder="Search" width="100%" />
            </div>
        )
    }
}

export default Sidebar