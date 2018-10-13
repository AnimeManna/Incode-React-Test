import React, {Component} from 'react'

import {connect} from 'react-redux'

import ListItem from './ListItem'

import {
    Item,
    Image,
    List,
    Segment
} from 'semantic-ui-react'

class Client extends Component{
    render(){
        console.log('USER ID',this.props.user.id)
        const {general} = this.props.user
        const {job} = this.props.user
        const {contact} = this.props.user
        const {address} = this.props.user
        return(
                <Segment>
                    <Item.Group style={{display:'flex', justifyContent:'flex-start'}}>
                        <Item.Image src={general.avatar} width="128" height="128" />
                        <Item.Content style={{padding:10}}>
                            <List>
                                <ListItem icon="user" firstText={general.firstName} secondText={general.lastName}  />
                                <ListItem icon="briefcase" firstText={job.company} secondText={job.title}  />
                                <ListItem icon="marker" firstText={address.country} secondText={address.city} thirdText={address.street} fourthText={address.zipCode} />
                                <ListItem icon="mail" firstText={contact.email} secondText={contact.phone} />
                            </List>
                        </Item.Content>
                    </Item.Group>
                </Segment>
        )
    }
}

export default connect(
    state => ({
        user: state.clientsReducer.user
    })
)(Client)