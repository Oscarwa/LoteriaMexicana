import React, { Component } from 'react'
import Board from './Board'

export default class Player extends Component {
    state = {
        cards: [],
        boardCards: []
    }
    
    componentDidMount() {
        const cards = [];
        for(var i = 0; i < 54; i++) {
            cards.push({id: i + 1, src: `/img/${i + 1}.PNG` });
        }
        this.setState({ cards }, () => {
            this.generateBoard();
        })
    }

    generateBoard = () => {
        const { cards } = this.state;
        let i = 0, j = 0, temp = null;
        
        for (i = cards.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp
        }
        const boardCards = cards.slice(0, 16);
        this.setState({ boardCards });
    }

    render() {
        return (
            <div>
                <Board boardCards={ this.state.boardCards } />
                <button onClick={ this.generateBoard }>Cambiar</button>
            </div>
        )
    }
}
