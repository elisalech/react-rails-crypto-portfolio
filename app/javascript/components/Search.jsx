import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const search_results = this.props.search_results.map(curr => (
      <li
        onClick={this.props.handleSelect}
        key={curr.id}
        data-id={curr.id}
        className="currency-list-item"
      >
        <a href="#" className="currency">
          <span>{curr.name}</span>
          <span>{curr.currency_symbol}</span>
        </a>
      </li>
    ))
    return (
      <div>
        <h1>Crypto Portfolio</h1>
        <form>
          <div className="form-group">
            <label>Search for currency</label>
            <input
              onChange={this.props.handleChange}
              value={this.props.name}
              className="field"
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Bitcoin..."
            />
          </div>
        </form>
        <div className="currency-list">{search_results}</div>
      </div>
    )
  }
}
// onChange={this.props.handleChange}
