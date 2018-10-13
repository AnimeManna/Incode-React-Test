import React,{Component} from 'react'

import Sidebar from './Sidebar'
import Layout from '../containers/Layout'

import {
    Grid
} from 'semantic-ui-react'

class App extends Component{
    render(){
        return(
            <div>
                <Grid columns={2} divided>
                    <Grid.Column width={3}>
                        <Sidebar/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Layout/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default App