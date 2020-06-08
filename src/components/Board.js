import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card';
import Image from './Image';
import BoardTile from './BoardTile';

export default class Board extends Component {
    static propTypes = {
        boardCards: PropTypes.array
    }

    state = {
        tokens: Array(16).fill(false)
    }

    toggleToken = (i) => {
        const { tokens } = this.state;
        tokens[i] = !tokens[i];
        this.setState({ tokens });
    }

    restart = () => {
        this.setState({ tokens: Array(16).fill(false)});
    }

    render() {
        const { boardCards } = this.props;
        const { tokens } = this.state;
        return (
            <React.Fragment>
                {
                    boardCards && boardCards.length && 
                    <div className="board">
                        <div>
                            <BoardTile card={ boardCards[0] } token={ tokens[0] } fn={ () => { this.toggleToken(0) } } />
                            <BoardTile card={ boardCards[1] } token={ tokens[1] } fn={ () => { this.toggleToken(1) } } />
                            <BoardTile card={ boardCards[2] } token={ tokens[2] } fn={ () => { this.toggleToken(2) } } />
                            <BoardTile card={ boardCards[3] } token={ tokens[3] } fn={ () => { this.toggleToken(3) } } />
                        </div>
                        <div>
                            <BoardTile card={ boardCards[4] } token={ tokens[4] } fn={ () => { this.toggleToken(4) } } />
                            <BoardTile card={ boardCards[5] } token={ tokens[5] } fn={ () => { this.toggleToken(5) } } />
                            <BoardTile card={ boardCards[6] } token={ tokens[6] } fn={ () => { this.toggleToken(6) } } />
                            <BoardTile card={ boardCards[7] } token={ tokens[7] } fn={ () => { this.toggleToken(7) } } />
                        </div>
                        <div>
                            <BoardTile card={ boardCards[8] } token={ tokens[8] } fn={ () => { this.toggleToken(8) } } />
                            <BoardTile card={ boardCards[9] } token={ tokens[9] } fn={ () => { this.toggleToken(9) } } />
                            <BoardTile card={ boardCards[10] } token={ tokens[10] } fn={ () => { this.toggleToken(10) } } />
                            <BoardTile card={ boardCards[11] } token={ tokens[11] } fn={ () => { this.toggleToken(11) } } />
                        </div>
                        <div>
                            <BoardTile card={ boardCards[12] } token={ tokens[12] } fn={ () => { this.toggleToken(12) } } />
                            <BoardTile card={ boardCards[13] } token={ tokens[13] } fn={ () => { this.toggleToken(13) } } />
                            <BoardTile card={ boardCards[14] } token={ tokens[14] } fn={ () => { this.toggleToken(14) } } />
                            <BoardTile card={ boardCards[15] } token={ tokens[15] } fn={ () => { this.toggleToken(15) } } />
                        </div>
                    </div>
                }
                <button onClick={ this.restart }>Reiniciar</button>
            </React.Fragment>
        )
    }
}
