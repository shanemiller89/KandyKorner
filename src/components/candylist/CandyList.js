import React, {Component} from 'react'

export default class CandyList extends Component {
    render() {
        return (
            <section className="candies">
            <h1>Candy List</h1>
        {
            this.props.candies.map(candie =>
                <div key={candie.id}>
                    <div><strong>Candy: </strong>{candie.name}</div>
                    <div><strong>Type: </strong></div>
                </div>
            )
        }
        </section>
        )
    }
}