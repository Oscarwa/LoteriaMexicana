import React, { Component } from 'react'
import Stack from './Stack'

export default class Deck extends Component {
    
    state = {
        cards: [],
        opened: [],
        closed: [],
        review: []
    }

    componentDidMount() {
        const cards = [];
        const offset = 5;
        for(var i = 0; i < 54; i++) {
            cards.push({id: i + 1, skew: this.rnd(-10, 10), offset: {x: this.rnd(-offset,offset), y: this.rnd(-offset, offset)} });
        }
        this.refresh(cards);
    }

    rnd = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    refresh = (cards) => {
        this.shuffle(cards);
        console.log(cards);
    }
      
    shuffle = (cards) => {
        let i = 0, j = 0, temp = null;
        
        for (i = cards.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp
        }
        this.setState({ cards, closed: cards });
    }

    next = () => {
        const { opened, closed, review } = this.state; 
        while(review.length) {
            const c = review.pop();
            opened.push(c);
        }
        const current = closed.pop();
        opened.push(current);
        this.setState({ closed, opened, review });
    }

    review = () => {
        const { opened, review } = this.state; 
        if(review.length >= 8) {
            return;
        }
        const current = opened.pop();
        review.push(current);
        this.setState({ opened, review });
    }

    render() {
        const { opened, closed, review } = this.state; 
        return (
            <div className="deck">
                <div className="closed" onClick={ this.next } >
                    <Stack cards={ closed } downside={true} />
                </div>
                <div className="opened" onClick={ this.review }>
                    <Stack cards={ opened } />
                </div>
                <div className="review">
                    <Stack cards={review} list={ true } />
                </div>
            </div>
        )
    }
}
