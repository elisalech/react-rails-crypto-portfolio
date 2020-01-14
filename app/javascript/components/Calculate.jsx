import React, { Component } from 'react'

export default class Calculate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>How much {this.props.active_currency.name} do you own?</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>Enter amount own</label>
            <input
              onChange={this.props.handleChange}
              value={this.props.amount}
              className="field"
              autoComplete="off"
              type="text"
              name="amount"
              placeholder="how nuch own?"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="calculate-btn"
              value="Calculate Total"
            />
          </div>
        </form>
      </div>
    )
  }
}
