import React, {Component} from 'react'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import {xhrData} from "../actions/xhrData";
import {getClient} from "../actions/getClient";

import {
    Input,
    List,
    Image,
} from 'semantic-ui-react'

class Sidebar extends Component {

    componentDidMount() {
        this.props.xhrData()
    }

    render() {
        console.log(this.props.clients);
        // безуспешные попытки найти как это сделать в semantic-ui а не через style
        return (
            <div>
                <Input icon="search" placeholder="Search" style={{width:'100%'}} />
                <List style={{overflow:'auto', maxHeight:500, minWidth:'100%'}} >
                    {this.props.clients.map((value) => {
                        const {general} = value;
                        const {job} = value
                        return (
                            <Link to={`/client/${value.id}`} key={value.id} style={{color:'black',padding:10}}>
                                    <List.Item style={{display:'flex'}} onClick={()=>{
                                        this.props.getClient(value.id)
                                    }} >
                                        <Image  src={general.avatar} style={{width:80, height:80}} />
                                        <List.Content>
                                            <List.Header> {general.firstName} {general.lastName} </List.Header>
                                            <List.Description> {job.company} </List.Description>
                                        </List.Content>
                                    </List.Item>
                            </Link>
                        )
                    })}
                </List>
            </div>
        )
    }
}

const mapDispatchToProps = {
    xhrData,
    getClient
}

export default connect(
    state => ({
        clients: state.clientsReducer.clients
    }),
    mapDispatchToProps
)(Sidebar)