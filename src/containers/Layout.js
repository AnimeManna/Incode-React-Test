import React, {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Client from '../components/Client'

class Layout extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/client/:id' component={Client} />
                </Switch>
            </div>
        )
    }

}

export default Layout