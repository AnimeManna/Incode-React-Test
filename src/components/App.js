import React,{Component} from 'react'

import Sidebar from './Sidebar'
import Layout from '../containers/Layout'

class App extends Component{
    render(){
        return(
            <div>
                <Sidebar/>
                <Layout/>
            </div>
        )
    }
}

export default App