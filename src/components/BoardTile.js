import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

export default class BoardTile extends Component {
    static propTypes = {
        card: PropTypes.object
    }

    state = {
        hasToken: false
    }


    toggleToken = () => {
        this.setState({ hasToken: !this.state.hasToken });
    }

    render() {
        const { card } = this.props;
        return (
            <div onClick={ this.toggleToken } className="board_tile">
                <Image src={ card.src } className="board_image" />
                {
                    this.state.hasToken ? 
                        <Image src="img/token.png" className="token" />
                        : null
                }
            </div>
        )
    }
}
