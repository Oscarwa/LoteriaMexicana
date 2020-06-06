import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card';


export default class Stack extends Component {
    static propTypes = {
        cards: PropTypes.array,
        downside: PropTypes.bool,
        list: PropTypes.bool
    }

    static defaultProps = {
        list: false
    }


    render() {
        const { cards, list } = this.props;
        return (
            <React.Fragment>
                {
                    list ? (
                        <div className="list">
                            { cards && cards.map((c, index) => {
                                return (
                                    <Card 
                                        key={c.id}
                                        id={c.id}
                                        downside={ false }
                                        offset={ {x: -(index * 10), y: 0} }
                                    />
                                )
                            })
                        }
                        </div>
                    )
                    : (
                        <div className="stack">
                            { 
                                cards && cards.map(c => {
                                    return (
                                        <Card
                                            key={c.id}
                                            id={c.id}
                                            downside={this.props.downside}
                                            skew={ c.skew }
                                            offset={ c.offset }
                                            />
                                            );
                                        })
                            }
                        </div>
                    )
                }   
            </React.Fragment>
        )
    }
}
