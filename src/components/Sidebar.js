import React, {Component} from 'react'

import {createSelector} from 'reselect'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import {xhrData} from "../actions/xhrData";
import {getClient} from "../actions/getClient";
import {searchClient} from "../actions/searchClient";

import {clientsSelector} from "../selectors/clientsSelector";


import {
    Input,
    List,
    Image,
    Segment
} from 'semantic-ui-react'

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
        this.changeSearchInput = this.changeSearchInput.bind(this)
    }

    componentDidMount() {
        this.props.xhrData()
    }

    async changeSearchInput(event) { // сделал асинхронным потому что setState работает позже и первое значение пропадает
        const {value} = event.target
        await this.setState({
            searchInput: value
        });
        this.props.searchClient(this.state.searchInput);
        console.log(this.state)

    }

    render() {
        console.log(this.props.viewClients);
        // безуспешные попытки найти как это сделать в semantic-ui а не через style
        return (
            <Segment>
                <Input icon="search" placeholder="Search" onChange={this.changeSearchInput}/>
                <List style={{overflow: 'auto', maxHeight: 500, minWidth: '100%'}}>
                    {this.props.viewClients.map((value) => {
                        const {general} = value;
                        const {job} = value
                        return (
                            <Link to={`/client/${value.id}`} key={value.id} style={{color: 'black', padding: 10}}>
                                <List.Item style={{display: 'flex'}} onClick={() => {
                                    this.props.getClient(value.id)
                                }}>
                                    <Image src={general.avatar} style={{width: 80, height: 80}}/>
                                    <List.Content>
                                        <List.Header style={{
                                            fontSize: 20,
                                            padding: 5
                                        }}> {general.firstName} {general.lastName} </List.Header>
                                        <List.Description
                                            style={{fontSize: 13, padding: 5}}> {job.title} </List.Description>
                                    </List.Content>
                                </List.Item>
                            </Link>
                        )
                    })}
                </List>
            </Segment>
        )
    }
}

const mapDispatchToProps = {
    xhrData,
    getClient,
    searchClient
}



const searchInput = (state) => state.clientsReducer.searchInput

const clients = (state) => state.clientsReducer.clients

const indexSelector = createSelector(
    [clients,searchInput],
    (client,search)=>{
        return clientsSelector(client,search)
    }
)

const mapStateToProps = (state) => ({
    viewClients: indexSelector(state)
})




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)