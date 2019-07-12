import React, {Component} from 'react'

export default class StoreList extends Component {
    render() {
        return (
            <section className="store">
            <h1>Store Locations</h1>
        {
            this.props.stores.map(store =>
                <div key={store.id}>
                    <h3>{store.name}</h3>
                    <div>{store.address}</div>
                </div>
            )
        }
        </section>
        )
    }
}