import React, { Component } from 'react'
import update from 'immutability-helper'
import math from 'mathjs'
import './App.css'
import Display from './Display'
import Button from './Button'
import Buttons from './Buttons'

class App extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      this.setState({
        operations: [result],
      })
    }
  }
  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'del':
        this.state.operations.pop();
        this.setState({
          operations: this.state.operations
        });
        break;
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations,
        })
        break
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='col-lg-4 col-md-4'></div>
        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <div className="App">
            <h2 className='heading-title'>Cal-C</h2>
            <Display data={this.state.operations} />
            <Buttons>
              <Button onClick={this.handleClick} label="CE" value="del" />
              <Button onClick={this.handleClick} label="7" value="7" />
              <Button onClick={this.handleClick} label="4" value="4" />
              <Button onClick={this.handleClick} label="1" value="1" />
              <Button onClick={this.handleClick} label="." value="." />

              <Button onClick={this.handleClick} label="C" value="clear" />
              <Button onClick={this.handleClick} label="8" value="8" />
              <Button onClick={this.handleClick} label="5" value="5" />
              <Button onClick={this.handleClick} label="2" value="2" />
              <Button onClick={this.handleClick} label="0" value="0" />

              <Button onClick={this.handleClick} label="^" value="^" />
              <Button onClick={this.handleClick} label="9" value="9" />
              <Button onClick={this.handleClick} label="6" value="6" />
              <Button onClick={this.handleClick} label="3" value="3" />
              <Button onClick={this.handleClick} label="00" value="00" />

              <Button onClick={this.handleClick} label="/" value="/" />
              <Button onClick={this.handleClick} label="*" value="*" />
              <Button onClick={this.handleClick} label="-" value="-" />
              <Button onClick={this.handleClick} label="+" value="+" />
              <Button onClick={this.handleClick} label="=" value="equal" />
            </Buttons>
            <div className='footer'>
            <hr className='horizon'></hr>
            <p className='created-by'>Crafted by Nikhil Rustagi</p>
            <p className='created-by'> View my portfolio
              <i className='fas fa-feather icon'></i>
              <a href='hhtps://nikhilrstg18.github.io/nikhil-rustagi/'>
                <strong>nikhil-rustagi
                </strong>
              </a>
            </p>
          </div>
          </div>
          
        </div>
        <div className='col-lg-4 col-md-4'></div>
      </div>
    )
  }
}

export default App