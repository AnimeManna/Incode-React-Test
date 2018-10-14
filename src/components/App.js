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
                <Grid columns={2}>
                    <Grid.Column width={4}>
                        <Sidebar/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Layout/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default App