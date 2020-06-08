import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

export default class BoardTile extends Component {
    static propTypes = {
        card: PropTypes.object,
        token: PropTypes.bool,
        fn: PropTypes.func
    }
    
    rnd = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    state = {
        offset: {
            x: this.rnd(1, 4),
            y: this.rnd(3, 10),
            deg: this.rnd(0, 360)
        }
    }


    toggleToken = () => {
        this.setState({ token: !this.state.token });
    }

    render() {
        const { card, token, fn } = this.props;
        const { offset } = this.state;
        const style = {
            transform: `rotate(${offset.deg}deg)`,
            left: `${offset.x}vh`,
            top: `${offset.y}vh`
        }
        return (
            <div onClick={ fn } className="board_tile">
                <Image src={ card.src } className="board_image" />
                {
                    token ? 
                        <Image src="img/token.png" className="token" style={ style } />
                        : null
                }
            </div>
        )
    }
}
