import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ['one','two','three','four','five','six']
    };
    constructor(props) {
        super(props)
        this.state = {
            dice1: 'one',
            dice2: 'one',
            isRolling: false
        }
        this.playDices = this.playDices.bind(this)
    };
    playDices(e) {
        const num1 = Math.floor(Math.random() * 6)
        const num2 = Math.floor(Math.random() * 6)
        // set states to new <roll></roll>
        this.setState({
            dice1: this.props.sides[num1],
            dice2: this.props.sides[num2],
            isRolling: true
        })  
        //wait one second,then set isRolling to false
        setTimeout(() => {
            this.setState({ isRolling:false })
        }, 1000);
    };
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice face={this.state.dice1} rolling={this.state.isRolling}/>
                    <Dice face={this.state.dice2} rolling={this.state.isRolling}/>  
                </div>
                <button onClick={this.playDices} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling..' : 'Roll Dices'}
                </button>
            </div>
        )
    };
}

export default RollDice;