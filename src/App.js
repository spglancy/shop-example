import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import Button from './Button'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      active: '',
    }
  }

  getCategories() {
      return categories.map((cat) => {
        return <Button cat={cat} onClick={() => this.handleClick(cat)} />
      })
  }

  handleClick(cat) {
    this.setState({active: cat})
    console.log(cat)
    console.log(this.state.active)
  }

  getInventory() {
    const items = inventory.filter((item) => {
      return item.category = this.state.active
    })
    return items.map(({ id, name, price }) => {
      return(
        <div key={id}>
          <h1>{name}</h1>
          <p>{price}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>

        <ul>
          {this.getCategories()}
        </ul>

        <div>
          {this.getInventory()}
        </div>

      </div>
    );
  }
}

export default App;
