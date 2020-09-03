import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from './Image';

export default class Card extends Component {
    static propTypes = {
        id: PropTypes.number,
        downside: PropTypes.bool,
        skew: PropTypes.number,
        offset: PropTypes.object
    }

    static defaultProps = {
        skew: 0,
        offset: {x:0,y:0}
    }


    render() {
        const { downside, skew, offset, id } = this.props;
        let imgSrc = 'LoteriaMexicana/img/' + id + '.png';
        let style = {};
        if(downside) {
            imgSrc = 'LoteriaMexicana/img/B.png';
        } else {            
            style = {
                transform: `rotate(${skew}deg)`,
                right: `${offset.x}rem`,
                top: `${offset.y}rem`,
            };
        }
        return (
            <div className={ downside ? "back" : "card" } style={ style }>
                <Image src={ imgSrc } />
            </div>
        )
    }
}
