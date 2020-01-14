import React, { Component } from 'react'
import axios from 'axios'

import Search from './Search'
import Calculate from './Calculate'
import Portfolio from './Portfolio'

export default class PortfolioContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAmount = this.handleAmount.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    axios
      .post('http://localhost:3000/search', {
        search: e.target.value
      })
      .then(data => {
        console.log('then data', data)
        const nameData = [...data.data.currencies].map(
          currency => currency.name
        )
        this.setState({
          search_results: [...data.data.currencies]
        })
      })
      .catch(data => {
        console.log('CATCH data', data)
      })
    // console.log('results', this.state.search_results)
  }

  handleSelect(e) {
    const { search_results } = this.state
    e.preventDefault()
    const id = e.target.getAttribute('data-id')
    const activeCurrency = search_results.find(item => item.id == id)

    this.setState({
      active_currency: activeCurrency,
      search_results: []
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let { active_currency, amount } = this.state

    axios
      .post('http://localhost:3000/calculate', {
        id: active_currency.id,
        amount: amount
      })
      .then(data => {
        console.log('THEN data', data)
        this.setState({
          amount,
          active_currency: null,
          portfolio: [...this.state.portfolio, data.data]
        })
      })
      .catch(data => {
        console.log('CATCH data', data)
      })
    console.log('submit', this.state)
  }

  handleAmount(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {
      search_results,
      name,
      active_currency,
      amount,
      portfolio
    } = this.state
    const searchOrCalc = active_currency ? (
      <Calculate
        handleChange={this.handleAmount}
        handleSubmit={this.handleSubmit}
        active_currency={active_currency}
        amount={amount}
      />
    ) : (
      <Search
        handleSelect={this.handleSelect}
        search_results={search_results}
        handleChange={this.handleChange}
      />
    )

    return (
      <div>
        {searchOrCalc}
        <Portfolio portfolio={portfolio} />
        <div onClick={() => console.log(name)}>check 'name'</div>
      </div>
    )
  }
}
