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
            return <Button cat = { cat }
            onClick = {
                () => this.handleClick(cat) }
            />
        })
    }

    handleClick(cat) {
        const selected = this.state.active
        if(selected.indexOf(cat)) {
            selected.pop(cat)
            console.log(selected)
        } else {
            selected.push(cat)
            console.log("push")
            console.log(selected)
        }
        this.setState({ active: selected })
    }

    getInventory() {
        inventory.filter((item) => {
            return this.state.active.indexOf(item.category) || this.state.active === []
        })

        return inventory.map(({ id, name, price }) => {
            return (<div key = { id }>
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

                    <div> { this.getInventory() } </div>

                </div>
        );
    }
}

export default App;