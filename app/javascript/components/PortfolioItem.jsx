import React, { Component } from 'react'

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { item } = this.props
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="header">Currency:</div>
            <div className="text">{item.currency.name}</div>
          </div>
          <div className="col">
            <div className="header">Current price:</div>
            <div className="text">{item.current_price}</div>
          </div>
          <div className="col">
            <div className="header">Your amount:</div>
            <div className="text">{item.amount}</div>
          </div>
          <div className="col">
            <div className="header">Current value:</div>
            <div className="text">{item.value}</div>
          </div>
        </div>
      </div>
    )
  }
}
