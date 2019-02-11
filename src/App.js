import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import Button from './Button'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: [],
        }
    }

    getCategories() {
        return categories.map((cat) => {
            const active = this.state.active.indexOf(cat) >= 0 ? "selected": ""
            return <Button selected = { active } key = { cat } cat = { cat } onClick = { () => this.handleClick(cat) } />
        })
    }

    handleClick(cat) {
        const selected = this.state.active
        const index = selected.indexOf(cat)
        if(index >= 0) {
            selected.splice(index, 1)
        } else if(index < 0){
            selected.push(cat)
        }
        this.setState({ active: selected })
    }

    getInventory() {
        const items = inventory.filter((item) => {
            return this.state.active.indexOf(item.category) >= 0 || this.state.active.length === 0
        })

        return items.map(({ id, name, price }) => {
            return (<div className = "product" key = { id }>
                        <h1> { name } </h1>
                        <p> { price } </p> 
                    </div>
            )
        })
    }

    render() {
        return (<div className = "App">
                    <h1> Show products here </h1>

                    <ul> { this.getCategories() } </ul>

                    <div className = "products"> { this.getInventory() } </div>

                </div>
        );
    }
}

export default App;