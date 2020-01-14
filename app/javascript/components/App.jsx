import React, { Component } from 'react'
import axios from 'axios'

const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

import PortfolioContainer from './PortfolioContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <PortfolioContainer />
      </div>
    )
  }
}
