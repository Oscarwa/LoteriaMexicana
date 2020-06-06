import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Image extends Component {
    static propTypes = {
        src: PropTypes.string,
        className: PropTypes.string
    }

    static defaultProps = {
        className: "card_image"
    }

    render() {
        const { src, className } = this.props;
        return (
            <img src={ src } className={ className } alt="?" />
        )
    }
}
