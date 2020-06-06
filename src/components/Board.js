import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card';
import Image from './Image';
import BoardTile from './BoardTile';

export default class Board extends Component {
    static propTypes = {
        id: PropTypes.number
    }

    state = {
        cards: [],
        boardCards: []
    }
    
    componentDidMount() {
        const cards = [];
        const offset = 5;
        for(var i = 0; i < 54; i++) {
            cards.push({id: i + 1, src: `img/${i + 1}.png` });
        }
        this.generateBoard(cards);
    }

    generateBoard = (cards) => {
        let i = 0, j = 0, temp = null;
        
        for (i = cards.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp
        }
        const boardCards = cards.slice(0, 16);
        this.setState({ cards, boardCards });
    }

    render() {
        const { boardCards } = this.state;
        return (
            <React.Fragment>
                {
                    boardCards && boardCards.length && 
                    <div className="board">
                        <div>
                            <BoardTile card={ boardCards[0] } />
                            <BoardTile card={ boardCards[1] } />
                            <BoardTile card={ boardCards[2] } />
                            <BoardTile card={ boardCards[3] } />
                        </div>
                        <div>
                            <BoardTile card={ boardCards[4] } />
                            <BoardTile card={ boardCards[5] } />
                            <BoardTile card={ boardCards[6] } />
                            <BoardTile card={ boardCards[7] } />
                        </div>
                        <div>
                            <BoardTile card={ boardCards[8] } />
                            <BoardTile card={ boardCards[9] } />
                            <BoardTile card={ boardCards[10] } />
                            <BoardTile card={ boardCards[11] } />
                        </div>
                        <div>
                            <BoardTile card={ boardCards[12] } />
                            <BoardTile card={ boardCards[13] } />
                            <BoardTile card={ boardCards[14] } />
                            <BoardTile card={ boardCards[15] } />
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}
