import React, { Component } from "react"
import axios from "axios"

class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
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
    let { products } = this.state
    return (
      <div>
        {products.slice(0).reverse().map((e) => {
          return (
            <div key={e.product_id} className="product-box">
              <img src={e.image_url} alt="" width="350px" />
              <div>
                <h2>{e.name}</h2>
                <h2>${e.price}</h2>
                <button>edit</button>
                <button onClick={() => this.handleDelete(e.product_id)}>
                  Delete
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Product
