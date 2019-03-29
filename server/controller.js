
module.exports = {
  get: (req, res) => {
    const db = req.app.get("db")
    db.getProducts()
      .then((products) => {
        res.status(200).send(products)
      })
      .catch((err) => console.log(err))
  },
  create: (req, res) => {
    const { name, price, image_url } = req.body
    const db = req.app.get("db")
    db.createProduct([name, price, image_url])
      .then(() => {
        res.status(200).send("product created")
      })
      .catch((err) => console.log("create failed", err))
  },
  delete: (req, res) => {
      const db = req.app.get('db')
      let { id } = req.params
      db.deleteProduct(id)
      .then((product) => {
        res.status(200).send(product)
      })
      .catch((err) => console.log("delete failed", err))
  },
  update: (req, res) => {
    const { id } = req.params
    const { name, price, image_url } = req.body
    const db = req.app.get("db")
    db.updateProduct([id, name, price, image_url])
      .then(() => {
        res.status(200).send("updated!")
      })
      .catch((err) => console.log("update failed", err))
  },
}
