import React, { Component } from "react"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className="header">
        <div className='icon'>
          <img
            src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/shelfie_icon.png"
            alt=""
          />
        </div>
        <h1 className="title">Shelfie</h1>
      </div>
    )
  }
}

export default Header
