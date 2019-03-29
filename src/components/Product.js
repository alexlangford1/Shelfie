import React, { Component } from "react"
import axios from "axios"

class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      edit: true,
      product: "",
      price: 0,
      image_url: "",
    }
  }

  changeHandle = (e) => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  undoToggle = () => {
    this.setState({ edit: true })
  }

  handleEdit = () => {
    this.setState({ edit: false })
  }

  getFn = () => {
    axios.get("/api/product").then((res) => {
      this.setState({ products: res.data })
    })
  }
  handleDelete = (id) => {
    axios.delete(`/api/product/${id}`).then(() => this.getFn())
  }
  componentDidMount = () => {
    this.getFn()
  }

  render() {
    let { products, edit } = this.state
    return edit ? (
      <div>
        {products
          .slice(0)
          .reverse()
          .map((e) => {
            return (
              <div key={e.product_id} className="product-box">
                <img src={e.image_url} alt="" width="350px" />
                <div>
                  <h2>{e.name}</h2>
                  <h2>${e.price}</h2>
                  <button onClick={this.handleEdit}>edit</button>
                  <button onClick={() => this.handleDelete(e.product_id)}>
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
      </div>
    ) : (
      <div className="edit-toggle">
        <h1>Edit product</h1>
        <input
          name="product"
          type="text"
          placeholder="product"
          onChange={this.changeHandle}
        />
        <input
          name="price"
          type="text"
          placeholder="price"
          onChange={this.changeHandle}
        />
        <input
          name="image_url"
          type="text"
          placeholder="image_url"
          onChange={this.changeHandle}
        />
        <button type="submit" onClick={this.undoToggle}>
          Submit
        </button>
      </div>
    )
  }
}

export default Product
