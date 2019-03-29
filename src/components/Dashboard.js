import React, { Component } from "react"
import Product from "./Product"

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount = () => {}

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Product />
      </div>
    )
  }
}

export default Dashboard
