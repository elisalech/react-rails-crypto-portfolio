import React, { Component } from 'react'

import PortfolioItem from './PortfolioItem'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { portfolio } = this.props
    const portfolioItems = portfolio.map((item, idx) => (
      <PortfolioItem key={idx} item={item} />
    ))
    const total = portfolio.reduce((all, current) => {
      return all + current.value
    }, 0)
    const style = { color: '#000' }

    return (
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value--header" style={style}>
            Your total portfolio value is
          </div>
          <div className="portfolio-value--content" style={style}>
            {total}
          </div>
        </div>
        <div className="portfolio-items">{portfolioItems}</div>
      </div>
    )
  }
}
