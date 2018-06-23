import React, { Component } from 'react';

export default class Square2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick() {
        switch(this.state.hasBeenClicked) {
            case true:
                console.log('this has clready been clicked')
                this.props.clickedTwice()
            break;
            case false:
                this.setState({
                    hasBeenClicked: true
                }, console.log(this.state.hasBeenClicked, 'after state change'))
                this.props.scoreUp()
        }
    }

    render() {
        return(
            <div id='square2' onClick={(e) => {this.handleClick()}}> </div>
        )
    }
}