import React, {Component} from 'react'

import {
    List,
    Segment
} from 'semantic-ui-react'

class ListItem extends Component {
    render() {
        console.log(this.props)
        return (
            <List.Item>
                <List.Icon name={this.props.icon}/>
                <List.Content> {this.props.firstText} {this.props.secondText} {this.props.thirdText} {this.props.fourthText}</List.Content>
            </List.Item>
        )
    }
}

export default ListItem