import React, { Component } from "react"
import axios from "axios"

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAIwGWTaDLzefcfbi3sI_g_gE0KS8VjaD-rlIUrCFGEdqlZil",
      name: "",
      price: 0,
    }
  }

  changeHandle = (e) => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }
  createProduct = (product) => {
    axios.post("/api/product", product).then((res) => {
      console.log(res.data)
    })
  }

  handleAdd = () => {
    let { name, price, image_url } = this.state
    this.createProduct({ 
        name, 
        price, 
        image_url
    })
  }

  render() {
    return (
      <form className="form">
        <h2>add a product</h2>
        <img src={this.state.image_url} alt="" width="240px"  max-height="240px"/>
        <input
          autoComplete="off"
          type="text"
          placeholder="product"
          name="name"
          onChange={this.changeHandle}
        />
        <input
          autoComplete="off"
          type="number"
          placeholder="price"
          name="price"
          onChange={this.changeHandle}
        />
        <input
          autoComplete="off"
          type="text"
          placeholder="image"
          name="image_url"
          onChange={this.changeHandle}
        />
        <br />
        <button onClick={this.handleAdd} type='submit'>add</button>
        <button type="reset" >cancel</button>
      </form>
    )
  }
}

export default Form
