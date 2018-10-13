import React, {Component} from 'react'

import {connect} from 'react-redux'

import {xhrData} from "../actions/xhrData";

import {
    Input
} from 'semantic-ui-react'

class Sidebar extends Component{

    componentDidMount(){
        this.props.xhrData()
    }

    render(){
        console.log(this.props.clients);
        return(
            <div>
                <Input icon="search" placeholder="Search" width="100%" />
            </div>
        )
    }
}

const mapDispatchToProps = {
    xhrData
}

export default connect(
    state => ({
        clients: state.clientsReducer.clients
    }),
    mapDispatchToProps
)(Sidebar)